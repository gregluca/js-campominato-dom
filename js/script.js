document.getElementById("btn").addEventListener("click", start);

function start () {
    const gridElem = document.querySelector(".grid");
    gridElem.innerHTML = "";
    gridElem.classList.remove("hidden");
    for (let i = 1; i <= 100; i++){
    const newCell = document.createElement("div");
    newCell.addEventListener("click", changecolor);
    newCell.classList.add("cell");
    newCell.innerHTML = i;
    console.log(newCell);
    gridElem.append(newCell);
    }
}

function changecolor () {
    this.classList.add("orange");
    console.log(this.textContent);
    if (bomb.includes(parseInt(this.textContent))) {
        this.classList.add("red");
        console.log("hai perso");
    }
    else {
        this.classList.add("lightblue");
        
    }
}

// generare 16 numeri 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



function generateRandomOrderNumbers(maxNumber) {
    const result = [];
    while (result.length < 16) {
      const newNumber = getRndInteger(1, maxNumber);
      if (!result.includes(newNumber)) {
        result.push(newNumber);
      }
    }
    return result;
}
let bomb = generateRandomOrderNumbers(100);
console.log(bomb);