
console.log(whichSchool(19));

function whichSchool(age) {

  let message = "";

  if (age < 13) {
    message = "Elementary School";
  }
  else if (age >= 13 && age <= 18) {
    message = "Secondary School";
  }
  else {
    message = "Lighthouse Labs";
  }

  return (message);
}