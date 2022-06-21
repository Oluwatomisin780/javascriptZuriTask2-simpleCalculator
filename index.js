const inputOne = prompt('please Enter a number');
const inputTwo = prompt('please Enter a second  digit');
const optionSelected = prompt(
  'please Select an option: 1.add 2.substract 3.divide 4. multply'
);
const one = parseInt(inputOne) + parseInt(inputTwo);
const two = parseInt(inputOne) - parseInt(inputTwo);
const three = parseInt(inputOne) / parseInt(inputTwo);
const four = parseInt(inputOne) * parseInt(inputTwo);

if (optionSelected == 'add') {
  alert(one);
} else if (optionSelected == 'substract') {
  alert(two);
} else if (optionSelected == 'multiply') {
  alert(four);
} else if (optionSelected == 'divide') {
  alert(three);
} else {
  prompt(' please Enter a valid options');
}
