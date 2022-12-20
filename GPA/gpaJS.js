let semesterinput = document.getElementById("semesterno");
let subjectsinput = document.getElementById("Noofsubjects");
let subjectsdiv = document.getElementById("subjects");
let enterbutton = document.getElementById("enterbutton");
let SemesterNo = document.getElementById("SemesterNo");
let subjects = document.getElementById("totalsubjects");

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

enterbutton.addEventListener("click",()=>{

    let gradebutton = document.createElement("button");
    gradebutton.innerText="Calculate";
    gradebutton.setAttribute("class","Enterbutton")

    SemesterNo.innerText=SemesterNo.textContent+" "+semesterinput.value;
    subjects.innerText=subjects.textContent+" "+subjectsinput.value;
    let intsubjects = parseInt(subjectsinput.value);
    console.log(intsubjects);
    for(let i=0;i<intsubjects;i++){
        let div = document.createElement("div")
        let subjectname = document.createElement("input");
        let credithour = document.createElement("input");
        let grade = document.createElement("input");
        
        setAttributes(div,{"class":"gradesinput"})
        setAttributes(subjectname,{"class":"input","placeholder":"Enter Subject Name:"})
        setAttributes(credithour,{"class":"input","placeholder":"Enter Credits Hour:"})
        setAttributes(grade,{"class":"input","placeholder":"Enter Grade:"})

        subjectsdiv.appendChild(div)
        div.appendChild(subjectname)
        div.appendChild(credithour)
        div.appendChild(grade)

    }

    subjectsdiv.appendChild(gradebutton)

    
});