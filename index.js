// Scroll-Effect
window.addEventListener("scroll", ()=>{
    const elements=document.querySelectorAll(".scroll-effect");
    const btn=document.querySelectorAll(".scroll-button");
    const person_name=document.querySelectorAll(".Hero-Sec-Name");
    const images=document.querySelectorAll(".scroll-img");
    const pageHeading=document.querySelectorAll(".scroll-heading");

    // scroll-effect-para
    elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight - 100) {
      el.classList.add("active");
    }
  });
  // scroll-effect-buttons
   btn.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight - 100) {
      el.classList.add("active");
    }
  });
  // scroll-effect-Person_Name
  person_name.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight - 100) {
      el.classList.add("active");
    }
  });
  // scroll-effect-Images
   images.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight - 100) {
      el.classList.add("active");
    }
  });
   // scroll-effect-Page-Heading
  pageHeading.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight - 100) {
      el.classList.add("active");
    }
  });
});