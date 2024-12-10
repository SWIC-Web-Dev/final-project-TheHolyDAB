const Header = () => {
  const header = document.createElement("h1");
  header.className = "text-3xl font-bold mb-2";
  header.innerText = "Student List for CIS 177";

  const subHeader = document.createElement("p");
  subHeader.className = "text-lg mb-5";
  subHeader.innerText =
    "Add student names to keep track of what students are joining the class.";

  const headerContainer = document.getElementById("header");
  if (headerContainer) {
    headerContainer.appendChild(header);
    headerContainer.appendChild(subHeader);
  } else {
    console.error("Element with ID 'header' not found.");
  }
};

export default Header;
