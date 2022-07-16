// alert("hello")
const login = document.getElementById("login");
const frm = document.getElementById("frm").addEventListener("submit",()=>{
    console.log("clicked me");
});
const close = document.getElementById("close");
const content = document.getElementById("content");
const username = document.getElementById("user-name").value;
const password = document.getElementById("pwd").value;
const submit_btn = document.getElementById("submit_btn")
const production_content=document.getElementById("production-per-shed");
const months=document.getElementById("select-month");
const production = document.getElementById("production")
const btn_1=document.getElementById('btn-1');
const select_time = document.getElementById("select-time")
const timely_income = document.getElementById("timely-income")
const income_content = document.getElementById("income-content")
const monthly_report = document.getElementById("monthly-report")

close.addEventListener("click", () => {
  login.style.display = "none";
  // content.innerHTML=`<h3>Hello {username.target.}</h3>`
  console.log(username.value);
  
});


// functions


const daysOfTheMonth={
  January:31,
  February:29,
  March:31,
  April:30,
  May:31,
  June:30,
  July:31,
  August:31,
  September:30,
  October:31,
  November:30,
  December:31
}
let objectCopy = Object.assign({}, daysOfTheMonth);


function monthlyIncome(obj){
  // let arr = new Array()
  let monthArr = Object.keys(obj);
  let daysArr = Object.values(obj);
  for(let i=0;i<daysArr.length;i++){
      let amount = daysArr[i]*45*1876;
      
      let cost="Your income for "+monthArr[i]+" is "+amount
      // console.log("Your income for "+monthArr[i]+" is "+amount)
      monthly_report.innerHTML += "Your income for "+monthArr[i]+" is "+amount + "<br>"
      
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

months.addEventListener('change', function() {
  console.log('You selected: ', this.value);
  let monthly_cost=daysOfTheMonth[this.value]*45*1876;
  console.log(monthly_cost)
  income_content.innerHTML += "Your income for "+this.value+" is "+monthly_cost +"<br>"
});

// TOTAL PRODUCTION PER SHED

let shed_perLitre = {
  "A":510,
  "B":308,
  "C":486,
  "D":572
};

function totalProduction (obj) {
let shedArr = Object.keys(obj);
let litreArr = Object.values(obj);

for(let i=0; i<shedArr.length; i++){
  // console.log(`Your production in Shed  ${shedArr[i]} ${litreArr[i]} litres per day`)
  production.innerHTML += `<b>Your production in Shed  ${shedArr[i]} ${litreArr[i]} litres per day <br><b>`
}
}

// console.log(totalProduction(shed_perLitre))

// INCOME OVERTIME

const buying_rate=45;
let cost;
function incomeOverTime(selling_price,time){
    if(time==="Weekly"){
 cost=selling_price*7
        
    }
    else if(time==="Yearly"){
 cost=selling_price*365

    }
    return timely_income.innerHTML += `Your ${time} income will be Ksh ${cost} <br>`;
}
// let amountBalance=incomeOverTime(buying_rate,"weekly")
// console.log(amountBalance);

select_time.addEventListener('change',function(){
  incomeOverTime(buying_rate, this.value)
})

