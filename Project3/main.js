//Ask the user for a number from 0 to 9 and display the special character located on this key (1-!, 2-@, 3-#, etc.).
function Special_Symbol() {
  let a = prompt("Enter number 0-9");
  const s = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("][parseInt(a)];
  if (a >= 0 && a <= 9) {
    alert(s);
  } else if (a > 9) {
    alert("Don't enter number bigger than 9");
    return;
  } else {
    alert("Error");
    return;
  }
}
Special_Symbol();

//Ask the user for the year and check whether it is a leap year or not. A leap year is either a multiple of 400 or a multiple of 4 but not a multiple of 100.
function Leap_Year() {
  let y = prompt("Enter year");

  if (y % 4 == 0 && y % 100 != 0 && y % 400 == 0) {
    alert("This year is leap");
  } else {
    alert("This year is not leap");
  }
}
Leap_Year();

//Request a date (day, month, year) and display the next date. Consider the possibility of moving to the next month, year, as well as leap year.
