/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

let ul=document.getElementById('navbar__list');
const allSections=Array.from(document.querySelectorAll('section'));
// console.log(navbar)
// console.log(allSections)
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// create function biuld my li
function CreateLi(){
    for (let i = 0; i < allSections.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = "<a class = 'menu__link' href = ''>" + allSections[i].getAttribute("data-nav") + "</a>";
        ul.appendChild(li);
    
    };
    
  
}
CreateLi();


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport
window.onscroll=function(){
    document.querySelectorAll('section').forEach(function(active){
      if( active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){
          active.classList.add('your-active-class');
      }else{
        active.classList.remove('your-active-class');
      }
    })
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
const links = document.querySelectorAll(".menu__link");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (event) => {
        event.preventDefault();
        // because section greater than index 
        let index = i + 1;
        let scrolled_section = document.getElementById("section" + index);
        scrolled_section.scrollIntoView({behavior: "smooth", block: "center"});
     

    });
};

// Build menu 

// Scroll to section on link click

// Set sections as active

