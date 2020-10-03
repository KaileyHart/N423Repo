//Creates the students array
let studentsArray = [];

//Sets the object inside of studnetsArray
function addStudent(e) {
  e.preventDefault();
  //Student Object
  let student = {
    id: Date.now(),
    name: document.getElementById("studentName").value,
    age: document.getElementById("studentAge").value,
    phone: document.getElementById("studentPhone").value,
    email: document.getElementById("studentEmail").value,
    classes: [
      document.getElementById("studentClassOne").value,
      document.getElementById("studentClassTwo").value,
      document.getElementById("studentClassThree").value,
      document.getElementById("studentClassFour").value,
    ],
  };

  //Makes sure user input is correct
  if (
    student.name === "" ||
    student.age === "" ||
    student.phone === "" ||
    student.email === "" ||
    student.classes[0] === "" ||
    student.classes[1] === "" ||
    student.classes[2] === "" ||
    student.classes[3] === ""
  ) {
    //Error Message
    alert(
      "ERROR. Please make sure that you filled everything out and try again."
    );
  } else if (student.age.length > 2) {
    //Error Message for AGE
    alert(
      "ERROR. Please make sure that you filled out your age correctly and try again."
    );
  } else if (student.phone.length > 16 || student.phone.length < 0) {
    //Error Message for Phone
    alert(
      "ERROR. Please make sure that your phone number is not over 16 characters long and not under 10 characters long and try again."
    );
  } else {
    alert("Student Added!");
    //pushes the student values inside of studentsArray
    studentsArray.push(student);
    //Resets form
    document.querySelector("form").reset();
    //Saves to local storage
    localStorage.setItem("Students", JSON.stringify(studentsArray));
  }
}

//Allows user to view what is in the local storage
function viewStudents(e) {
  e.preventDefault();
  //Gets local storage data
  let data = JSON.parse(localStorage.getItem("Students"));

  //Displays data it on the page
  //if data exist in loal storage, then display, if not, show message
  if (data) {
    return (document.getElementById("msg").innerHTML = `
    <tr>
        <th>Students</th>
      </tr>
      <tr>
      <td>
        <p>${JSON.stringify(data)}</p>
      </td>
      </tr>
    `);
  } else {
    document.getElementById("msg2").innerHTML =
      "No Students found! Please fill out the form and add a student.";
  }
}

//Makes sure the page is loaded before adding event listners
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addStudent);

  document.getElementById("btnView").addEventListener("click", viewStudents);
});
