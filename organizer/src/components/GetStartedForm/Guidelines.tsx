import React from "react";
import { Col, Typography } from "antd";

const { Title, Paragraph, Link } = Typography;

const Guidelines = () => {
  return (
    <Col span={24}>
      <Typography>
        <Title>Almost done! Just take a minute to review our guidelines</Title>
        <Paragraph>
          Meetup is all about helping people live fuller, happier lives—with the
          help of strong communities. This means that all groups should:
        </Paragraph>
        <Paragraph>
          <ul>
            <li>Provide growth opportunities for members</li>
            <li>Encourage real human interactions in person or online</li>
            <li>Have a host present at all events</li>
            <li>Be transparent about the group’s intentions</li>
          </ul>
        </Paragraph>
        <Paragraph>
          You can read more about all of this in our
          <Link href="/docs/resources"> communities guidelines</Link>
        </Paragraph>
        <Paragraph>
          Once you submit your group, a human at Meetup will review it based on
          these guidelines and make sure it gets promoted to the right people.
        </Paragraph>
      </Typography>
    </Col>
  );
};

export default Guidelines;
