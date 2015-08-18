function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

var definition = {smile:{title:"Smile",codes:[":)",":=)",":-)"]},"sad-smile":{title:"Sad Smile",codes:[":(",":=(",":-("]},"big-smile":{title:"Big Smile",codes:[":D",":=D",":-D",":d",":=d",":-d"]},cool:{title:"Cool",codes:["8)","8=)","8-)","B)","B=)","B-)","(cool)"]},wink:{title:"Wink",codes:[":o",":=o",":-o",":O",":=O",":-O"]},crying:{title:"Crying",codes:[";(",";-(",";=("]},sweating:{title:"Sweating",codes:["(sweat)","(:|"]},speechless:{title:"Speechless",codes:[":|",":=|",":-|"]},kiss:{title:"Kiss",codes:[":*",":=*",":-*"]},"tongue-out":{title:"Tongue Out",codes:[":P",":=P",":-P",":p",":=p",":-p"]},blush:{title:"Blush",codes:["(blush)",":$",":-$",":=$",':">']},wondering:{title:"Wondering",codes:[":^)"]},sleepy:{title:"Sleepy",codes:["|-)","I-)","I=)","(snooze)"]},dull:{title:"Dull",codes:["|(","|-(","|=("]},"in-love":{title:"In love",codes:["(inlove)"]},"evil-grin":{title:"Evil grin",codes:["]:)",">:)","(grin)"]},talking:{title:"Talking",codes:["(talk)"]},yawn:{title:"Yawn",codes:["(yawn)","|-()"]},puke:{title:"Puke",codes:["(puke)",":&",":-&",":=&"]},"doh!":{title:"Doh!",codes:["(doh)"]},angry:{title:"Angry",codes:[":@",":-@",":=@","x(","x-(","x=(","X(","X-(","X=("]},"it-wasnt-me":{title:"It wasn't me",codes:["(wasntme)"]},party:{title:"Party!!!",codes:["(party)"]},worried:{title:"Worried",codes:[":S",":-S",":=S",":s",":-s",":=s"]},mmm:{title:"Mmm...",codes:["(mm)"]},nerd:{title:"Nerd",codes:["8-|","B-|","8|","B|","8=|","B=|","(nerd)"]},"lips-sealed":{title:"Lips Sealed",codes:[":x",":-x",":X",":-X",":#",":-#",":=x",":=X",":=#"]},hi:{title:"Hi",codes:["(hi)"]},call:{title:"Call",codes:["(call)"]},devil:{title:"Devil",codes:["(devil)"]},angel:{title:"Angel",codes:["(angel)"]},envy:{title:"Envy",codes:["(envy)"]},wait:{title:"Wait",codes:["(wait)"]},bear:{title:"Bear",codes:["(bear)","(hug)"]},"make-up":{title:"Make-up",codes:["(makeup)","(kate)"]},"covered-laugh":{title:"Covered Laugh",codes:["(giggle)","(chuckle)"]},"clapping-hands":{title:"Clapping Hands",codes:["(clap)"]},thinking:{title:"Thinking",codes:["(think)",":?",":-?",":=?"]},bow:{title:"Bow",codes:["(bow)"]},rofl:{title:"Rolling on the floor laughing",codes:["(rofl)"]},whew:{title:"Whew",codes:["(whew)"]},happy:{title:"Happy",codes:["(happy)"]},smirking:{title:"Smirking",codes:["(smirk)"]},nodding:{title:"Nodding",codes:["(nod)"]},shaking:{title:"Shaking",codes:["(shake)"]},punch:{title:"Punch",codes:["(punch)"]},emo:{title:"Emo",codes:["(emo)"]},yes:{title:"Yes",codes:["(y)","(Y)","(ok)"]},no:{title:"No",codes:["(n)","(N)"]},handshake:{title:"Shaking Hands",codes:["(handshake)"]},skype:{title:"Skype",codes:["(skype)","(ss)"]},heart:{title:"Heart",codes:["(h)","<3","(H)","(l)","(L)"]},"broken-heart":{title:"Broken heart",codes:["(u)","(U)"]},mail:{title:"Mail",codes:["(e)","(m)"]},flower:{title:"Flower",codes:["(f)","(F)"]},rain:{title:"Rain",codes:["(rain)","(london)","(st)"]},sun:{title:"Sun",codes:["(sun)"]},time:{title:"Time",codes:["(o)","(O)","(time)"]},music:{title:"Music",codes:["(music)"]},movie:{title:"Movie",codes:["(~)","(film)","(movie)"]},phone:{title:"Phone",codes:["(mp)","(ph)"]},coffee:{title:"Coffee",codes:["(coffee)"]},pizza:{title:"Pizza",codes:["(pizza)","(pi)"]},cash:{title:"Cash",codes:["(cash)","(mo)","($)"]},muscle:{title:"Muscle",codes:["(muscle)","(flex)"]},cake:{title:"Cake",codes:["(^)","(cake)"]},beer:{title:"Beer",codes:["(beer)"]},drink:{title:"Drink",codes:["(d)","(D)"]},dance:{title:"Dance",codes:["(dance)","\\o/","\\:D/","\\:d/"]},ninja:{title:"Ninja",codes:["(ninja)"]},star:{title:"Star",codes:["(*)"]},mooning:{title:"Mooning",codes:["(mooning)"]},finger:{title:"Finger",codes:["(finger)"]},bandit:{title:"Bandit",codes:["(bandit)"]},drunk:{title:"Drunk",codes:["(drunk)"]},smoking:{title:"Smoking",codes:["(smoking)","(smoke)","(ci)"]},toivo:{title:"Toivo",codes:["(toivo)"]},rock:{title:"Rock",codes:["(rock)"]},headbang:{title:"Headbang",codes:["(headbang)","(banghead)"]},bug:{title:"Bug",codes:["(bug)"]},fubar:{title:"Fubar",codes:["(fubar)"]},poolparty:{title:"Poolparty",codes:["(poolparty)"]},swearing:{title:"Swearing",codes:["(swear)"]},tmi:{title:"TMI",codes:["(tmi)"]},heidy:{title:"Heidy",codes:["(heidy)"]},myspace:{title:"MySpace",codes:["(MySpace)"]},malthe:{title:"Malthe",codes:["(malthe)"]},tauri:{title:"Tauri",codes:["(tauri)"]},priidu:{title:"Priidu",codes:["(priidu)"]}};
var isManual = true;
var currentLine = 1;
var valores1=[0,0,0];
var valores2=[0,0,0];

var vircleChat = [
    {messageId: 0, name: "vircle", auto: false, popup: null, message: "What's going on with you?", avatar: "", track: "", date: new Date()},
    {messageId: 1, name: "vircle", auto: false, popup: null, message: "Can you say more about the context of the situation? What triggered your emotions?", avatar:'', track: "", date: new Date()},
    {messageId: 2, name: "vircle", auto: true, popup: null, message: "Thank you. Let's work on this:", avatar:'', track: "", date: new Date()},
    {messageId: 3, name: "vircle", auto: false, popup: 1, message: "", avatar:'', track: "", date: new Date()},
    {messageId: 4, name: "vircle", auto: false, popup: null, message: "What are your automatic negative thoughts at this moment? What are unhelpful images?", avatar:'', track: "", date: new Date()},
    {messageId: 5, name: "vircle", auto: false, popup: null, message: "What are the facts that support this thoughts?", avatar:'', track: "", date: new Date()},
    {messageId: 6, name: "vircle", auto: false, popup: null, message: "What may be a more balanced view about the situation now?", avatar:'', track: "", date: new Date()},
    {messageId: 2, name: "vircle", auto: true, popup: null, message: "Can you re-rate the emotions you felt earlier?", avatar:'', track: "", date: new Date()},
    {messageId: 3, name: "vircle", auto: false, popup: 2, message: "", avatar:'', track: "", date: new Date()},

    ];



var users = [{name: "vircle1"}];

var username, userId, newUser, avatar = false, lastDate, messagesLoaded, usersLoaded;
var $$ = Dom7;
var vircle7 = new Framework7({
    modalTitle: 'Hi, Irene',
    animateNavBackIcon: true,
});


// Format date
function formatDay(d) {
    var date = new Date(d);
    var weekDay = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' ')[date.getDay()];
    var day = date.getDate();
    var month = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ')[date.getMonth()];
    return weekDay + ', ' + month + ' ' + day;
}
function formatTime(d) {
    var date = new Date(d);
    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    return hours + ':' + mins;
}
function formatDate(d) {
    return formatDay(d) + ', <span>' + formatTime(d) + '</span>';
}

// Initial load
function stripMessage(messageText) {
    messageText = $.emoticons.replace(messageText);
    if (!(messageText.indexOf('<img') === 0 && messageText.split('<').length === 2 || messageText.indexOf('<span class="emoticon') >= 0)) {
        messageText = messageText.replace(/>/g, '&gt;').replace(/</g, '&lt;');
    }
    messageText.replace(/script/g, 'scr\bipt');
    return messageText;
}


function loadMessageVircle(line){
    
    var myLine = vircleChat[line];
    if(myLine.popup != null){
          vircle7.popup('.popup-options-' + myLine.popup);
    }else{
        vircle_reply(myLine.message);
    }
    if(myLine.auto){
        isManual = false;
        $$('.messagebar a').click();
    }
    
}

function sayLine( line ){
    /*var myLine = vircleChat[line];
    if(typeof myLine != "undefined"){
        voice(myLine.track);
    }*/
}

function vircle_reply(inputMessage){

    var replay_txt = inputMessage;
    day = formatDay(new Date());
    time = formatTime(new Date());

    var response = {
        text: stripMessage(replay_txt),
        type: 'received',
        name: "vircle",
        avatar: '',
        day: day,
        time: time
    };

    vircle7.addMessage(response);
}

$$('.popup-options-1').on('closed', function () {
  console.log('options Popup closed');
  isManual = false;
  $$('.messagebar a').click();
});

$$('.popup-options-1').on('opened', function () {
  console.log('options Popup opened');

});


$$('.popup-options-2').on('closed', function () {
  console.log('rating Popup closed');
});


$$('#done').on('click', function () {
    valores1[0] = Math.round($$('#em1-val').val());
    valores1[1] = Math.round($$('#em2-val').val());
    valores1[2] = Math.round($$('#em3-val').val());
    isManual = false;
});


$$('#done2').on('click', function () {
    valores2[0] = Math.round($$('#em1-val2').val());
    valores2[1] = Math.round($$('#em2-val2').val());
    valores2[2] = Math.round($$('#em3-val2').val());
    
    var status = "";

    var valor1 = valores1[0] + valores1[1] + valores1[2];

    var valor2 = valores2[0] + valores2[1] + valores2[2];
    
    if(valor2 < valor1){
        //better
        status ="Great!, you're feeling better now.";
    }else{
        //worst
        status ="I'm sorry you feel that way. Let's try again.";
    }
    
    vircle7.alert(status, '', function(){
        window.location.href = "../index.html";
    });

    


});

// Send message
$$('.messagebar a').on('click', function () {

      
    var textarea = $$('.messagebar textarea');
    var messageText = textarea.val();
    if(isManual == true){
        if (messageText.length === 0) return;
    }else{
        isManual = true;
    }
    textarea.val('').trigger('change');
    var date = new Date();
    var offset = date.getTimezoneOffset() * 60 * 1000;
    date = date.getTime() + offset;
    var day, time;
    if (!lastDate || (lastDate && date - lastDate > 1000 * 60 * 5)) {
        day = formatDay(date);
        time = formatTime(date);
        lastDate = date;
    }
    currentLine = currentLine + 1;  
    // Add Message
    vircle7.addMessage({
        text: stripMessage(messageText),
        type: 'sent',
        name: username,
        avatar: avatar,
        day: day,
        time: time
    });
    

    // vircle reply.
    vircle7.showIndicator();
    setTimeout(function () {
        vircle7.hideIndicator();
        loadMessageVircle(currentLine)
    }, 2000);



});

function restartDialog(){
    window.location.reload();
}

function voice(track){
    //stop all sounds
    window.tracks.forEach(function (sound) {
        sound.pause();
        sound.currentTime = 0;
    });
    if(track != ""){
        jBeep('voice/' + track);
    }
}

// Start the demo.
function start() {
    window.tracks = [];
        vircle7.modal({
            title: 'Hello, Lerly',
            text: "Let's talk...",
            buttons: [
                {
                    text: 'Not right now',
                    onClick: function() {
                      vircle7.alert('ok, bye!', start);
                    }
                },
                {
                    text: 'Hey Vircle!',
                    onClick: function() {
                        //start dialog.
                        currentLine=0;
                        loadMessageVircle(currentLine)
                    }
                }
            ]
        });
}
start();
