const blogTitle = document.getElementById("blog-title");
const blogContainer = document.getElementById("blog-container");

blogTitle.addEventListener("mouseover", () => {
  blogContainer.classList.add("scale-105");
});

blogTitle.addEventListener("mouseout", () => {
  blogContainer.classList.remove("scale-105");
});
