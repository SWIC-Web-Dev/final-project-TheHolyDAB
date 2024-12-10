import stateManager from "../stateManager.js";

const StudentList = () => {
  const studentListContainer = document.createElement("div");
  studentListContainer.className = "student-list-container mb-5";

  const studentListTitle = document.createElement("h2");
  studentListTitle.className = "text-2xl font-bold mb-3";
  studentListTitle.innerText = "Current Students";

  const studentListDiv = document.createElement("div");
  studentListDiv.className = "student-list";

  const render = () => {
    const { students } = stateManager.getState();
    studentListDiv.innerHTML = "";
    students.forEach((student, index) => {
      const studentItem = document.createElement("div");
      studentItem.className =
        "flex justify-between items-center mb-2 p-2 bg-gray-800 rounded student-item";
      studentItem.innerText = student;

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.className =
        "bg-red-500 text-white p-1 rounded hover:bg-red-600 transition";
      deleteButton.addEventListener("click", () => {
        if (window.confirm(`Are you sure you want to delete ${student}?`)) {
          const updatedStudents = students.filter((_, i) => i !== index);
          stateManager.setState({ students: updatedStudents });
        }
      });

      studentItem.appendChild(deleteButton);
      studentListDiv.appendChild(studentItem);
    });
  };

  stateManager.subscribe(render);
  render();

  studentListContainer.appendChild(studentListTitle);
  studentListContainer.appendChild(studentListDiv);

  const container = document.getElementById("student-list");
  if (container) {
    container.appendChild(studentListContainer);
  } else {
    console.error("Element with ID 'student-list' not found.");
  }
};

export default StudentList;
