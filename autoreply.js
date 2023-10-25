const autoReply = (msg) => {
    let R = ''
    if(msg.match(/hi|zabi|hey|hello|halo|helow|හලෝ/gi)){
        R = "🤓Hey, I am aqua👽"
    }
    if(msg.match(/😒/gi)){
        R = "😒mok"
    }
    if(msg.match(/🥲/gi)){
        R = "🥲💔"
    }
    if(msg.match(/ane|අනේ|අනෙ/gi)){
        R = "🤭mok🤫😂"
    }
    if(msg.match(/yako|yaku|යකෝ|යකො/gi)){
        R = "😒khask zab?💔"
    }
    if(msg.match(/na|නැ|නෑ/gi)){
        R = "zabaltarma?"
    }
    if(msg.match(/ඔව්|ow /gi)){
        R = "😌dodi gay"
    }
    if(msg.match(/chaykh|giya|echcharay|එච්චරයි/gi)){
        R = "😌respect for chaykh..."
    }
    if(msg.match(/අඩෝ|ado/gi)){
        R = "😏wax khsk?"
    }
    if(msg.match(/😁/gi)){
        R = "sendSticker:hii"
    }
    if(msg.match(/බල්ලො|ballo|bllo|බම්ලො/gi)){
        R = "🐶"
    }
    if(msg.match(/කව්ද|xkon|kawd|who|kwd/gi)){
        R = "😎li hwak💀"
    }
    if(msg.match(/බය|baya/gi)){
        R = "😂mok"
    }
    if(msg.match(/mn|මං|ඕයි|oi/gi)){
        R = "😝mlk tswl"
    }
    if(msg.match(/gm|morning/gi)){
        R = `🎤zabi🌸 fi😊 yassine🌄 dodi🙏gay...😃`
    }
    if(msg.match(/😂/gi)){
        R = `mok😒 raha 9hba👀`
    }
    if(msg.match(/gn|night|නයිට්/gi)){
        R = "🌚tsbah 3la khir👻👻"
    }if(msg.match(/nikan|නිකං|නිකම්/gi)){
        R = "🤫."
    }
    if(msg.match(/lamayo|ළමයෝ|ලමයෝ/gi)){
        R = "☺️❤️"
    }
    if(msg.match(/දෙන්න|දාන්න|dahn|dapan|dapn|දාපං|දීපං|දීපන්|dipn|dipan|dahn/gi)){
        R = "😏yassine"
    }
    if(msg.match(/plala|ply|පල|පලෑ/gi)){
        R = "😏sohayb"
    }
    if(msg.match(/කාලද|kalad/gi)){
        R = "3dnan"
    }
    if(msg.match(/telegram|ටෙලි/gi)){
        R = "zabi😌\ll"
    }
    if(msg.match(/whatsapp|වට්සැප්|phon|‌පෝන්/gi)){
        R = "sendSticker:phonehate"
    }
    if(msg.match(/hehe|he he|හේහේ/gi)){
        R = "sendSticker:hehe"
    }
    if(msg.match(/❤️/gi)){
        R = "sendSticker:heart"
    }
    if(msg.match(/😒|hm|හ්ම්|හුම්/gi)){
        R = "sendSticker:hmm"
    }
    if(msg.match(/amo|ammo|අමෝ/gi)){
        R = "sendSticker:amo"
    }
    if(msg.match(/🤣/gi)){
        R = "sendSticker:smile"
    }
    if(msg.match(/mk/gi)){
        R = "khtk"
    }
    if(msg.match(/🙂/gi)){
        R = "🙂bak💔"
    }
    return R
}
const autoReply2 = (msg) => {
    let R = ''
    if(msg.match(/hi|හායි|hey|hello|halo|helow|හලෝ/gi)){
        R = "sendAudio:110"
    }
    if(msg.match(/😌/gi)){
        R = "sendAudio:111"
    }
    if(msg.match(/🤣|😂😂/gi)){
        R = "sendAudio:112"
    }
    if(msg.match(/😒/gi)){
        R = "sendAudio:113"
    }
    if(msg.match(/balla|bll|pko/gi)){
        R = "sendAudio:114"
    }
    if(msg.match(/aaw|halo|manika|lamayo|😘|😍|❤️|love|adare/gi)){
        R = "sendAudio:115"
    }
    if(msg.match(/palayan|plyn|පල/gi)){
        R = "sendAudio:116"
    }
    return R
}
const autoReply3 = (msg) => {
    let R = ''
    return R
}
module.exports = {
    autoReply,
    autoReply2,
    autoReply3,
    copyright:"Kumuthu Prabhasha"
}
