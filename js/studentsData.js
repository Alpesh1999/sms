const student = [
  {
    name: "xyz",
    age: 12,
    std: 5,
  },
  {
    name: "abc",
    age: 12,
    std: 5,
  },
  {
    name: "dlf",
    age: 12,
    std: 5,
  },
];

const studentsData = () => {
  let students = document.querySelector("#students");

  for (let i = 0; i < student.length; i++) {
    var studentHTML = `
    <div class="student_details">
            <h4 class="student_name">${student[i].name}</h4>
            <p class="student_age">${student[i].age}</p>
            <p class="student_std">${student[i].std}</p>
    </div>
  `;
    console.log(student);

    students.innerHTML += studentHTML;
  }
};

studentsData();
