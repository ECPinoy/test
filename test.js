API.on(API.sendChat("donvoo's Skip Calculator",1));
API.on(API.CHAT_COMMAND, test);
String lala = 10;
var meh = 200;
var almost = meh / .075
function test(data) {
    var command = data;
    if (command == "/meh"){
    meh = prompt("Please Input How Many People Are In The Room");
    API.sendChat("If You Can See This Say I");
    API.sendChat(almost);
    }
}
