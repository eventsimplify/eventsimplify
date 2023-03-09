import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Upload } from "antd";

import type { UploadFile, UploadProps } from "antd/es/upload/interface";
import { FileService } from "@/services";
import { IFieldProps } from "@/interfaces";
import { useEventContext } from "@/contexts/EventProvider";

const Banner = ({ name, label, rules, extra }: IFieldProps) => {
  const { event, getEvent } = useEventContext();

  const [banner, setBanner] = useState<UploadFile[]>([]);
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [loading, setLoading] = useState("");

  useEffect(() => {
    if (event?.banner && event?.banner.length > 0) {
      let banner = event?.banner[0];

      setBanner([
        {
          uid: String(banner.id),
          name: banner.name,
          status: "done",
          url: banner.url,
          thumbUrl: banner.url,
        },
      ]);

      setBannerLoaded(true);
    } else {
      setBanner([]);
      setBannerLoaded(false);
    }
  }, [event?.banner]);

  const handleUpload = async () => {
    if (banner.length === 0) return;
    setLoading("uploading");

    let bannerFile = banner[0];

    const response = await FileService.uploadBanner(bannerFile);

    if (response) {
      setLoading("");
      await getEvent();
      return;
    }

    setBanner([
      {
        ...banner[0],
        status: "error",
        response:
          "Issue uploading file, please try again. Max file size is 2MB.",
      },
    ]);

    setLoading("");
  };

  const handleRemove = async () => {
    setLoading("removing");

    const response = await FileService.remove(banner[0].uid);

    if (response) {
      setLoading("");

      await getEvent();

      return;
    }

    await getEvent();

    setBanner([
      {
        ...banner[0],
        status: "error",
        response: "Issue removing file, please try again.",
      },
    ]);

    setLoading("");
  };

  const props: UploadProps = {
    name: "banner",
    listType: "picture",
    accept: "image/*",
    onRemove: () => {
      handleRemove();
      return;
    },
    beforeUpload: (_, fileList) => {
      setBanner(fileList);
      return;
    },
    multiple: false,
    maxCount: 1,
    fileList: banner,
  };

  return (
    <Form.Item name={name} label={label} rules={rules} extra={extra}>
      <div>
        <Upload {...props}>
          {banner.length === 0 && (
            <Button icon={<UploadOutlined />}>Select File</Button>
          )}
        </Upload>
        {bannerLoaded === false && (
          <Button
            type="primary"
            onClick={handleUpload}
            disabled={banner === null}
            loading={loading === "uploading"}
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            Upload
          </Button>
        )}
      </div>
    </Form.Item>
  );
};

export default Banner;
