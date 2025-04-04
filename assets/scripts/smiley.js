const sendReaction = (target) => {
  switch (target) {
    case document.querySelector(".smiley-like"):
      alert("Вам понравилась эта статья!");
      break;
    case document.querySelector(".smiley-heart"):
      alert("Вам очень понравилась эта статья!");
      break;
    case document.querySelector(".smiley-face-with-hearts"):
      alert("Вы в восторге от этой статьи!");
      break;
    case document.querySelector(".smiley-face-with-tears"):
      alert("Эта статья заставила вас смеяться!");
      break;
    case document.querySelector(".smiley-astonished-face"):
      alert("Вы были поражены этой статьей!");
      break;
    case document.querySelector(".smiley-sad-face"):
      alert("Эта статья вас огорчила!");
      break;
    case document.querySelector(".smiley-pounting-face"):
      alert("Эта статья вас разозлила!");
      break;
    default:
      break;
  }
};

document.querySelector(".smiley-list").addEventListener("click", (event) => {
  sendReaction(event.target);
});
