let semesterinput = document.getElementById("semesterno");
let subjectsinput = document.getElementById("Noofsubjects");
let subjectsdiv = document.getElementById("subjects");
let enterbutton = document.getElementById("enterbutton");
let SemesterNo = document.getElementById("SemesterNo");
let subjects = document.getElementById("totalsubjects");
let gpacalculated = document.getElementById("gpacalculated")
let error = document.getElementById("error")
let gradebutton = document.createElement("button");

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

  subjectsdiv.innerHTML = ""
  gpacalculated.innerText = ""


  gradebutton.innerText = "Calculate";
  gradebutton.setAttribute("class", "Enterbutton")

  SemesterNo.innerText = "Semester No: " + semesterinput.value;
  subjects.innerText = "Total Subjects: " + subjectsinput.value;
  let intsubjects = parseInt(subjectsinput.value);


  for (let i = 0; i < intsubjects; i++) {
    let div = document.createElement("div")
    let subjectname = document.createElement("input");
    let credithour = document.createElement("input");
    let grade = document.createElement("input");

    setAttributes(div, { "class": "gradesinput" })
    setAttributes(subjectname, { "class": "input", "placeholder": "Enter Subject Name:" })
    setAttributes(credithour, { "class": "input", "placeholder": "Enter Credits Hour:", "id": `Hour${i}` })
    setAttributes(grade, { "class": "input", "placeholder": "Enter Grade:", "id": `grade${i}` })

    subjectsdiv.appendChild(div)
    div.appendChild(subjectname)
    div.appendChild(credithour)
    div.appendChild(grade)

  }

  subjectsdiv.appendChild(gradebutton)
}


enterbutton.addEventListener("click", (e) => {
  let inputs = document.querySelectorAll(".input");
  let flag=true;
  inputs.forEach(element => {
  if (validate(element) === false) {
    flag=false;
  }
  
  });
  if(flag==true)
  {
    error.innerText="";
    Clicked()
  }else
    error.innerText="InputFields are Empty" ;
    
});



gradebutton.addEventListener("click", () => {
  let inputs = document.querySelectorAll(".input");
  let flag=true;
  inputs.forEach(element => {
  if (validate(element) === false) {
    flag=false;
  }
  
  });
  if(flag==true)
  {
    error.innerText="";
    const result = CalculateGPA(parseInt(subjectsinput.value));
    gpacalculated.innerText = `Your GPA is: ${result}`;
  }else
    error.innerText="InputFields are Empty" ;
});


function CalculateGPA(subjects) {
  let result = 0.0;
  let creditHourSum = 0;
  for (let i = 0; i < subjects; i++) {
    let grade = document.getElementById(`grade${i}`).value;
    let creditHour = parseInt(document.getElementById(`Hour${i}`).value);

    creditHourSum = creditHourSum + creditHour

    if (grade === "A")
      result += (4 * creditHour);
    else if (grade === "B+")
      result += (3.5 * creditHour);
    else if (grade === "B")
      result += (3 * creditHour);
    else if (grade === "C+")
      result += (2.5 * creditHour);
    else if (grade === "C")
      result += (2 * creditHour);
    else if (grade === "D+")
      result += (1.5 * creditHour);
    else if (grade === "D")
      result += (1 * creditHour);
    else if (grade === "F")
      result += (0 * creditHour);
  }


  return (result / creditHourSum).toFixed(2);
}