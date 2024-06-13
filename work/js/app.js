const display = document.getElementById('display');

function getCalc(btn) {
  const dataNumber = btn.dataset.number;
  const dataOperator = btn.dataset.operator;
  const dataClear = btn.dataset.clear;
  const dataEquals = btn.dataset.equals;
  if (dataEquals === "=") {
    display.value = Function('return('+display.value+');')();
  } else if (dataClear === "all") {
    display.value = "";
  } else {
    if (dataOperator) {
      if (dataOperator === "*") {
        display.value += "*";
      } else if (dataOperator === "/") {
        display.value += "/";
      } else {
        display.value += dataOperator;
      }
    } else if (dataNumber) {
      display.value += dataNumber;
    }
  }
}
