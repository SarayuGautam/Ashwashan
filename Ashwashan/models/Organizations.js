const { Schema, model } = require("mongoose");
const moment = require("moment");

const organizationSchema = new Schema(
  {
    name: {
      type: String,
    },
    specialization: {
      type: String,
    },
    isOrganization: {
      type: Boolean,
    },
    category: {
      type: String,
    },
    openingHours: {
      type: String,
    },
    location: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

organizationSchema.methods.toJSON = function () {
  const organization = this;
  const organizationObject = organization.toObject();
  organizationObject.createdAt = moment(organizationObject.createdAt).format(
    "ddd, d MMM YYYY"
  );
  organizationObject.updatedAt = moment(organizationObject.updatedAt).format(
    "ddd, d MMM YYYY"
  );
  return organizationObject;
};

const Organization = model("Organization", organizationSchema);

module.exports = Organization;
