import stateManager from "../stateManager.js";
import majors from "./majors.js";

const AddStudent = () => {
  const addStudentDiv = document.createElement("div");
  addStudentDiv.className = "mb-5";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Enter student name";
  nameInput.className = "text-black p-2 rounded border border-gray-300 mr-2";

  const ageInput = document.createElement("input");
  ageInput.type = "number";
  ageInput.placeholder = "Enter age";
  ageInput.className = "text-black p-2 rounded border border-gray-300 mr-2";

  const majorSelect = document.createElement("select");
  majorSelect.className = "text-black p-2 rounded border border-gray-300 mr-2";

  majors.forEach((major) => {
    const option = document.createElement("option");
    option.value = major.name;
    option.innerText = major.name;
    majorSelect.appendChild(option);
  });

  const addButton = document.createElement("button");
  addButton.innerText = "Add Student";
  addButton.className =
    "bg-green-500 text-white p-2 rounded hover:bg-green-600 transition";

  addButton.addEventListener("click", () => {
    const studentName = nameInput.value.trim();
    const studentAge = ageInput.value.trim();
    const studentMajor = majorSelect.value;

    const newStudent = `${studentName} (Age: ${studentAge}, Major: ${studentMajor})`;
    const { students } = stateManager.getState();
    stateManager.setState({
      students: [...students, newStudent],
    });

    nameInput.value = "";
    ageInput.value = "";
    majorSelect.selectedIndex = 0;
  });

  addStudentDiv.appendChild(nameInput);
  addStudentDiv.appendChild(ageInput);
  addStudentDiv.appendChild(majorSelect);
  addStudentDiv.appendChild(addButton);

  const container = document.getElementById("add-student");
  if (container) {
    container.appendChild(addStudentDiv);
  } else {
    console.error("Element with ID 'add-student' not found.");
  }
};

export default AddStudent;
