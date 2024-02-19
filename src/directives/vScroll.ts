const vScroll = {
  mounted: (el: any) => {
    el.style.cursor = "pointer";
    el.addEventListener("click", () => {
      const coord = el.getBoundingClientRect().top + window.scrollY; //(1)
      window.scroll({ top: coord, behavior: "smooth" }); //(2)
    });
  }
};

export default vScroll;
