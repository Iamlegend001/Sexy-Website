var cursor = document.querySelector("#cursor");
var blr = document.querySelector("#cursor-blr");
document.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  blr.style.left = dets.x-200 + "px";
  blr.style.top = dets.y-200 + "px";
});



gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "5rem",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -50%",
    end: "top -100vh",
    scrub: 3,
  },
});
