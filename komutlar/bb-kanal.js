
const Discord = require('discord.js')
const fs = require('fs');
const ayarlar = require('../ayarlar.json');
let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog1.json", "utf8"));

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`<a:hayr:620546385371987978> Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);
  
  let channel = message.mentions.channels.first()
    if (!channel) {
        message.channel.send(`<a:hayr:620546385371987978> **Yalnış Kullanım**\n**Doğru Kullanım:** m!bb-kanal #kanal`)
        return
    }
    if(!gkanal[message.guild.id]){
        gkanal[message.guild.id] = {
            resim: channel.id
        };
    }
    fs.writeFile("./ayarlar/glog1.json", JSON.stringify(gkanal), (err) => {
        console.log(err)
    })
  
    message.channel.send(`<a:evet:620544866807578635> ${channel} Çıkış Mesaj Kanal ayarlandı.`)
  
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hg-kanal'],
    kategori: "yetkili",
    permLevel: 2
}

exports.help = {
    name: 'bb-kanal',
    description: 'Çıkış Kanalını Ayarlar.',
    usage: 's+bb-kanal <#kanal>'
}