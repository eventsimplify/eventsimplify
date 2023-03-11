import { EntitySubscriberInterface, EventSubscriber } from "typeorm";

import { Organization, OrganizationVerification } from "../entity/index";

@EventSubscriber()
export default class OrganizationSubscriber
  implements EntitySubscriberInterface<Organization>
{
  listenTo() {
    return Organization;
  }

  // listen to after insert organization
  async afterInsert(event) {
    const verification = new OrganizationVerification();

    verification.organization_id = event.entity.id;
    verification.status = "not_started";
    verification.current_step = 1;

    await event.manager
      .getRepository(OrganizationVerification)
      .save(verification);
  }
}
