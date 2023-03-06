import { EntitySubscriberInterface, EventSubscriber } from "typeorm";

import { Organization } from "../entity/index";

@EventSubscriber()
export default class OrganizationSubscriber
  implements EntitySubscriberInterface<Organization>
{
  listenTo() {
    return Organization;
  }

  // listen to after insert organization
  async afterInsert(event) {}
}
