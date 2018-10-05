var quotes = [
    "count the number of your dog\'s nipples (if you have one)",
    "listen to Adam old songs",
    "ha ha hahahahaha",
    "follow Pharaoh The Doggo twitter. You won\'t regret it",
    "cry",
    "adopt nihilism",
    "start a new religion",
    "name your dog Pharaoh, if you don\'t have one,<br/>name your chair Pharaoh",
    "learn German",
    "plan world domination",
    "shit post on Twitter"
];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}


