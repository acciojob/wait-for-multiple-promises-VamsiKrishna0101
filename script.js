const time = Math.floor(Math.random() * 3) + 1;
const mypromise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(`${time}`);
  }, time * 1000);
});

const time1 = Math.floor(Math.random() * 3) + 1;
const mypromise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res(`${time1}`);
  }, time1 * 1000);
});

const time3 = Math.floor(Math.random() * 3) + 1;
const mypromise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res(`${time3}`);
  }, time3 * 1000);
});

let total = 0;
const output = document.getElementById("output");
output.innerHTML = ""; // clear Loading rows

Promise.all([mypromise1, mypromise2, mypromise3]).then((data) => {
  data.forEach((value, index) => {
    const row = document.createElement("tr");

    const name1 = document.createElement("td");
    name1.textContent = `Promise${index + 1}`;

    const timec1 = document.createElement("td");
    timec1.textContent = Number(value)

    total = Math.max(total, Number(value)); 

    row.appendChild(name1);
    row.appendChild(timec1);
    output.appendChild(row);
  });

  // Add total row
  const row = document.createElement("tr");
  const name = document.createElement("td");
  name.textContent = "Total";
  const timeTaken = document.createElement("td");
  timeTaken.textContent = total.toFixed(3);

  row.appendChild(name);
  row.appendChild(timeTaken);
  output.appendChild(row);
});
