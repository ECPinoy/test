//All this work is donvoo's :3 <insertcopyright> pff
//Variables
//$('head').append($('<audio id="soundo" src="https://dl-web.dropbox.com/get/FROZEN%20-%20Let%20It%20Go%20Sin00g-along%20-%20Official%20Disney%20HD.wav?_subject_uid=363469932&w=AAAxWrHTO_6IzIpo2vmk5IFL-a--p9xWPS4NCS8RSK0O2g" />'));
var b = API.getUsers().length;
var c = b - 100;
var cc = c * .10;
var d = Math.round(cc);
var a = localStorage.getItem("babe")
var welcome = "Nightcore Script Running, Go /cmd For Commands"
var ccc = '0';
var ddd = "nada";
var eee = "@donvoo";
var zzz = "test"
var tt = "test";
var counter = '0';
var joino = 0;
var lctrlo = 1;
var mutee = 0;
var mutepicko = "SushiNatilie";
var pen = 0;
counter = setInterval(function (){counter = counter + 1},1000)
$('<div style ="color:#670000;"><div style = "border: 2px solid #B30000;"><div style = "font-size: 16pt;">Running donvoo-Nightcore-331 Script, Edited by ECPinoy</div>').appendTo("#chat-messages")
API.on(API.CHAT_COMMAND, test);
API.on(API.CHAT, test)

//Commands
function test(data) {
    var command = data;
    if (command == "/meh"){
        API.chatLog("Mehs To Skip: "+JSON.stringify(d),1);
    }
    if (command == "/best"){
        API.sendChat("donvoo Is The Worst!");
    }
    if (command == "/madeby"){
        API.chatLog("This Script Was Made By donvoo <---(Very Sexy, 10/10)",1);
        API.chatLog("Document Made By DJ_YoloSwaggins33",1)
        API.chatLog("Edited by ECPinoy (10x better than the above scrubs",1)
    }
    if (command == "/cmd"){
        $('<div style ="color:#76EE00;"><div style = "border: 2px solid #92CCA6;"><div style = "font-size: 12pt;">/meh, /best, /madeby, /cmd, /Ship, /Rick, /Website, /babe, /battle, /bassdrop, /bassdropfake</div>').appendTo("#chat-messages")
    }
    if (command == "/Ship"){
        API.chatLog("http://imgur.com/gallery/eHGde/new",1)
        API.chatLog("All The Ships!",1)
    }
    if (command == "/Rick"){
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
    if (command == "/babe"){
        API.chatLog("Times donvoo Has Been Mentioned: "+localStorage.getItem("babe"),1)
    }
    if (command == "/resetooo"){
       ccc =  prompt("What Would You Like To Set It To")
       localStorage.setItem("babe",ccc)
    }
    if (command == "/mute"){
        ddd = prompt("Mute Who")
        var ggg = getId("@"+ddd)
        API.moderateMuteUser(JSON.stringify(ggg),1,API.MUTE.SHORT)
    }
    if (command == "/donteverusethiscommand"){
        zzz = prompt("Ban Who")
        var yyy = getId("@"+zzz)
        API.moderateBanUser(JSON.stringify(yyy),1,API.BAN.PERMA)
    }
    if (command == "/id"){
        eee = prompt("Whos Id Do You Want?")
        var fff = getId("@"+eee)
        API.chatLog(JSON.stringify(fff),1)
    }
    if (command == "/battle"){
        var matho = Math.random(1) * 10;
        var P1 = prompt("Player 1:")
        var P2 = prompt("Player 2:")
        if (matho > 5 ){
        API.sendChat("A Wild "+P1+" Appeared... "+P1+" Used o On "+P2+" ...It's Super Effective!... "+P2+" Faints!")
        }
        if (matho < 5)
        {
        API.sendChat("A Wild "+P1+" Appeared... "+P1+" Used o On "+P2+" ...It's Not Very Effective!... "+P1+" Faints From Shame!")
        }
        
    }
    if (command == "/bassdrop"){
        API.sendChat(":Basssss: Dropping The Bass In 10! :Basssss:");
        setTimeout(basedd,10000)
        function basedd(){
            API.sendChat(":BassDropped: Bassssss Dropped! :BassDropped:")
        }
    }
    if (command == "/bassdropfake"){
        API.sendChat(":Basssss: Dropping The Bass In 10! :Basssss:");
        setTimeout(baseddd,10000)
        function baseddd(){
            API.sendChat(":SadBear: Wait... Wheres My Base Drop??? :SadBear:")
        }
    }
    if (command == "/joinon"){
        API.chatLog("User Join On")
        joino = 1;
    }
    if (command == "/joinoff"){
        API.chatLog("User Join Off")
        joino = 0;
    }
    if (command == "/ctrlon"){
        API.chatLog("LCTRL Mute On")
        lctrlo = 0;
    }
    if (command == "/ctrloff"){
        API.chatLog("LCTRL Mute Off")
        lctrlo = 1;
    }
    //if (command == "/sound"){
     //   $('#soundo')[0].play()
    //}
    if (command == "/muteon"){
        API.chatLog("Deleing Messages!")
        mutee = 1;
    }
    if (command == "/muteoff"){
        API.chatLog("Not Deleing Messages!")
        mutee = 0;
    }
    if (command == "/mutepick"){
        mutepicko = prompt("Who Will You Delete Every Message Of?(for donvoo)");
    }
    if (command == "/star"){
        API.sendChat("(^_−)−☆")
    }
    if (command == "/yay"){
        API.sendChat("☆*:.｡. o(≧▽≦)o .｡.:*☆")
    }
    if (command == "/hito"){
        API.sendChat("（^人^）")
    }
    
}
//Chat Triggers
API.on(API.CHAT, chat);
function chat(data){
    if (data.message.slice(0,11) == "WhoMyScript" & data.un == "donvoo" ){
        API.sendChat("I Am ECPinoy :kappa: !")
    }
    if (data.message.slice(0,7) == "@donvoo"){
      //   $('#soundo')[0].play()
        if (localStorage.babe) {
        localStorage.babe = parseInt(localStorage.babe)+1} 
            else {localStorage.babe = 1
            }
    }
     if (data.message.slice(0,8) == "RickRoll" & data.un == "ECPinoy" ){
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")   
    }
    if (data.message.slice(0,8) == "!dcdaisy" & data.un == "DaisytjuhhPB" ){
       API.sendChat("!dc @DaisytjuhhPB")  
    }
    if (data.un == mutepicko ){
        if (mutee == 1){
        API.moderateDeleteChat(data.cid)}
    }
    if (data.un == "SushiNatilie"){
        if (mutee == 1){
        pen = pen + 1
        API.chatLog("CF = "+pen,1)
        if (pen == 25){
            API.sendChat("Connor Franta: http://prntscr.com/5r201i")
            pen = 0;
        }
        }
    }
}
//Final Song Score (WIP)
API.on(API.ADVANCE, songg);
function songg(data){
    API.chatLog("Woots:  "+data.lastPlay.score.positive+"  Grabs:  "+data.lastPlay.score.grabs+"  Mehs:  "+data.lastPlay.score.negative,1)
    API.chatLog("DJ: "+data.lastPlay.dj.username,1)
    API.chatLog(data.lastPlay.media.duration,1)
    if (localStorage.songTime) {
        localStorage.songTime = parseInt(localStorage.songTime)+counter} 
            else {localStorage.songTime = 1
            }
}
//User ID
function getId(username) {
        username = username.substr(1);
        var users = API.getUsers();
        for (var i = 0; i < users.length; i++) {
                if (users[i].username===username) {
                        return users[i].id;
                }
        };
        return false;
}
//Get Mehs
function getIdo(vote) {
        var usersVoted = [];
        var users = API.getUsers();
        for (var i = 0; i < users.length; i++) {
                if (users[i].vote===vote) {
                        usersVoted.push(users[i]);
                }
        };
        return usersVoted;
}
API.on(API.USER_JOIN,isctrl);
function isctrl(user){
    var username = user.username;
    if (/Ctrl/i.test(username)) {
    if (/ด/i.test(username)) {
        API.chatLog("ctrl joined",1)
        var bann = user.id
        API.moderateMuteUser(user.id,1,API.MUTE.SHORT)
    }}
    return /ด/i.test(username);
}
API.on(API.USER_JOIN,laquit);
function laquit(user){
    var username = user.username;
    if (user.level == 1){
        if (joino == 1){
        API.sendChat("A Lv 1 User Has Joined, Name: @"+user.username)
        }
        else{API.chatLog("A Lv 1 User Has Joined, Name: @"+user.username,1)}
    }
}
API.on(API.VOTE_UPDATE, hanat);
function hanat(data){
    if (data.vote == "-1" && data.user.username == "SushiNatilie" && API.getDJ().username == "donvoo"){
        API.sendChat("@SushiNatilie... Im Not Suprised")
        //API.moderateSetRole(data.user.id,1)
        //setTimeout(function(){API.moderateSetRole(data.user.id,2)},3000)
    }
}
