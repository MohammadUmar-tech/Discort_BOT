const { Client, Events, GatewayIntentBits } = require("discord.js");
const { dataBaseConnection } = require("./DataBase/connection");
const { URL } = require("./modles/urlSchema");
const { url } = require("./url");
const shortid = require("shortid");
const { PORT } = require("./PORT");
dataBaseConnection(url);
const express = require("express");
const app = express();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const { Token } = require("./Token");
const urlRouter = require("./routes/shortUrlRoute");

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1].trim();
    if (!url) {
      message.reply({
        content: "Please Provide a valid URL",
      });
    }
    const shortId = shortid.generate();
    const shorturl = await URL.create({
      shortId: shortId,
      redirectUrl: url,
    });
    message.reply({
      content: `http://localhost:${PORT}/${shorturl.shortId}`,
    });
  } else {
    message.reply({
      content: "hi from BOT",
    });
  }
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);

  interaction.reply("Pong!!");
});

client.login(Token);
app.use("/", urlRouter);

app.listen(PORT, () => {
  console.log("Server Started!!");
});
