const { Client, Intents } = require("discord.js");
const { joinVoiceChannel } = require('@discordjs/voice');
// Since discord.js exports an object by default, we can destructure it. Read up more here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment



const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("messageCreate", (message) => {
  if (message.content.startsWith("wassup?")) {
    message.channel.send("shut up hoe");
  }
});
 
client.login("NzcwMTE3NzMwODcwNDkzMjA1.X5Y6Bw.o7W9XAUilvK4VnOASWz0GHtaqNU");



