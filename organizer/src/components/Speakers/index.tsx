import { useEventContext } from "@/contexts/EventProvider";
import { Row } from "antd";
import React, { useEffect } from "react";
import SpeakerItem from "./SpeakerItem";

const SpeakerList = () => {
  const { speakers, event, getSpeakers } = useEventContext();

  useEffect(() => {
    if (event && speakers.length === 0) {
      getSpeakers();
    }
  }, [event]);
  return (
    <Row gutter={[16, 16]}>
      {speakers.map((speaker) => (
        <SpeakerItem key={speaker.id} speaker={speaker} />
      ))}
    </Row>
  );
};

export default SpeakerList;
