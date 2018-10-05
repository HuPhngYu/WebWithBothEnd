// items
var adams = 0;
var cursors = 0;
var puppies = 0;
var boyfriends = 0;
var concerts = 0;
var persec = 0;

// item cost
var cursorCost = 10;
var puppyCost = 100;
var boyfriendCost = 500;
var concertCost = 1000;

// prettify numbers
function prettify(input) {
    var output = Math.round(input * 1000000) / 1000000;
    return output;
}
// load all number
function loadAll() {
    document.getElementById('adams').innerHTML = prettify(adams);
    document.getElementById('cursors').innerHTML = prettify(cursors);
    document.getElementById('cursorCost').innerHTML = prettify(cursorCost);
    document.getElementById('puppies').innerHTML = prettify(puppies);
    document.getElementById('puppyCost').innerHTML = prettify(puppyCost);
    document.getElementById('boyfriends').innerHTML = prettify(boyfriends);
    document.getElementById('boyfriendCost').innerHTML = prettify(boyfriendCost);
    document.getElementById('concerts').innerHTML = prettify(concerts);
    document.getElementById('concertCost').innerHTML = prettify(concertCost);
}
;

// buy items functions
function getAdam(number) {
    adams = adams + number;
    document.getElementById('adams').innerHTML = prettify(adams);
}
;

function buyCursor() {
    if (adams >= cursorCost) {
        cursors = cursors + 1;
        adams = adams - cursorCost;
        document.getElementById('cursors').innerHTML = cursors;
        document.getElementById('adams').innerHTML = adams;
        cursorCost = Math.round(cursorCost * 115 / 100);
    }
    document.getElementById('cursorCost').innerHTML = cursorCost;
}
;

function buyPuppy() {
    if (adams >= puppyCost) {
        puppies = puppies + 1;
        adams = adams - puppyCost;
        document.getElementById('puppies').innerHTML = puppies;
        document.getElementById('adams').innerHTML = adams;
        puppyCost = Math.round(puppyCost * 115 / 100);
    }
    document.getElementById('puppyCost').innerHTML = puppyCost;
}
;

function buyBoyfriend() {
    if (adams >= boyfriendCost) {
        boyfriends = boyfriends + 1;
        adams = adams - boyfriendCost;
        document.getElementById('boyfriends').innerHTML = boyfriends;
        document.getElementById('adams').innerHTML = adams;
        boyfriendCost = Math.round(boyfriendCost * 115 / 100);
    }
    document.getElementById('boyfriendCost').innerHTML = boyfriendCost;
}
;

function buyConcert() {
    if (adams >= concertCost) {
        concerts = concerts + 1;
        adams = adams - concertCost;
        document.getElementById('concerts').innerHTML = concerts;
        document.getElementById('adams').innerHTML = adams;
        concertCost = Math.round(concertCost * 115 / 100);
    }
    document.getElementById('concertCost').innerHTML = concertCost;
}
;

// save game
function save() {
    //if (!supportsLocalStorage()) { return false; }
    var newSave = {
        adams: adams,
        cursors: cursors,
        puppies: puppies,
        boyfriends: boyfriends,
        concerts: concerts,
        cursorCost: cursorCost,
        puppyCost: puppyCost,
        boyfriendCost: boyfriendCost,
        concertCost: concertCost
    };
    localStorage.setItem("newSave", JSON.stringify(newSave));
    document.getElementById('fadeout-alert').style.display = "block";
    document.getElementById('message').innerHTML = "Game is saved";
}
;

// load game
function load() {
    var oldSave = JSON.parse(localStorage.getItem("newSave"));
    if (typeof oldSave.adams !== "undefined") {
        adams = oldSave.adams;
    }
    if (typeof oldSave.cursors !== "undefined") {
        cursors = oldSave.cursors;
        cursorCost = oldSave.cursorCost;
    }
    if (typeof oldSave.puppies !== "undefined") {
        puppies = oldSave.puppies;
        puppyCost = oldSave.puppyCost;
    }
    if (typeof oldSave.boyfriends !== "undefined") {
        boyfriends = oldSave.boyfriends;
        boyfriendCost = oldSave.boyfriendCost;
    }
    if (typeof oldSave.concerts !== "undefined") {
        concerts = oldSave.concerts;
        concertCost = oldSave.concertCost;
    }
    loadAll();
    document.getElementById('fadeout-alert').style.display = "block";
    document.getElementById('message').innerHTML = "Game is loaded";
}

// DELETE SAVE
function deleteSave() {
    localStorage.removeItem("newSave");
    adams = 0;
    cursors = 0;
    puppies = 0;
    boyfriends = 0;
    concerts = 0;
    cursorCost = 10;
    puppyCost = 100;
    boyfriendCost = 500;
    concertCost = 1000;
    loadAll();
    document.getElementById('fadeout-alert').style.display = "block";
    document.getElementById('message').innerHTML = "Save is deleted";
}

// adam counters
window.setInterval(function() {
    persec = cursors + (puppies * 10) + (boyfriends * 50) + (concerts * 100);
    getAdam(persec);
    document.getElementById("persec").innerHTML = persec;
}, 1000);