const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const tipPercentage = document.querySelector("#tipPercentage");
const totalPeople = document.querySelector("#noOfPeople");


form.addEventListener("submit", function(event) {
  event.preventDefault();



  //Validation
  if (Number(amount.value) <= 0 || isNaN(Number(amount.value))) {
    document.querySelector(".has-errors").textContent = "Invalid value";
    return;
  } 

  
  // actual tip is amount times percentage divided 100,
  const tipAmount = (Number(amount.value ) * tipPercentage.value) / 100;

  // tip person is actual-tip / total people
  const tipPerPerson = tipAmount / totalPeople.value;

  const totalAmount = tipAmount + Number(amount.value);

  const totalAmountPerPerson = totalAmount / totalPeople.value;

  console.log(tipAmount, tipPerPerson, totalAmount, totalAmountPerPerson);

  document.querySelector(".PerPersonTip").textContent = tipPerPerson;
  document.querySelector(".AmountTip").textContent = tipAmount;
  document.querySelector(".AmountPerPerson").textContent = totalAmountPerPerson;
  document.querySelector(".totalAmount").textContent = totalAmount;

  //
  document.querySelector(".alert-success").innerHTML = ` <p class="p-2 text-center">Tip and bill calculated Successfully</p>`

});
