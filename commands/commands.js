module.exports = {
    name: "commands",
    description: "sends a list of possible commands",
    execute(message, args){
        message.channel.send('Which type of commands do you want infomation on?'+"\n" +
        '- Type Hibimods for infomation on Moderation commands.'+"\n" +
        '- Type Hibijokes for infomation on funny commands. '+"\n" +
        '- Type Hibibot for infomation about me! >W<'+"\n" +
        '- Type HibiInfo for Infomation on the server');
    }
}