//When clicking **blue** it should change:

const blue = document.getElementById("blueBtn");
const jumbo = document.querySelector(".jumbotron");
const donate = document.querySelector(".buttons .btn-primary");
const volunteer = document.querySelector(".buttons .btn-secondary");
    
blue.addEventListener("click", function() {
    
    if (jumbo && donate && volunteer) {
    jumbo.style.backgroundColor = "#588fbd";
    donate.style.backgroundColor = "#ffa500";
    volunteer.style.backgroundColor = "black";
    volunteer.style.color = "white";
    }
  });
//When clicking **orange** it should change:

const orange = document.getElementById("orangeBtn");
const jumbot = document.querySelector(".jumbotron");
const donate1 = document.querySelector(".buttons .btn-primary");
const volunteer1 = document.querySelector(".buttons .btn-secondary");
    
orange.addEventListener("click", function() {
    
    if (jumbot && donate1 && volunteer1) {
    jumbot.style.backgroundColor = "#f0ad4e";
    donate1.style.backgroundColor = "#5751fd";
    volunteer1.style.backgroundColor = "#31b0d5";
    volunteer1.style.color = "white";
    }
  });
 //When clicking **green** it should change:

 const green = document.getElementById("greenBtn");
 const jumbotr = document.querySelector(".jumbotron");
 const donate2 = document.querySelector(".buttons .btn-primary");
 const volunteer2 = document.querySelector(".buttons .btn-secondary");
    
 green.addEventListener("click", function() {
    
    if (jumbotr && donate2 && volunteer2) {
    jumbotr.style.backgroundColor = "#87ca8a";
    donate2.style.backgroundColor = "black";
    volunteer2.style.backgroundColor = "#8c9c08";
    }
  });

  //##Part 2 :

  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    const emailInput = document.getElementById("exampleInputEmail1");
    const nameInput = document.getElementById("example-text-input");
    const descriptionInput = document.getElementById("exampleTextarea");
  
    // Reset background color of all fields
    emailInput.style.backgroundColor = "";
    nameInput.style.backgroundColor = "";
    descriptionInput.style.backgroundColor = "";
  
    // Validation checks
    let isValid = true;
  
    if (emailInput.value.length === 0 || !emailInput.value.includes("@")) {
      emailInput.style.backgroundColor = "red";
      isValid = false;
    }
  
    if (nameInput.value.length === 0) {
      nameInput.style.backgroundColor = "red";
      isValid = false;
    }
  
    if (descriptionInput.value.length === 0) {
      descriptionInput.style.backgroundColor = "red";
      isValid = false;
    }
  
    if (isValid) {
      // Display thank you message
      alert("Thank you for filling out the form!");
  
      // Clear input fields
      emailInput.value = "";
      nameInput.value = "";
      descriptionInput.value = "";
    }
  }); 

