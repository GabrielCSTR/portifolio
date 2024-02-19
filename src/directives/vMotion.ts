// Adjust these as per your requirement
const defaultFromValue = "right"; // or 'left';
const defaultSpeedValue = 0.5;
const defaultThresholdValue = 0.5;

// Handle the intersection event
function handleIntersection(el: any, observer: any, from: any) {
  const { isIntersecting } = observer;
  function slideInElementFromRight() {
    if (isIntersecting) {
      el.style.opacity = 1;
      el.style.transform = "translateX(0px)";
    } else {
      el.style.opacity = 0;
      el.style.transform = "translateX(30px)";
    }
  }

  function slideInElementFromLeft() {
    if (isIntersecting) {
      el.style.opacity = 1;
      el.style.transform = "translateX(0px)";
    } else {
      el.style.opacity = 0;
      el.style.transform = "translateX(-100px)";
    }
  }

  if (from === "right") {
    slideInElementFromRight();
  }

  if (from === "left") {
    slideInElementFromLeft();
  }
}

const vMotion = {
  mounted: (el: any, binding: any) => {
    el.style.transition = `all ${binding.value?.speed || defaultSpeedValue}s`;

    // Create a new IntersectionObserver for the element
    const observer = new IntersectionObserver(
      // Callback function to handle intersection event
      (entries) =>
        handleIntersection(
          el,
          entries[0],
          binding.value?.from || defaultFromValue
        ),

      // Options for the Observer
      {
        threshold: binding.value?.threshold || defaultThresholdValue
      }
    );

    observer.observe(el);
  }
};

export default vMotion;
