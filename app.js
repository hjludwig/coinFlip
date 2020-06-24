const flipButton = document.querySelector(".flip");
const coin = document.querySelector(".coin");
const coinContainer = document.querySelector(".coin-container");
const heads = "url(assets/coin-head.png)";
const blank = "url(assets/coin-blank.png)";
const tails = "url(assets/coin-tails.png)";

function flip () { 
    coin.style.backgroundImage = blank;
    coin.classList.add("animate");
    coinContainer.classList.add("animate");
    coin.addEventListener('animationend', function(){
        coin.classList.remove("animate");
        coinContainer.classList.remove("animate");
        let randomNum = Math.floor(Math.random() * 2);
        getResult(randomNum);
    });
}
function getResult(num) {
    if (num === 0) {
        coin.style.backgroundImage = heads;
    }
    else {
        coin.style.backgroundImage = tails;
    }
}



flipButton.addEventListener("click", flip);