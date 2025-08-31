const container = document.querySelector(".container");
const btn = document.querySelector(".read-more");

document.querySelectorAll(".post").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const postContent = document.createElement("div");
    postContent.classList.add("post-content");
    postContent.innerText = "whjdsahfh";

    container.appendChild(postContent);
  });
});
