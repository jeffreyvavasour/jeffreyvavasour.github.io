const btnSubjectsTaken = document.getElementById("subjectsTakenBtn");
let subjectsTaken;
let resultsArr = [];
let avgResult = 0;
let sumResults = 0;
let grade = "";

btnSubjectsTaken.addEventListener("click", function () {
  subjectsTaken = parseInt(prompt("enter number of subjects taken"));
  for (let i = 0; i < subjectsTaken; i++) {
    const ans = parseInt(prompt("Enter result for subject " + (i + 1)));
    resultsArr.push(ans);
  }

  for (let i = 0; i < resultsArr.length; i++) {
    const para = document.createElement("p");
    const node = document.createTextNode(
      `Subject ${i + 1} result = ${resultsArr[i]}`
    );
    para.appendChild(node);
    document.querySelector("body").appendChild(para);
    sumResults += resultsArr[i];
  }

  avgResult = sumResults / subjectsTaken;

  if (avgResult < 40) {
    grade = "F";
  } else if (avgResult < 50) {
    grade = "E";
  } else if (avgResult < 60) {
    grade = "D";
  } else if (avgResult < 70) {
    grade = "C";
  } else if (avgResult < 80) {
    grade = "B";
  } else {
    grade = "A";
  }

  const para = document.createElement("p");
  const node = document.createTextNode(`Overall grade = ${grade}`);
  para.appendChild(node);
  document.querySelector("body").appendChild(para);
});
