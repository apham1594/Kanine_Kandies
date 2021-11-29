var fortunes = [

    "You will win a <em>1000</em> dollars! Yippee!",
    "If you want to know the meaning of life, Look it up in the dictionary",
    "You will reconnect with a long lost friend.",
    "You're screwed",
    "You will pass your exams",
    "True love is a cat",
    "Smile, you never know who is falling in love with it",
];

function tellFortune() {


    var randomNumber = Math.floor(Math.random() * fortunes.length);


    console.log("random number: " + randomNumber);


    document.getElementById("fortune").innerHTML = fortunes[randomNumber];
}

function reset() {


}