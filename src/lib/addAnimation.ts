// // Scroll controller
// function handleScroll() {
//   const scrollPosition = window.scrollY;
//   const elementsToAnimate = document.querySelectorAll('.element-to-animate');

// // Add the animation class if they are in the viewport
//   elementsToAnimate.forEach((element) => {
//     const elementPosition = element.getBoundingClientRect();

//     if (elementPosition.top < window.innerHeight) {
//       element.classList.add('animate-fade-in-up');
//     }
//   });
// }

// // Add Listener for scroll event
// window.addEventListener('scroll', handleScroll);


export function addAnimation(className: string, animationClass: string) {
  function handleScroll() {
    const scrollPosition = window.scrollY;
    const elementsToAnimate = document.querySelectorAll('.' + className);

    elementsToAnimate.forEach((element) => {
      const elementPosition = element.getBoundingClientRect();

      if (elementPosition.top < window.innerHeight) {
        element.classList.add(animationClass);
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
}

