const { REST, Routes } = require("discord.js");
const { Token } = require("./Token");
const { ID } = require("./Id");
const commands = [
  {
    name: "create",
    description: "Create a new shorst Url",
  },
];

const rest = new REST({ version: "10" }).setToken(Token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(ID), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
