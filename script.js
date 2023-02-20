const bill_input = document.getElementById("bill_input");
const tips = document.getElementsByClassName("tips");
const peopleInput = document.getElementById("peopleInput");
const total_person = document.getElementById("total_person");
const tip_amount= document.getElementById("tip_amount");
const resetButton = document.getElementById("resetButton");
const custom = document.getElementById("custom");

bill_input.addEventListener("input", xd);
peopleInput.addEventListener("input", xd);
resetButton.addEventListener("click", reset);
custom.addEventListener("input", resetButtons);
custom.addEventListener("input", xd);

function resetButtons()
{
    for(let i = 0; i<tips.length; i++)
    {
        tips[i].style.backgroundColor = "hsl(183, 100%, 15%)";
    }
}

function reset()
{
    tip_amount.innerText = "$0";
    total_person.innerText = "$0";
    peopleInput.value = '';
    bill_input.value = '';
}


let tip = 0;

for(let i = 0; i<tips.length; i++)
{
    tips[i].addEventListener("click", botones);
    tips[i].addEventListener("click", xd);
}

function botones(e)
{
    for(let i = 0; i<tips.length; i++)
    {
        tips[i].style.backgroundColor = "hsl(183, 100%, 15%)";
    }
    e.target.style.backgroundColor = "hsl(172, 67%, 45%)";
    tip = parseFloat(e.target.value);
    tip = tip/100;
    custom.value = '';
}
function xd(e)
{
    let customNumber = parseInt(custom.value);
    let valorBill = parseFloat(bill_input.value);
    let valorPeople = parseFloat(peopleInput.value);
    if(isNaN(valorBill))
    {
        valorBill = 0;
    }
    if(isNaN(valorPeople))
    {
         valorPeople = 1;
    }
    if(isNaN(customNumber))
    {
         customNumber = 0;
    }
    else 
    {
        tip = customNumber/100;
    }
    let result = (valorBill + (valorBill*tip))/valorPeople;
    result = result.toFixed(2);
    let tipResult = (valorBill*tip)/5;
    tipResult = tipResult.toFixed(2);
    total_person.innerText = `$${result}`;
    tip_amount.innerText = `$${tipResult}`;

}
