document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const sidebar = document.querySelector(".mob-nav");
  const testimonials = document.querySelectorAll(".testimonial");
  const readMore = document.querySelector(".read-more");

  if (menuIcon && closeIcon && sidebar) {
    menuIcon.addEventListener("click", () => sidebar.classList.toggle("show"));
    closeIcon.addEventListener("click", () => sidebar.classList.toggle("show"));
  }

  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle("active", i === index);
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  setInterval(nextTestimonial, 5000);

  document.querySelectorAll(".faq-question").forEach((q) =>
    q.addEventListener("click", () => {
      q.parentElement.classList.toggle("active");
    })
  );

  if (readMore) {
    readMore.setAttribute("href", "https://www.google.com/");
  }
});

// function togglemobNav() {
//   const sidebar = document.querySelector(".mob-nav");
//   sidebar.classList.toggle("show");
// }
// document.querySelector(".menu-icon").addEventListener("click", togglemobNav);
// document.querySelector(".close-icon").addEventListener("click", togglemobNav);

// let currentIndex = 0;
// const testimonials = document.querySelectorAll(".testimonial");

// function showTestimonial(index) {
//   testimonials.forEach((testimonial, i) => {
//     testimonial.classList.toggle("active", i === index);
//   });
// }

// document.querySelectorAll(".faq-question").forEach((question) => {
//   question.addEventListener("click", () => {
//     const faqItem = question.parentElement;
//     faqItem.classList.toggle("active");
//   });
// });

// function prevTestimonial() {
//   currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
//   showTestimonial(currentIndex);
// }

// function nextTestimonial() {
//   currentIndex = (currentIndex + 1) % testimonials.length;
//   showTestimonial(currentIndex);
// }

// function autoRotateTestimonials() {
//   nextTestimonial();
// }

// setInterval(autoRotateTestimonials, 5000); // Change testimonial every 5 seconds

// document
//   .querySelector(".read-more")
//   .setAttribute("href", "https://www.google.com/");
