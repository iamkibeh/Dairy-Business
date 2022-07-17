// alert("hello")
const login = document.getElementById("login");
const frm = document.getElementById("frm");
const close = document.getElementById("close");
const content = document.getElementById("content");
const username = document.getElementById("user-name").value;
const password = document.getElementById("pwd").value;
const submitBtn = document.getElementById("submit_btn");
const production_content = document.getElementById("production-per-shed");
const months = document.getElementById("select-month");
const production = document.getElementById("production");
const displayDiv = document.getElementById("display_div");
const btn1 = document.getElementById("btn-1");
const selectTime = document.getElementById("select-time");
const timelyIncome = document.getElementById("timely-income");
const incomeContent = document.getElementById("income-content");
const monthlyReport = document.getElementById("monthly-report");
const btn3 = document.getElementById("btn3");
const timelyReport = document.getElementById("timely-report")



frm.onsubmit = function(e){
  e.preventDefault();
  const username = document.getElementById("user-name").value;
  login.style.display = "none";

  var tag = document.createElement("h2");
  var text = document.createTextNode(`Hello ${username} welcome`); 
  tag.appendChild(text);
  content.appendChild(tag);

  console.log("username: " + username);
};

close.addEventListener("click", () => {
  login.style.display = "none";
  // content.innerHTML=`<h3>Hello {username.target.}</h3>`
  console.log(username.value);
});

// functions

const daysOfTheMonth = {
  January: 31,
  February: 29,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};
// let objectCopy = Object.assign({}, daysOfTheMonth);
// console.log(objectCopy);
function monthlyIncome(obj) {
  // let arr = new Array()
  let monthArr = Object.keys(obj);
  let daysArr = Object.values(obj);
  for (let i = 0; i < daysArr.length; i++) {
    let amount = daysArr[i] * 45 * 1876;

    let cost = "Your income for " + monthArr[i] + " is " + amount;
    // console.log("Your income for "+monthArr[i]+" is "+amount)
    // console.log(monthlyReport.childNodes.length)
    console.log(monthlyReport.children.length);
    if(monthlyReport.children.length < daysArr.length){
      
    monthlyReport.innerHTML +=
      "Your income for " + monthArr[i] + " is " + amount + "<br>";
  }
}
  //   for(let month in objectCopy){
  //     console.log(objectCopy)
  // objectCopy[month] = month*45*1876;
  //     }
}
// console.log(typeof(monthlyIncome(daysOfTheMonth)))
// console.log(monthlyIncome(daysOfTheMonth))
// monthlyIncome(daysOfTheMonth)

// production_content.innerHTML= result

// console.log(months);
// console.log(months.January);

months.addEventListener("change", function () {
  console.log("You selected: ", this.value);
  let monthly_cost = daysOfTheMonth[this.value] * 45 * 1876;
  console.log(monthly_cost);
  incomeContent.innerHTML +=
    "Your income for " + this.value + " is " + monthly_cost + "<br>";
});

// TOTAL PRODUCTION PER SHED

let shed_perLitre = {
  A: 510,
  B: 308,
  C: 486,
  D: 572,
};

function totalProduction(obj) {
  let shedArr = Object.keys(obj);
  let litreArr = Object.values(obj);
  console.log(shedArr.length);
  console.log(displayDiv.children);
  console.log("child_nodes:" + displayDiv.childNodes.length);

  if (displayDiv.childNodes.length < shedArr.length) {
    console.log(displayDiv.childNodes);
    console.log("clearing");
    displayDiv.childNodes.forEach(child => {
      console.log("removing child: " + child);
  
  })
  for (let i = 0; i < shedArr.length; i++) {
    // console.log(`Your production in Shed  ${shedArr[i]} ${litreArr[i]} litres per day`)

    // console.log(displayDiv.innerHTML=shedArr[i]);
    // production.appendChild(displayDiv);
    displayDiv.innerHTML += `<b><p>Your production in Shed  ${shedArr[i]} ${litreArr[i]} litres per day </p><br><b>`;
  }
}
}

// console.log(totalProduction(shed_perLitre))

// INCOME OVERTIME

const buying_rate = 45;
let cost;
function incomeOverTime(selling_price, time) {
  if (time === "Weekly") {
    cost = selling_price * 7;
  } else if (time === "Yearly") {
    cost = selling_price * 365;
  }
  return (timelyIncome.innerHTML += `Your ${time} income will be Ksh ${cost} <br>`);
}
// let amountBalance=incomeOverTime(buying_rate,"weekly")
// console.log(amountBalance);

selectTime.addEventListener("change", function () {
  incomeOverTime(buying_rate, this.value);
});

let period = ["weekly", "yearly"];

function overTimeIncome(selling_price, time) {
// console.log(timelyIncome.children.length)
if(timelyReport.children.length < time.length){

  for (let i = 0; i < time.length; i++) {
    if (time[i] === "weekly") {
      cost = selling_price * 7 * 1876;
    } else if (time[i] === "yearly") {
      cost = selling_price * 365 * 1876;
    }
    timelyReport.innerHTML += `Your ${time[i]} income will be Ksh ${cost} <br>`;
  }
}
}
// btn3.removeEventListener("click")
