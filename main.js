//dom to grab user info on click of button
document.getElementById("submit").onclick = function () {coins(document.getElementById("coinOptions").value)};

function coins(num){
    //hides the range and shows the guess input to user
    document.getElementById("coins").classList.add("d-none");
    document.getElementById("flip").classList.remove("d-none");

    let coins = document.getElementById("flip");
    //makes sure the html is empty
    coins.innerHTML = "";

    for(let i = 0; i < num; i++){
        coins.innerHTML += `
        <div class="coin">
            <div class="heads">
                <img src="/img/head.png" alt="">
            </div>
            <div class="tails">
                <img src="/img/tail.png" alt="">
            </div>
        </div>
        `;
    }


    let coin = document.querySelectorAll(".coin");
    for(let i = 0; i < coin.length; i++){
        coin[i].style.animation = "none";
        if (Math.random() <= 0.5){
            coin[i].style.animation = "flip-heads 3s forwards";
        }
        else{
            coin[i].style.animation = "flip-tails 3s forwards";
        }
    }
    
}