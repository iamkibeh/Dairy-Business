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

months.addEventListener('change', function() {
  console.log('You selected: ', this.value);
  let monthly_cost=daysOfTheMonth[this.value]*45*1876;
  console.log(monthly_cost)
  production_content.innerHTML += "Your income for "+this.value+" is "+monthly_cost +"<br>"
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
  console.log(`Your production in Shed  ${shedArr[i]} ${litreArr[i]} litres per day`)
}
}

console.log(totalProduction(shed_perLitre))