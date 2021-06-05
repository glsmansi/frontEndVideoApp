const like = document.getElementById("like");
const dislike = document.getElementById("dislike");
const likeIcon = document.querySelector(".like");
const dislikeIcon = document.querySelector(".dislike");
const likeButton = document.querySelector(".likeBtn");
const dislikeButton = document.querySelector(".dislikeBtn");
const comment = document.querySelector(".comment");
const commentSection = document.querySelector(".comment-section");
const textarea = document.querySelector(".comment-section .textarea");
const sendComment = document.querySelector(".comment-section .send-comment");
const ul = document.querySelector(".ul");
const userCommentsClass = document.querySelector(".user-comments");

likeButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (dislikeIcon.classList.contains("active")) {
    // dislike.innerText = "";
    dislikeIcon.classList.remove("active");
    likeIcon.classList.toggle("active");
  } else {
    likeIcon.classList.toggle("active");
  }
});

dislikeButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(like.innerText);

  if (likeIcon.classList.contains("active")) {
    const likeActive = document.querySelector(".like.active");
    like.innerText = "";
    likeIcon.classList.remove("active");
    dislikeIcon.classList.toggle("active");
  } else {
    dislikeIcon.classList.toggle("active");
  }
});

comment.addEventListener("click", () => {
  commentSection.classList.toggle("active");
  textarea.focus();
  sendComment.addEventListener("click", () => {
    var userComment = textarea.value;
    console.log(userComment);
    if (userComment != "") {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(userComment));

      ul.appendChild(li);
      userCommentsClass.classList.add("active");
      textarea.value = "";
    }
    // if (!commentSection.classList.contains("active")) {
    //   userCommentsClass.classList.remove("active");
    // }
  });
});
