let containers = document.querySelectorAll(".container");
let containerNames = [
  "Header",
  "Table",
  "Hobbies",
  "Contribution",
  "Story",
  "Links",
];

const isHover = (e) => e.parentElement.querySelector(":hover") === e;

function getChildElements(parentId) {
  let children = Array.from(document.querySelector(`${parentId}`).children);

  return children;
}

containers.forEach((container) => {
  const childs = getChildElements(`.${container.classList[0]}`);
  let hoverText = document.createElement("h1");
  hoverText.className = "hover";

  childs.forEach((child) => {
    child.classList.add("hidden");
    container.appendChild(hoverText);
  });
});

let hoverTexts = document.querySelectorAll(".hover");
for (let i = 0; i < hoverTexts.length; i++) {
  hoverTexts[i].textContent = `Hover me to see ${containerNames[i]}`;
}

containers.forEach((container) =>
  container.addEventListener("mouseover", function checkHovered() {
    const hovered = isHover(container);
    const childs = getChildElements(`.${container.classList[0]}`);

    childs.forEach((child) => {
      if (hovered) {
        child.classList.remove("hidden");
        container.querySelector(".hover").classList.add("hidden");
      } else {
        child.classList.add("hidden");
        container.querySelector(".hover").classList.remove("hidden");
      }
    });
  })
);

containers.forEach((container) =>
  container.addEventListener("mouseout", function checkHovered() {
    const hovered = isHover(container);
    const childs = getChildElements(`.${container.classList[0]}`);

    childs.forEach((child) => {
      if (hovered) {
        child.classList.remove("hidden");
        container.querySelector(".hover").classList.add("hidden");
      } else {
        child.classList.add("hidden");
        container.querySelector(".hover").classList.remove("hidden");
      }
    });
  })
);
