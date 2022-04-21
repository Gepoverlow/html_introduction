let containers = document.querySelectorAll(".container");

const isHover = (e) => e.parentElement.querySelector(":hover") === e;

function getChildElements(parentId) {
  let children = Array.from(document.querySelector(`${parentId}`).children);
  return children;
}

containers.forEach((container) =>
  container.addEventListener("mouseover", function checkHovered() {
    const hovered = isHover(container);
    const childs = getChildElements(`.${container.classList[0]}`);

    childs.forEach((child) =>
      hovered ? child.classList.remove("hidden") : child.classList.add("hidden")
    );
  })
);

containers.forEach((container) =>
  container.addEventListener("mouseout", function checkHovered() {
    const hovered = isHover(container);
    const childs = getChildElements(`.${container.classList[0]}`);

    childs.forEach((child) =>
      hovered ? child.classList.remove("hidden") : child.classList.add("hidden")
    );
  })
);
