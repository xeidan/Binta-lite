let slides = document.querySelectorAll(".slide-ana>div");
  let slideSayisi = slides.length;
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");
  for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX(" + 100 * index + "%)";
  }
  let loop = 0 + 1000 * slideSayisi;
  
  function goNext() {
    loop++;
    for (let index = 0; index < slides.length; index++) {
      const element = slides[index];
      element.style.transform =
        "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
    }
  }
  
  function goPrev() {
    loop--;
    for (let index = 0; index < slides.length; index++) {
      const element = slides[index];
      element.style.transform =
        "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
    }
  }
  
  function openView() {
    document.getElementById("viewerButton").classList.add("hidden");
    document.getElementById("viewerBox").classList.remove("hidden");
  }
  function closeView() {
    document.getElementById("viewerBox").classList.add("hidden");
    document.getElementById("viewerButton").classList.remove("hidden");
  }

  // Navbar
  window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  }

  )

  // Hamburger menu
  const btn = document.getElementById('menu-btn')
  const menu = document.getElementById('menu')
 
  btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}


// window.addEventListener('scroll', function() {
//   const navbar = document.getElementById('nav');
//   if (window.scrollY > 0) {
//     navbar.classList.add('bg-white');
//   } else {
//     navbar.classList.remove('bg-white');
//   }
// });



// TESTIMONIALS
// Get all the div elements with class "box"
const boxes = document.querySelectorAll('.box');

let currentIndex = 0;

// Function to show the next div and hide the previous one
function showNextDiv() {
  // Hide the previous div
  if (currentIndex > 0) {
    boxes[currentIndex - 1].style.display = 'none';
  }

  // Show the current div
  if (currentIndex < boxes.length) {
    boxes[currentIndex].style.display = 'block';
    currentIndex++;
  } else {
    // Reset the index to show the first div again
    currentIndex = 0;
    boxes[currentIndex].style.display = 'block';
  }
}

// Initially show the first div
showNextDiv();

// Set interval to show next div every 5 seconds
setInterval(showNextDiv, 3000);


// ANIMATION
// Get the animated div
const animatedDiv = document.getElementById('animatedDiv');

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  if (isInViewport(animatedDiv)) {
    animatedDiv.classList.add('visible');
  } else {
    animatedDiv.classList.remove('visible');
  }
}

// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Trigger scroll event on page load to check initial visibility
window.dispatchEvent(new Event('scroll'));

