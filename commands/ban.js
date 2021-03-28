module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
       
        if(message.member.roles.cache.has('824532542949818408'))//admin key
        {
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send('<@'+message.mentions.users.first()+'>' +' has been banned');
        }
    }else if (message.member.roles.cache.has('824546886017875988')){//owner key
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send('<@'+message.mentions.users.first()+'>' +' has been banned');
        }
    }else {message.channel.send('you don\'t have permission to use that command.' )}
}
}
                
// role should be updated everytime a server is changed, to find role codes use \@role. and replace the older ones.
