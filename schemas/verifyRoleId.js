const { Schema, model } = require("mongoose");
const roleIdSchema = new Schema({
  guildId: String,
  roleId: String,
});

module.exports = model("verifyRole", roleIdSchema, "verificationRoles");
