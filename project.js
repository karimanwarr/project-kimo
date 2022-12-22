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
const navBar = document.getElementsByClassName('navbar__menu')
const header = document.getElementsByClassName('page__header');
const navList = document.getElementById('navbar__list');
const footer = document.querySelector('footer');
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function buildNav(){
    sections.forEach(section => {
        const navButton = document.createElement('li');
        navButton.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        navList.appendChild(navButton);
        scrollBehavior(navButton, section);
    });
    navBar.appendChild(navList);
}
buildNav();

//End build the nav


// Start of Scroll to anchor ID using scrollTO event
function scrollBehavior(navButton, section){
    navButton.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
        });
    });
}
// End of Scroll to anchor ID using scrollTO event


// Start of Toggle the NavBar According to User Scroll Activity
function toggleNavBar(){
    let userScroll;
    header.style.cssText = 'opacity: 1; transition: ease 0.3s ;'
    window.clearTimeout( userScroll );
    userScroll = setTimeout(function() {
        header.style.cssText = 'opacity: 0; transition: ease 0.3s ;'
    }, 1200);
}
// End of Toggle the NavBar According to User Scroll Activity


// Start of Set the Section class 'active' when it near to the top of viewport
function activeSection (){
    const navActive = document.querySelectorAll(".menu__link")
    sections.forEach((section, i)=>{
        const sectionBond = section.getBoundingClientRect();
        if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
            section.classList.add("your-active-class");
            navActive[i].classList.add("active_button");
        } else{
            section.classList.remove("your-active-class");
            navActive[i].classList.remove("active_button");
        }
    })
}
// End of Set the Section class 'active' when it near to the top of viewport

//Start of the Scroll Event to execute the functions of activeSection and toggleNavBar 
window.addEventListener('scroll',(event)=>{
    toggleNavBar();
    activeSection();
})
//End of the Scroll Event to execute the functions of activeSection and toggleNavBar 

// Start of GO UP Button
const smooth = footer.insertAdjacentHTML("beforebegin", `<div Id="return_top" ></div>`);
document.getElementById("return_top").addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});
// End of GO UP Button
