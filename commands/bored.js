module.exports = {
    name: 'bored',
    description: "links twitch and youtube channels",
    execute(message, args){
        message.channel.send('You\'re bored, huh?'+"\n"+
        'Check out some of Hibimote\'s favorite youtubers and streamers!'+"\n" +
        '#youtube-and-stream-announcements');
    }
}
