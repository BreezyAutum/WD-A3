/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const mondayButton = document.getElementById("monday");
const tuesdayButton = document.getElementById("tuesday");
const wednesdayButton = document.getElementById("wednesday");
const thursdayButton = document.getElementById("thursday");
const fridayButton = document.getElementById("friday");
const halfDayButton = document.getElementById("half");
const fullDayButton = document.getElementById("full");
const clearButton = document.getElementById("clear-button");
const calculatedCost = document.getElementById("calculated-cost");
let dailyRate = 35;
let dayCounter = 0;
let totalCost = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

mondayButton.addEventListener("click", selectMon);
function selectMon(){
    if(mondayButton.classList.contains("clicked") === false){
        mondayButton.classList.add("clicked");
        dayCounter += 1;
        calculateTotal();
    } else {
        mondayButton.classList.remove("clicked");
        dayCounter -= 1;
        calculateTotal();
    }
}
tuesdayButton.addEventListener("click", selectTues);
function selectTues(){
    if(tuesdayButton.classList.contains("clicked") === false){
        tuesdayButton.classList.add("clicked");
        dayCounter += 1;
        calculateTotal();
    } else {
        tuesdayButton.classList.remove("clicked");
        dayCounter -=1;
        calculateTotal();
    }
}
wednesdayButton.addEventListener("click", selectWed);
function selectWed(){
    if(wednesdayButton.classList.contains("clicked") === false){
        wednesdayButton.classList.add("clicked");
        dayCounter += 1;
        calculateTotal();
    } else {
        wednesdayButton.classList.remove("clicked");
        dayCounter -= 1;
        calculateTotal();
    }
}
thursdayButton.addEventListener("click", selectThurs);
function selectThurs(){
    if(thursdayButton.classList.contains("clicked") === false){
        thursdayButton.classList.add("clicked");
        dayCounter += 1;
        calculateTotal();
    } else {
        thursdayButton.classList.remove("clicked");
        dayCounter -= 1;
        calculateTotal();
    }
}
fridayButton.addEventListener("click", selectFri);
function selectFri(){
    if(fridayButton.classList.contains("clicked") === false){
        fridayButton.classList.add("clicked");
        dayCounter += 1;
        calculateTotal();
    } else {
        fridayButton.classList.remove("clicked");
        dayCounter -= 1;
        calculateTotal();
    }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", clearAll);
function clearAll(){
    mondayButton.classList.remove("clicked");
    tuesdayButton.classList.remove("clicked");
    wednesdayButton.classList.remove("clicked");
    thursdayButton.classList.remove("clicked");
    fridayButton.classList.remove("clicked");
    dayCounter = 0;
    calculateTotal();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener("click", selectHalf);
function selectHalf(){
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    dailyRate = 20;
    calculateTotal();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener("click", selectFull);
function selectFull(){
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    dailyRate = 35;
    calculateTotal();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotal(){
    totalCost = dailyRate * dayCounter;
    calculatedCost.textContent = (totalCost);
}
