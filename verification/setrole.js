const {
  SlashCommandBuilder,
  CommandInteraction,
  PermissionFlagsBits,
  CommandInteractionOptionResolver,
} = require("discord.js");

const roleSchema = require("../../schemas/verifyRoleId");
const mongoose = require("mongoose");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setrole")
    .setDescription("Sets the verification Role!")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addRoleOption((option) =>
      option
        .setName("role")
        .setDescription("Role to set the verification role to.")
        .setRequired(true)
    ),

  /**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    let role = interaction.options.getRole("role");
    const roleId = await roleSchema.findOne({ roleId: role.id });

    if (!roleId) {
      verifyRole = await new roleSchema({
        _id: mongoose.Types.ObjectId(),
        guildId: interaction.guild.id,
        roleId: role.id,
      });

      await verifyRole.save().catch(console.error);
      await interaction.reply({
        content: `Successfully set the verification role to ${role.name}!`,
        ephemeral: true
      })
    } else {
        await verifyRole.save().catch(console.error);
        await interaction.reply({
            content: 'The role is already in the database!',
            ephemeral: true
        })
    }
  },
};

