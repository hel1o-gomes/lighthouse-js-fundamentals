let number = 100;
for (let i = 100; i <= 200; i++) {
  number = i;
  if (i % 3 === 0 && i % 4 === 0) {
    number = "LoopyLighthouse"
  }
  else if (i % 3 === 0) {
    number = "Loopy"
  } 
  else if  (i % 4 === 0) {
    number = "Lighthouse"
  }
  console.log(number);
}