const teacher = [
  {
    name: "Teacher1",
    age: 28,
    subject: "English",
  },
  {
    name: "Teacher2",
    age: 28,
    subject: "Gujarati",
  },
  {
    name: "teacher3",
    age: 28,
    subject: "Hindi",
  },
];

const teachersData = () => {
  let teachers = document.querySelector("#teachers");

  for (let i = 0; i < teacher.length; i++) {
    var teacherHTML = `
    <div class="teacher_details">
            <h4 class="teacher_name">${teacher[i].name}</h4>
            <p class="teacher_age">${teacher[i].age}</p>
            <p class="teacher_subject">${teacher[i].subject}</p>
    </div>
  `;
    console.log(teacher);

    teachers.innerHTML += teacherHTML;
  }
};

teachersData();
