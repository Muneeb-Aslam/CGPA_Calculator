let gradebutton = document.createElement("button");
let semesterinput = document.getElementById("TotalSemesterinput");
let enterbutton = document.getElementById("enterbutton");
let cgpainput = document.getElementById("cgpainput")
let gpacalculated = document.getElementById("gpacalculated")

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};

function validate(inputs) {
  let flag;
  if (inputs.value == "") {
    inputs.style.border = "solid red";
    flag = false;
  }
  else {
    flag = true;
    inputs.style.border = "solid tomato";
  }
  return flag;
}

function Clicked() {
  cgpainput.innerHTML = ""
  gpacalculated.innerText = ""
  gradebutton.innerText = "Calculate";
  gradebutton.setAttribute("class", "Enterbutton")

  let intsemester = parseInt(semesterinput.value);

  for (let i = 0; i < intsemester; i++) {
    let div = document.createElement("div")
    let semesters = document.createElement("input");

    setAttributes(div, { "class": "cgpainputdiv" })
    setAttributes(semesters, { "class": "input", "placeholder": `Enter GPA of semester ${i + 1}:`, "id": `semester${i}` })

    cgpainput.appendChild(div)
    div.appendChild(semesters)

  }
  cgpainput.appendChild(gradebutton);
}


function Calculation() {
  let intsemester = parseInt(semesterinput.value);
  let sum = 0;
  for (let i = 0; i < intsemester; i++) {
    let input = document.getElementById(`semester${i}`);
    let gpa = parseFloat(input.value);
    sum = sum + gpa;
    gpacalculated.innerText = `Your CGPA is: ${(sum / intsemester).toFixed(2)}`
  }
}
enterbutton.addEventListener("click", (e) => {
  let inputs = document.querySelectorAll(".input");
  let flag = true;
  inputs.forEach(element => {
    if (validate(element) === false) {
      flag = false;
    }

  });
  if (flag == true) {
    error.innerText = "";
    Clicked()
  } else
    error.innerText = "InputFields are Empty";

});




gradebutton.addEventListener("click", () => {
  let inputs = document.querySelectorAll(".input")
  let flag = true;
  inputs.forEach(element => {
    if (validate(element) === false) {
      flag = false;
    }

  });
  if (flag == true) {
    error.innerText = "";
    Calculation()
  } else
    error.innerText = "InputFields are Empty";

});