import * as Yup from "yup";

import { OrganizationUser, Role } from "../entity";
import { errorHandler, sendError, sendSuccess } from "../utils";

// @desc    Role get all
// @route   GET /roles/
// @access  Private
export const getAll = async (req, res) => {
  try {
    const roles = await Role.find({
      where: [
        {
          type: "default",
        },
        {
          organizationId: req.organization.id,
        },
      ],
      relations: ["users"],
    });

    return sendSuccess({
      res,
      data: roles,
      message: "Roles fetched successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    Role create
// @route   POST /roles/create
// @access  Private
export const create = async (req, res) => {
  const { name, permissions } = req.body;

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
    permissions: Yup.array().required("Permissions is a required field"),
  });

  try {
    await schema.validate({
      name,
      permissions,
    });

    const role = await Role.create({
      name,
      permissions,
      organizationId: req.organization.id,
    });

    await role.save();

    return sendSuccess({
      res,
      data: role,
      message: "Role created successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    Role update
// @route   PUT /roles/update/:id
// @access  Private
export const update = async (req, res) => {
  const { name, permissions } = req.body;

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
    permissions: Yup.array().required("Permissions is a required field"),
  });

  try {
    await schema.validate({
      name,
      permissions,
    });

    const role = await Role.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!role) {
      return sendError({
        res,
        status: 404,
        data: null,
        message: "Role not found!",
      });
    }

    if (role.type === "default") {
      return sendError({
        res,
        status: 403,
        data: null,
        message: "You don't have permission to update this role!",
      });
    }

    role.name = name;
    role.permissions = permissions;

    await role.save();

    return sendSuccess({
      res,
      data: role,
      message: "Role updated successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc    Role delete
// @route   DELETE /roles/delete/:id
// @access  Private
export const remove = async (req, res) => {
  try {
    const role = await Role.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!role) {
      return sendError({
        res,
        status: 404,
        data: null,
        message: "Role not found!",
      });
    }

    if (role.type === "default") {
      return sendError({
        res,
        status: 403,
        data: null,
        message: "You don't have permission to delete this role!",
      });
    }

    //check if role is used by any user
    const organizationUser = await OrganizationUser.findOne({
      where: {
        roleId: role.id,
      },
    });

    if (organizationUser) {
      return sendError({
        res,
        status: 400,
        data: null,
        message: "Role is used by some users!",
      });
    }

    await role.remove();

    return sendSuccess({
      res,
      data: null,
      message: "Role deleted successfully!",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};
