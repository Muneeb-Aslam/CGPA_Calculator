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


  enterbutton.addEventListener("click", () => {
  
    cgpainput.innerHTML=""
    gpacalculated.innerText=""
    gradebutton.innerText = "Calculate";
    gradebutton.setAttribute("class", "Enterbutton")
  
    let intsemester = parseInt(semesterinput.value);
      
    for (let i = 0; i < intsemester; i++) {
      let div = document.createElement("div")
      let semesters = document.createElement("input");

      setAttributes(div, { "class": "cgpainputdiv" })
      setAttributes(semesters, { "class": "input", "placeholder": `Enter GPA of semester ${i+1}:`, "id": `semester${i}` })
  
      cgpainput.appendChild(div)
      div.appendChild(semesters)
  
    }
    cgpainput.appendChild(gradebutton);
  });  



  gradebutton.addEventListener("click",()=>{
    let intsemester = parseInt(semesterinput.value);
    let sum=0;
    for (let i = 0; i < intsemester; i++){
        let input = document.getElementById(`semester${i}`);
        let gpa = parseFloat(input.value);
        sum=sum+gpa;
    }
    gpacalculated.innerText=`Your CGPA is: ${(sum/intsemester).toFixed(2)}`
  });