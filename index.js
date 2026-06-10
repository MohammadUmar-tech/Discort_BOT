const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });
const {Token}=require('./Token')
client.on("messageCreate",(message)=>{
   if(!message.author.bot){
     message.reply({
        content:"Hi from bot"
    })
   }
})


client.on('interactionCreate',(interaction)=>{
    console.log(interaction)
    interaction.reply("Pong!!")
})

client.login(Token)