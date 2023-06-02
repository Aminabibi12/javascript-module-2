/*
Task 1
=======
Write JavaScript below that logs:
   
1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6 */
  const all_p = Array.from(document.querySelectorAll("p"));
  console.log(all_p);
  
    
  /* 2. the first div element node
    --> should log the ".site-header" node */
   const first_div = document.querySelector("div.site-header"); 
   console.log(first_div);

    
   /*3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node */
   const new_element = document.getElementById("jumbotron-text");
   console.log(new_element);

   
   /* 4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3
   */
   /* const p_primary = Array.from(document.querySelectorAll(".primary_content p"));
    
    console.log(p_primary);*/
    
    document.addEventListener("DOMContentLoaded", function() {
        const primaryContent = document.querySelector(".primary-content");
      
        if (primaryContent) {
          const p_primary = Array.from(primaryContent.querySelectorAll("p"));
      
          console.log(p_primary);
        } else {
          console.log("No .primary-content element found.");
        }
      });
       
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alert_Button = document.getElementById("alertBtn");

alert_Button.addEventListener("click", function() {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const change_color = document.getElementById("bgrChangeBtn");

change_color.addEventListener("click",function () {
    document.body.style.backgroundColor = "gray";
});

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const add_text = document.getElementById("addTextBtn");
add_text.addEventListener('click', function() {
    const new_p = document.createElement("p");
    new_p.textContent = "LEARN MORE";
    console.log(new_p);
});

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const larger_links = document.getElementById("largerLinksBtn");
larger_links.addEventListener("click", function () {
    const links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        links[i].style.fontSize = '20px'; // Increase the font size to your desired value
      }
});

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

const add_anothertext = document.getElementById("addTextBtn");
add_anothertext.addEventListener('click', function() {
    const new_p = document.createElement("p");
    new_p.textContent = "LEARN MORE";
    document.body.appendChild(new_p);
    console.log(new_p);
});

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const change_thecolor = document.getElementById("bgrChangeBtn");
const colors = ["gray", "pink", "brown", "yellow", "orange"];
let currentIndex = 0;

change_thecolor.addEventListener("click",function () {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
});
