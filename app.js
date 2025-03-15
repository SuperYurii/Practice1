let footer = document.querySelector("footer");
//let's create a heading
let heading = document.createElement("h2");
let heading_text = document.createTextNode("Contact us");
heading.appendChild(heading_text);

//now let's add the <p>
let paragraph = document.createElement("p");
let link = document.createElement("a");
link.textContent = "National Aeronautics and Space Administration (NASA)";
link.href = "https://www.nasa.gov/";
link.target = "_blank";
paragraph.appendChild(link);
footer.appendChild(heading);
footer.appendChild(paragraph);
//Button that changes the color of the background
const newButton = document.getElementById("button");
function backGroundChange() {
  // Set the background color to grey
  if (document.body.style.backgroundColor === "grey") {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "grey";
  }
}
newButton.onclick = backGroundChange;
