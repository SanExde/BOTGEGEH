const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

「 *BOT INFO* 」
𝇈 Creator : ${ownerName}
𝇈 Bot Name : ${botName}
𝇈 Time : ${jam}
 
「 *MAIN MENU* 」
𝇈 ${prefix}menu
𝇈 ${prefix}infobot
𝇈 ${prefix}donate
𝇈 ${prefix}dashboard
𝇈 ${prefix}owner
𝇈 ${prefix}cekdrive
𝇈 ${prefix}cekbandwidth
𝇈 ${prefix}cekpremium
𝇈 ${prefix}listpremium
𝇈 ${prefix}listsewa
𝇈 ${prefix}speed
𝇈 ${prefix}runtime
𝇈 ${prefix}listbahasa

「 *TOOLS MENU* 」
𝇈 ${prefix}sticker
𝇈 ${prefix}stickerwm
𝇈 ${prefix}smeme
𝇈 ${prefix}toimg
𝇈 ${prefix}tovideo
𝇈 ${prefix}tomp3
𝇈 ${prefix}ttp
𝇈 ${prefix}attp
𝇈 ${prefix}emojimix
𝇈 ${prefix}nuliskiri
𝇈 ${prefix}nuliskanan
𝇈 ${prefix}foliokiri
𝇈 ${prefix}foliokanan
𝇈 ${prefix}say
𝇈 ${prefix}translate

「 *CHATS MENU* 」
𝇈 ${prefix}menfess 
𝇈 ${prefix}anonymous
𝇈 ${prefix}start
𝇈 ${prefix}next
𝇈 ${prefix}stop
𝇈 ${prefix}sendprofile

「 *STORE MENU* 」
𝇈 ${prefix}list
𝇈 ${prefix}addlist
𝇈 ${prefix}dellist
𝇈 ${prefix}update
𝇈 ${prefix}jeda
𝇈 ${prefix}tambah
𝇈 ${prefix}kurang
𝇈 ${prefix}kali
𝇈 ${prefix}bagi
𝇈 ${prefix}delsetdone
𝇈 ${prefix}changedone
𝇈 ${prefix}setdone
𝇈 ${prefix}delsetproses
𝇈 ${prefix}changeproses
𝇈 ${prefix}setproses
𝇈 proses < reply chat >
𝇈 done < reply chat >
 
「 *RPG GAMES* 」
𝇈 ${prefix}inventory
𝇈 ${prefix}mining
𝇈 ${prefix}buy 
𝇈 ${prefix}sell
𝇈 ${prefix}heal
𝇈 ${prefix}hunt
𝇈 ${prefix}adventure
𝇈 ${prefix}luckyday
𝇈 ${prefix}killslime
𝇈 ${prefix}killgoblin
𝇈 ${prefix}killdevil
𝇈 ${prefix}killbehemoth
𝇈 ${prefix}killdemon
𝇈 ${prefix}killdemonking
𝇈 ${prefix}joinrpg
𝇈 ${prefix}sellikan
𝇈 ${prefix}sellbesi
𝇈 ${prefix}sellemas
𝇈 ${prefix}jelajah
𝇈 ${prefix}mancing
𝇈 ${prefix}jualikan
𝇈 ${prefix}jualcoal
𝇈 ${prefix}lebur
𝇈 ${prefix}jualstone
𝇈 ${prefix}jualingot
𝇈 ${prefix}jualkayu
𝇈 ${prefix}nebang
𝇈 ${prefix}goplanet
𝇈 ${prefix}jualbahankimia

「 *DOWNLOADS* 」
𝇈 ${prefix}play
𝇈 ${prefix}ytmp3
𝇈 ${prefix}ytmp4
𝇈 ${prefix}instagram
𝇈 ${prefix}igphoto
𝇈 ${prefix}igvideo
𝇈 ${prefix}igreels
𝇈 ${prefix}tiktok
𝇈 ${prefix}tiktoknowm
𝇈 ${prefix}tiktokaudio
𝇈 ${prefix}mediafire
𝇈 ${prefix}gitclone

「 *GROUP MENU* 」
𝇈 ${prefix}afk
𝇈 ${prefix}welcome
𝇈 ${prefix}left
𝇈 ${prefix}setopen
𝇈 ${prefix}changesetopen
𝇈 ${prefix}delsetopen
𝇈 ${prefix}setclose
𝇈 ${prefix}changesetclose
𝇈 ${prefix}delsetclose
𝇈 ${prefix}setwelcome
𝇈 ${prefix}changewelcome
𝇈 ${prefix}delsetwelcome
𝇈 ${prefix}setleft
𝇈 ${prefix}changeleft
𝇈 ${prefix}delsetleft
𝇈 ${prefix}linkgc
𝇈 ${prefix}setppgc
𝇈 ${prefix}setnamegc
𝇈 ${prefix}setdesc
𝇈 ${prefix}antilink
𝇈 ${prefix}antiwame
𝇈 ${prefix}open
𝇈 ${prefix}close
𝇈 ${prefix}add
𝇈 ${prefix}kick
𝇈 ${prefix}promote
𝇈 ${prefix}demote
𝇈 ${prefix}revoke
𝇈 ${prefix}hidetag
𝇈 ${prefix}checksewa

「 *GAME MENU* 」
𝇈 ${prefix}tictactoe
𝇈 ${prefix}delttt
𝇈 ${prefix}casino
𝇈 ${prefix}delcasino

「 *SEARCH MENU* 」
𝇈 ${prefix}lirik
𝇈 ${prefix}grupwa
𝇈 ${prefix}pinterest
𝇈 ${prefix}ytsearch
𝇈 ${prefix}searchbyimage

「 *RANDOM MENU* 」
𝇈 ${prefix}cecan
𝇈 ${prefix}cogan
𝇈 ${prefix}waifu


「 *BALANCE MENU* 」
𝇈 ${prefix}topglobal
𝇈 ${prefix}toplocal
𝇈 ${prefix}buylimit
𝇈 ${prefix}buyglimit
𝇈 ${prefix}transfer
𝇈 ${prefix}limit
𝇈 ${prefix}balance

「 *STORAGE* 」
𝇈 ${prefix}addstik
𝇈 ${prefix}addvn
𝇈 ${prefix}addimg
𝇈 ${prefix}addvid
𝇈 ${prefix}liststik
𝇈 ${prefix}listvn
𝇈 ${prefix}listimg
𝇈 ${prefix}listvid
 
「 *BAILEYS* 」
𝇈 ${prefix}fitnah
𝇈 ${prefix}nowa
𝇈 ${prefix}getquoted
𝇈 ${prefix}fakehidetag
𝇈 ${prefix}react
𝇈 ${prefix}setcmd
𝇈 ${prefix}delcmd

「 *OWNERS MENU* 」
𝇈 ${prefix}autoread
𝇈 ${prefix}autobio
𝇈 ${prefix}autorespond
𝇈 ${prefix}anticall
𝇈 ${prefix}autoblok212
𝇈 ${prefix}join
𝇈 ${prefix}left
𝇈 ${prefix}self
𝇈 ${prefix}public
𝇈 ${prefix}setppbot2
𝇈 ${prefix}setppbot
𝇈 ${prefix}broadcast
𝇈 ${prefix}bcimg
𝇈 ${prefix}bcstik
𝇈 ${prefix}bcvn
𝇈 ${prefix}bcvideo
𝇈 ${prefix}bcsewa
𝇈 ${prefix}addpremium
𝇈 ${prefix}delpremium
𝇈 ${prefix}addsewa
𝇈 ${prefix}delsewa

「 *ASUPAN MENU* 」
𝇈 ${prefix}chika
𝇈 ${prefix}delvira
𝇈 ${prefix}ayu
𝇈 ${prefix}bunga
𝇈 ${prefix}aura
𝇈 ${prefix}nisa
𝇈 ${prefix}ziva
𝇈 ${prefix}yana
𝇈 ${prefix}viona
𝇈 ${prefix}syania
𝇈 ${prefix}riri
𝇈 ${prefix}syifa
𝇈 ${prefix}mama_gina
𝇈 ${prefix}alcakenya
𝇈 ${prefix}mangayutri
𝇈 ${prefix}rikagusriani
𝇈 ${prefix}asupan
𝇈 ${prefix}bocil
𝇈 ${prefix}geayubi
𝇈 ${prefix}santuy
𝇈 ${prefix}ukhty
𝇈 ${prefix}syifa

「 *NSFW MENU* 」 
𝇈 ${prefix}baka
𝇈 ${prefix}smug
𝇈 ${prefix}neko_sfw
𝇈 ${prefix}hentai_gif
𝇈 ${prefix}spank
𝇈 ${prefix}blowjob
𝇈 ${prefix}cumarts
𝇈 ${prefix}eroyuri
𝇈 ${prefix}eroneko
𝇈 ${prefix}erokemonomimi
𝇈 ${prefix}erokitsune
𝇈 ${prefix}ero
𝇈 ${prefix}feet
𝇈 ${prefix}erofeet
𝇈 ${prefix}feetgif
𝇈 ${prefix}femdom
𝇈 ${prefix}futanari
𝇈 ${prefix}hentai
𝇈 ${prefix}holoero
𝇈 ${prefix}holo
𝇈 ${prefix}keta
𝇈 ${prefix}kitsune

「 *TEXTPRO MENU* 」
𝇈 ${prefix}halloween2
𝇈 ${prefix}horror
𝇈 ${prefix}game8bit
𝇈 ${prefix}layered
𝇈 ${prefix}glitch2
𝇈 ${prefix}coolg
𝇈 ${prefix}coolwg
𝇈 ${prefix}realistic
𝇈 ${prefix}space3d
𝇈 ${prefix}gtiktok
𝇈 ${prefix}stone
𝇈 ${prefix}marvel
𝇈 ${prefix}marvel2
𝇈 ${prefix}pornhub
𝇈 ${prefix}avengers
𝇈 ${prefix}metalr
𝇈 ${prefix}metalg
𝇈 ${prefix}metalg2
𝇈 ${prefix}halloween2
𝇈 ${prefix}lion
𝇈 ${prefix}wolf_bw
𝇈 ${prefix}wolf_g
𝇈 ${prefix}ninja
𝇈 ${prefix}3dsteel
𝇈 ${prefix}horror2
𝇈 ${prefix}lava
𝇈 ${prefix}bagel
𝇈 ${prefix}blackpink
𝇈 ${prefix}rainbow2
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}
