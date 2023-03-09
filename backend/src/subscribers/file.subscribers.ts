import { EntitySubscriberInterface, EventSubscriber } from "typeorm";
import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";

import { File } from "../entity/index";

const s3client = new S3Client({
  endpoint: process.env.DO_SPACES_ENDPOINT,
  region: process.env.DO_SPACES_REGION,
  credentials: {
    accessKeyId: process.env.DO_SPACES_ACCESS_KEY_ID,
    secretAccessKey: process.env.DO_SPACES_SECRET_ACCESS_KEY,
  },
});

@EventSubscriber()
export default class FileEntitySubscriber
  implements EntitySubscriberInterface<Event>
{
  listenTo() {
    return File;
  }

  // listen to after insert events
  async afterInsert(event) {
    // update the url of the file
    const file = await event.manager.getRepository(File).findOne({
      where: { id: event.entity.id },
    });

    file.url = `http://localhost:9000/files/${file.id}`;

    await event.manager.getRepository(File).save(file);
  }

  async beforeRemove(event) {
    // when a file is removed, delete the file from the droplet
    const { key } = event.entity;

    const params = {
      Bucket: process.env.DO_SPACES_NAME,
      Key: key,
    };

    await s3client.send(new DeleteObjectCommand(params));
  }
}
