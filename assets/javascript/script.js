// alert("hello")
months.addEventListener('change', function() {
  console.log('You selected: ', this.value);
  let monthly_cost=daysOfTheMonth[this.value]*45*1876;
  console.log(monthly_cost)
  production_content.innerHTML += "Your income for "+this.value+" is "+monthly_cost +"<br>"
});
