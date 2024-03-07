let surprise = document.querySelector(".result");
let button = document.querySelector("button");


button.onclick = function() {
    let tacos = document.querySelector(".a1").value;
    let picky = document.querySelector(".a2").value;
    console.log(tacos);
    console.log(picky);
    if (tacos < 3 && picky === "picky") {
        surprise.innerHTML = "You eat " + tacos + " tacos. You are " + picky + ". This means you are a taco of asada.";
    } else if (tacos === "3" && picky === "not picky") {
        surprise.innerHTML = "You eat " + tacos + " tacos. You are " + picky + ". This means you are a taco of pastor.";

    } else if (tacos > 3 && picky === "kinda") {
        surprise.innerHTML = "You eat " + tacos + " tacos. You are " + picky + ". This means you are a taco of lengua.";
    } else if (tacos < 3 && picky === "kinda") {
        surprise.innerHTML = "You eat " + tacos + " tacos. You are " + picky + ". This means you are a taco of pollo.";
    }
};