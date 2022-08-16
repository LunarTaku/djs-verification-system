const { Schema, model } = require("mongoose");
const roleIdSchema = new Schema({
  _id: Schema.Types.ObjectId,
  guildId: String,
  roleId: String,
});

module.exports = model("verifyRole", roleIdSchema, "verificationRoles");
