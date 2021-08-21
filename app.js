var costPrice = document.querySelector("#cost-price");
var quantity = document.querySelector("#stock-quantity");
var currPrice = document.querySelector("#current-price");

var calculateBtn = document.querySelector("#calculate-btn");

function clickHandler(){
    document.getElementById("result-div").style.display = "block";
    document.getElementById("result-div").style.color = "var(--text-color)";
    document.getElementById("result-div").style.borderColor = "var(--text-color)";
    document.getElementById("footer").style.backgroundColor = "var(--primary-color)";
    calculateBtn.style.backgroundColor = "var(--primary-color)";
    document.getElementById("img").innerHTML = `<img src="./assets/normal.jpg" alt="stock profit">`;

    if(costPrice.value === "" || quantity.value === "" || currPrice.value === ""){
        document.getElementById("result-div").innerText = "Fields cannot be empty. please enter values" ;

    }
    else if(costPrice.value < 0 || quantity.value < 0 || currPrice.value < 0){
        document.getElementById("result-div").innerText =  "Please enter correct values. Input cannot be negative" ;

    }
    else {
    var growth = currPrice.value - costPrice.value;
    var growthPercentage = Math.abs(100*(growth/costPrice.value)) ;
    growthPercentage = growthPercentage.toFixed(2);
    var growthAmount = growth*quantity.value;

    if(growth === 0){
        document.getElementById("result-div").innerText =  `Your Growth is 0. NO PROFIT or LOSS` ;
        }
    else if(growth < 0){
        document.getElementById("result-div").innerText =  `LOSS : ` + Math.abs(growthPercentage) + "%.  You have lost total ₹"+ Math.abs(growthAmount);
        document.getElementById("result-div").style.color = "var(--secondary-color)";
        document.getElementById("result-div").style.borderColor = "var(--secondary-color)";
        console.log(growthPercentage);
        if(growthPercentage > 50){
        calculateBtn.style.backgroundColor = "var(--secondary-color)";
        document.getElementById("footer").style.backgroundColor = "var(--secondary-color)";
        document.getElementById("img").innerHTML = `<img src="./assets/bear.jpg" alt="stock loss">`;
        }
    }

    else{
        document.getElementById("result-div").innerText =  `PROFIT : ` + Math.abs(growthPercentage) + "%. You have gained total ₹"+ Math.abs(growthAmount);
        document.getElementById("result-div").style.color = "var(--primary-color)";
        document.getElementById("result-div").style.borderColor = "var(--primary-color)";
        if(growthPercentage > 50)
        document.getElementById("img").innerHTML = `<img src="./assets/bull.jpg" alt="stock profit">`;

    }

    }


}

calculateBtn.addEventListener("click",clickHandler);