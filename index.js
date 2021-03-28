const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 // bot status
client.once('ready', () => {
    console.log(client.user.tag +' is currently online');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    //quality of life commands
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'status'){
        client.commands.get('status').execute(message, args);
    }
    if (command === 'help'){
        client.commands.get('help').execute(message, args);
    }
    if (command === 'bored'){
        client.commands.get('bored').execute(message, args);
    }

    //moderation commands
    if (command === 'kick'){
        client.commands.get('kick').execute(message,args);
    }else if (command == 'ban'){
        client.commands.get('ban').execute(message,args);
    }
    if (command === 'warn'){
    client.commands.get('warn').execute(message, args);
    }
    if (command === 'commands'){
        client.commands.get('commands').execute(message, args);
    }
    if (command === 'mods'){
        client.commands.get('mods').execute(message, args);
    }
    if (command === 'jokes'){
        client.commands.get('jokes').execute(message, args);
    }
    if (command === 'bot'){
        client.commands.get('bot').execute(message, args);
    }
    if (command === 'kill'){
        client.commands.get('kill').execute(message, args);
    
}
}








);
 


client.login("TOKEN");
