const chalk = require("chalk");
const {
  Client,
  CommandInteraction,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
const { default: mongoose } = require("mongoose");
const roleSchema = require("../../schemas/verifyRoleId");

module.exports = {
  name: "interactionCreate",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      switch (interaction.commandName) {
        case "setup":
          const channel = interaction.options.getChannel("channel");

          const embed = new EmbedBuilder()
            .setDescription(
              "Welcome to the server! Please authorize yourself by clicking the button below! When you verify you will be granted the 'verified' role"
            )
            .setColor("Navy")
            .setTitle(`Welcome to ${interaction.guild.name}!`);

          const button = new ActionRowBuilder().setComponents(
            new ButtonBuilder()
              .setCustomId("verifyMember")
              .setLabel("Verify")
              .setStyle(ButtonStyle.Primary)
              .setEmoji("<:dev_yes:999673591341797416>")
          );

          channel.send({
            embeds: [embed],
            components: [button],
          });

          break;
      }
    } else if (interaction.isButton()) {
      switch (interaction.customId) {
        case "verifyMember": {
          const verifyRoleId = await roleSchema.findOne({ guildId: interaction.guild.id });
          if (!verifyRoleId) {
            interaction.reply({
              content:
                "You have not set a verification role yet! Use `/setrole` to set one!",
            });
          }

          const role = interaction.guild.roles.cache.get(verifyRoleId.roleId);
          if (!role) return interaction.reply({ content: "Role not found!" });

          await interaction.member.roles.add(role).then((m) => {
            interaction
              .reply({
                content: "You have been verified!",
                ephemeral: true,
              })
              .catch((err) => {
                console.log(err);
              });
          });
          break;
        }

        default:
          break;
      }
    }
  },
};
