import { errorHandler, sendError, sendSuccess } from "../utils";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { File } from "../entity";
import MulterFile from "../interfaces/IFile";

const s3client = new S3Client({
  endpoint: process.env.DO_SPACES_ENDPOINT,
  region: process.env.DO_SPACES_REGION,
  credentials: {
    accessKeyId: process.env.DO_SPACES_ACCESS_KEY_ID,
    secretAccessKey: process.env.DO_SPACES_SECRET_ACCESS_KEY,
  },
});

// @desc    File upload
// @route   POST /files/upload
// @access  Private
export const upload = async (req, res) => {
  console.log(req.file);
};

// @desc Banner upload
// @route POST /files/upload-banner
// @access Private
export const uploadBanner = async (req, res) => {
  try {
    if (!req.file) {
      return sendError({
        res,
        status: 400,
        message: "No banner file found",
      });
    }

    const { originalname, size, mimetype, path } = req.file;

    const key = `banners/${uuidv4()}`;

    const params = {
      Bucket: process.env.DO_SPACES_NAME,
      Key: key,
      Body: fs.createReadStream(path),
    };

    // upload file to the bucket
    await s3client.send(new PutObjectCommand(params));

    await File.create({
      name: originalname,
      mimetype: mimetype,
      size: size,
      key,
      relation_id: req.event.id,
      relation_type: "event",
      field: "banner",
    }).save();

    return sendSuccess({
      res,
      data: null,
      message: "Banner uploaded successfully",
    });
  } catch (err) {
    console.log(err);
    errorHandler(res, err);
  }
};

//@desc Get file by key
//@route GET /files/:id
//@access Private
export const getFile = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return sendError({
        res,
        status: 400,
        message: "No file found !",
      });
    }

    const file = await File.findOne({ where: { id } });

    if (!file) {
      return sendError({
        res,
        status: 400,
        message: "No file found !",
      });
    }

    const { key, mimetype } = file;

    const getObjectParams = {
      Bucket: process.env.DO_SPACES_NAME,
      Key: key,
    };

    const { Body } = await s3client.send(new GetObjectCommand(getObjectParams));

    const byteArray = await Body.transformToByteArray();

    const buffer = Buffer.from(byteArray);

    return res
      .status(200)
      .set("Content-Type", mimetype)
      .set("Content-Length", buffer.length.toString())
      .end(buffer);
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    Remove file
// @route   DELETE /files/remove/:id
// @access  Private
export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return sendError({
        res,
        status: 400,
        message: "No file found !",
      });
    }

    const file = await File.findOne({ where: { id } });

    if (!file) {
      return sendError({
        res,
        status: 400,
        message: "No file found !",
      });
    }

    await file.remove();

    return sendSuccess({
      res,
      data: null,
      message: "File removed successfully",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc Upload File by relation_id and relation_type

export const uploadFile = async ({
  file,
  relation_id,
  relation_type,
  field,
  folder,
}: {
  file: MulterFile;
  relation_id: number;
  relation_type: string;
  field: string;
  folder?: string;
}) => {
  try {
    const { originalname, size, mimetype, path, filename } = file;

    const key = folder ? `${folder}/${filename}` : filename;

    const params = {
      Bucket: process.env.DO_SPACES_NAME,
      Key: key,
      Body: fs.createReadStream(path),
    };

    // upload file to the bucket
    await s3client.send(new PutObjectCommand(params));

    await File.create({
      name: originalname,
      mimetype: mimetype,
      size: size,
      key: key,
      relation_id: relation_id,
      relation_type: relation_type,
      field: field,
    }).save();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
