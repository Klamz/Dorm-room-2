console.log('Hello World');

$(".game-area").prepend('<span class="material-symbols-outlined LDbutton">contrast </span>');
$(".game-area").prepend( '<span class="material-symbols-outlined Mnote">music_note</span>');


//dark mode
var night = $("#window-dark");
var day = $("#window-day");
var darkroom = $("#bed-dark , #bedside_copy , #desk_copy , #white_base");
var ligthroom = $("#bed-light , #bedside-light , #desk-light");

var light = false
$(".LDbutton").on("click", function () {
    if (light == false) {
        $(".LDbutton").css("color", "white");
        light = true;
        darkroom.hide();
    } else {
    darkroom.show();
    $(".LDbutton").css("color", "black");
    light = false;
}
});

night.hide();
darkroom.hide();

//room colors
var roomcolor = ["#776266", "#617565", "#636072", "#705F6D", "#63747A"]

let index = 0;
$("#color-wall").on("click", function () {
    index++

    if (index == roomcolor.length) {
        index = -1;
    }

    $(this).css("fill", roomcolor[index]);
    // $("#color-wall .cls-78").css("fill", "#776266");


});

//desk items
var mimi = $("#mimikyu");
var rubix = $("#rubix-cube");
var pot = $("#potion");

var deskitems = [mimi, rubix, pot];

let deskindex = 0;
$("#deskstuff").on("click", function () {
    deskitems[deskindex].hide();
    deskindex++
    if (deskindex == deskitems.length) {
        deskindex = 0;
    }
    deskitems[deskindex].show();


});




rubix.hide();
pot.hide();

//desk lights
var heart = $("#heart_light");
var star = $("#star_light");
var cacti = $("#cactus_light");
var moon = $("#moon_light");

var desklights = [moon, heart, star, cacti,];

let neonindex = 0;
$("#neonlight").on("click", function () {
    desklights[neonindex].hide();
    neonindex++
    if (neonindex == desklights.length) {
        neonindex = 0;
    }
    desklights[neonindex].show();


});


heart.hide();
star.hide();
cacti.hide();

//clocks
var digital = $("#dig-clock")
var pinkclock = $("#cute-clock")
var clock = $("#clock")

var timestuff = [clock, digital, pinkclock];

clockindex = 0;
$("#theclocks").on("click", function () {
    timestuff[clockindex].hide();
    clockindex++
    if (clockindex == timestuff.length) {
        clockindex = 0;
    }
    timestuff[clockindex].show();


});

digital.hide();
pinkclock.hide();

//bed items
var amongy = $("#amongy");
var mushy = $("#mushroom");
var kuma = $("#rilkumma");

var beditems = [kuma, amongy, mushy,];

bedindex = 0;
$("#bedplush").on("click", function () {
    beditems[bedindex].hide();
    bedindex++
    if (bedindex == beditems.length) {
        bedindex = 0;
    }
    beditems[bedindex].show();
});

amongy.hide();
mushy.hide();

//lights
var stringlight = $("#string-light");
var fairy = $("#fair_lights");
var  leaf = $("#leaves");
var lantern = $("#lanterns")
var dalights = [fairy, stringlight, leaf, lantern];

lightindex = 0;
$("#walllight").on("click", function () {
    dalights[lightindex].hide();
    lightindex++
    if (lightindex == dalights.length) {
        lightindex = 0;
    }
    dalights[lightindex].show();

});
stringlight.hide();
leaf.hide();
lantern.hide();

//chairs
var rchair = $("#red-chair");
var pichair = $("#pink-chair");
var puchair = $("#purple-chair");
var ichair = $("#indigo-chair");
var bchair = $("#blue-chair");
var gchair = $("#green-chair");

var thechairs = [rchair, pichair, puchair, ichair, bchair, gchair];

chairindex = 0;
$("#chair").on("click", function () {
    thechairs[chairindex].hide();
    chairindex++
    if (chairindex == thechairs.length) {
        chairindex = 0;
    }
    thechairs[chairindex].show();

});

rchair.hide();
pichair.hide();
puchair.hide();
ichair.hide();
bchair.hide();

//room colors #776266 (maroon) #617565 (green) #636072 (purple) #705F6D (pink)

//flags
var lesbian = $("#lesbian");
var bi = $("#bisexual");
var pan = $("#pan");
var trans = $("#trans");
var ace = $("#ace");
var nb = $("#nonbinary");
var gay = $("#gay");
var queer = $("#rainbow");
var rose = $("#rose");
var bat = $("#bat");
var dino = $("#dino");

var flags = [ lesbian, gay, bi, rose, trans, ace, dino, pan, nb, bat, queer];

flagindex = 0;
$("#wall-flags").on("click", function () { 
     flags[flagindex].hide();
    flagindex++
    if (flagindex == flags.length) {
        flagindex = 0;
    }
    flags[flagindex].show();
});

bi.hide();
pan.hide();
trans.hide();
ace.hide();
nb.hide();
gay.hide();
queer.hide();
rose.hide();
bat.hide();
dino.hide();

//window
var day = $("#window-day");
var night = $("#window-night");
var evening = $("#window-evening");

var windows = [day, evening, night,];
windowindex = 0;
$("#window").on("click", function () {
    windows[windowindex].hide();
    windowindex++
    if (windowindex == windows.length) {
        windowindex = 0;
    }
    windows[windowindex].show();
});

//music
var marsh = document.getElementById("marshmallow");
var cracker = document.getElementById("biscuit");
var rose = document.getElementById("rose");
var bread = document.getElementById("bread");
var onion = document.getElementById("onion");

var music = [marsh, cracker, rose, bread, onion];

//i will be honest I tried looking at different ways to do this till 2am and tried a suggestion from copilot I still can't get it to work and I don't know how to

musicindex = 0;
$(".Mnote").on("click", function () {
   
    if (music[musicindex] && !music[musicindex].paused) {
        music[musicindex].pause();
        music[musicindex].currentTime = 0;
    }

    
    musicindex = Math.floor(Math.random() * music.length);

    
    music[musicindex].play();
});
    
