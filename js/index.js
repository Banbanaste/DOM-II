// Your code goes here

// mouseover & mouseout events
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("mouseover", e => {
    link.style.color = "red";
  });
  link.addEventListener("mouseout", e => {
    link.style.color = "inherit";
  });
});

// keydown event
document.addEventListener("keydown", e => {
  e.preventDefault();
  if (e.code === "ArrowDown") {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth"
    });
  } else if (e.code === "ArrowUp") {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
});

// wheel event
let scale = 1;
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("wheel", e => {
    e.preventDefault();

    scale += e.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(0.125, scale), 4);

    // Apply scale transform
    img.style.transform = `scale(${scale})`;
  });
});

// load event
document.body.style.opacity = 0;
window.addEventListener("load", e => {
  document.body.style.transition = "2s opacity ease-in-out";
  document.body.style.opacity = 1;
});

// resize & focus & blur events
window.addEventListener("resize", e => {
  let newInput = document.createElement("input");
  newInput.style.height = "50px";
  newInput.style.width = "10%";
  newInput.addEventListener("focus", e => {
    e.target.style.background = "rebeccapurple";
  });
  newInput.addEventListener("blur", e => {
    e.target.style.background = "forestgreen";
  });
  document.querySelector("header").append(newInput);
});

// select event
document.querySelector(".text-content").addEventListener("select", e => {
  e.preventDefault();
  e.target.style.color = "pink";
});
