/* Const */
// humberger
const humbergerMenu = document.querySelector("#humbergermenu");
// Menu
const overlayMenu = document.querySelector("#overlay");
// flipper menu mobile menu
const flipperMenuMobile = document.querySelector("#flippermenumobile");
const flipperOverlay = document.querySelector("#flipper_overlay");
// const addimgoverlay = document.querySelector("#addimgoverlay");
const flipperoverlaysend = document.querySelector("#flipperoverlaysend");
const textareaoverlay = document.querySelector("#textareaoverlay");
// flipper menu desktop
const flipperMenuDesktop = document.querySelector("#flippermenudesktop");
const flipperModal = document.querySelector(".modal");
const closeFlipperModal = document.querySelector("#close_modal");
// const addimgmodal = document.querySelector("#addimgmodal");
const flippermodalsend = document.querySelector("#flippermodalsend");
const textareamodal = document.querySelector("#textareamodal");

// main-wrapper
const mainWrapperFlipper = document.querySelector(".main-wrapper");

// footer
const footer = document.querySelector("footer");
// body
const body = document.querySelector("body");

/* Listener */
/* Humberger */
humbergerMenu.addEventListener("click", () => {
  if (flipperOverlay.classList.contains("is-active")) {
    flipperOverlay.classList.remove("is-active");
    footer.style.display = "flex";
    humbergerMenu.classList.remove("hamburger--arrowalt");
    humbergerMenu.classList.add("hamburger--collapse");
    humbergerMenu.classList.remove("is-active");
    body.style.overflowY = "initial";
  } else if (humbergerMenu.classList.contains("is-active")) {
    body.style.overflowY = "initial";
    overlayMenu.classList.remove("is-active");
    humbergerMenu.classList.remove("is-active");
    footer.style.display = "flex";
  } else {
    overlayMenu.classList.add("is-active");
    humbergerMenu.classList.add("is-active");
    footer.style.display = "none";
    body.style.overflowY = "hidden";
  }
});

/* Overlay Mobile */
/* open */
flipperMenuMobile.addEventListener("click", () => {
  flipperOverlay.classList.add("is-active");
  footer.style.display = "none";
  humbergerMenu.classList.remove("hamburger--collapse");
  humbergerMenu.classList.add("hamburger--arrowalt");
  humbergerMenu.classList.add("is-active");
  body.style.overflowY = "hidden";
});

/* Modal Desktop */

/* Open */
flipperMenuDesktop.addEventListener("click", () => {
  flipperModal.classList.add("is-active");
  body.style.overflowY = "hidden";
});

/* Close */
closeFlipperModal.addEventListener("click", () => {
  flipperModal.classList.remove("is-active");
  body.style.overflowY = "initial";
});

/* Functions */

// Creer la div
const addFlipper = (content, imgurl) => {
  /* Create card element */
  const cardCreate = document.createElement("div");

  cardCreate.classList.add("card");

  /* Card Front */
  const cardFront = document.createElement("div");

  cardFront.classList.add("card__front");

  /* Card Header */
  const cardheader = document.createElement("div");

  cardheader.classList.add("card__header");

  const imgCardUserImage = document.createElement("div");
  imgCardUserImage.classList.add("card__user_image");
  imgCardUserImage.innerHTML = `<a href="../index.html" target="_blank" rel="noopener"><img src="../src/img/assets/profilpic.jpg" alt="Picture profil"></a>`;

  cardheader.appendChild(imgCardUserImage);

  const cardUser = document.createElement("div");
  cardUser.classList.add("card__user");

  const cardUserName = document.createElement("h2");
  cardUserName.classList.add("card__user_name");
  cardUserName.textContent = `John Doe`;

  const cardUserHash = document.createElement("h3");
  cardUserHash.classList.add("card__user_hash");
  cardUserHash.textContent = `@ john_doe`;

  cardUser.appendChild(cardUserName);
  cardUser.appendChild(cardUserHash);

  cardheader.appendChild(cardUser);

  cardFront.appendChild(cardheader);

  /* Card Content */
  const cardContent = document.createElement("div");
  cardContent.classList.add("card__content");

  const cardContentText = document.createElement("div");
  cardContentText.classList.add("card__content_text");
  cardContentText.textContent = `${content}`;

  cardContent.appendChild(cardContentText);

  if (imgurl !== "") {
    const cardContentImage = document.createElement("div");
    cardContentImage.classList.add("card__content_image");

    const imgCardContentImage = document.createElement("img");
    imgCardContentImage.src = `${imgurl}`;
    imgCardContentImage.alt = "Profil picture";

    cardContentImage.appendChild(imgCardContentImage);
    cardContent.appendChild(cardContentImage);
  }

  const myDate = new Date();
  const dateString = myDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const myTime = myDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const cardContentTime = document.createElement("div");
  cardContentTime.classList.add("card__date_time");
  cardContentTime.textContent = `${myTime} - ${dateString}`;

  cardContent.appendChild(cardContentTime);

  cardFront.appendChild(cardContent);

  /* Div Bar */
  const cardBar = document.createElement("div");
  cardBar.classList.add("card__bar");

  cardFront.appendChild(cardBar);

  /* Card actions */
  const cardActionConteneur = document.createElement("div");
  cardActionConteneur.classList.add("card__actions");

  /* Likes */
  const cardActionLikes = document.createElement("div");
  cardActionLikes.classList.add("actions__likes");

  cardActionLikes.innerHTML =
    '<i class="fa-regular fa-heart fa-lg" id="newlike"></i>';

  const numberLikes = document.createElement("p");
  numberLikes.classList.add("number_likes");
  numberLikes.innerText = "0";

  cardActionLikes.appendChild(numberLikes);

  /* Downvotes */
  const cardActionDownvotes = document.createElement("div");
  cardActionDownvotes.classList.add("actions__downvotes");
  cardActionDownvotes.innerHTML =
    '<i class="fa-regular fa-thumbs-down fa-lg" id="newdownvote"></i>';

  const numberDownvotes = document.createElement("p");
  numberDownvotes.classList.add("number_downvotes");
  numberDownvotes.innerText = "0";

  cardActionDownvotes.appendChild(numberDownvotes);

  /* Messages */

  const cardActionsMessages = document.createElement("div");
  cardActionsMessages.classList.add("actions__messages");
  cardActionsMessages.innerHTML =
    '<i class="fa-regular fa-message fa-lg" id="newmessage"></i>';

  const numberMessages = document.createElement("p");
  numberMessages.classList.add("number_messages");
  numberMessages.innerText = "0";

  cardActionsMessages.appendChild(numberMessages);

  /* Reply */
  const cardActionReply = document.createElement("div");
  cardActionReply.classList.add("actions__reply");
  cardActionReply.innerHTML =
    '<img src="../src/img/ico/download.svg" alt="Dolphine Icon" srcset="" class="fa-dolphine">';

  const numberReply = document.createElement("p");
  numberReply.classList.add("actions__reply");
  numberReply.innerText = "0";

  cardActionReply.appendChild(numberReply);

  /* Add section message */

  const cardComments = document.createElement("div");
  cardComments.classList.add("card__comments");
  cardComments.classList.add("is-colapsed");

  const moreComments = document.createElement("button");
  moreComments.classList.add("comments_collapse");
  moreComments.innerText = "See more comments...";
  cardComments.appendChild(moreComments);

  const commentsList = document.createElement("div");
  commentsList.classList.add("comments_list");
  const commentsDiv = document.createElement("div");
  commentsDiv.classList.add("comments");

  numberMessages.textContent = "0";
  moreComments.classList.add("is-colapsed");

  commentsList.appendChild(commentsDiv);
  cardComments.appendChild(commentsList);

  const inputComment = document.createElement("div");
  inputComment.classList.add("input_comment");

  const imgPictureUser = document.createElement("img");
  imgPictureUser.classList.add("profil-picture");
  imgPictureUser.src = `../src/img/assets/profilpic.jpg`;
  imgPictureUser.alt = "Picture Profil";
  inputComment.appendChild(imgPictureUser);

  const textAreaComment = document.createElement("textarea");
  textAreaComment.classList.add("textarea_comment");
  inputComment.appendChild(textAreaComment);

  const btnSend = document.createElement("button");
  btnSend.classList.add("btn");
  btnSend.classList.add("btn-rounded");
  btnSend.classList.add("btn-primary");
  btnSend.classList.add("btn-msg-send");
  btnSend.innerHTML = '<i class="fa-regular fa-paper-plane"></i>';

  inputComment.appendChild(btnSend);
  cardComments.appendChild(inputComment);

  /* Appendchild to Action conteneur */
  cardActionConteneur.appendChild(cardActionLikes);
  cardActionConteneur.appendChild(cardActionDownvotes);
  cardActionConteneur.appendChild(cardActionsMessages);
  cardActionConteneur.appendChild(cardActionReply);

  cardFront.appendChild(cardActionConteneur);
  cardFront.appendChild(cardComments);

  cardCreate.appendChild(cardFront);

  mainWrapperFlipper.prepend(cardCreate);

  const newlike = document.querySelector("#newlike");
  newlike.addEventListener("click", () => {
    // eslint-disable-next-line no-undef
    updateLikesCount(newlike);
  });

  const newdownvote = document.querySelector("#newdownvote");
  newdownvote.addEventListener("click", () => {
    // eslint-disable-next-line no-undef
    updateDownvoteCount(newdownvote);
  });
};

// main-wrapper

const sendFlipperOverlay = (content, imgurl) => {
  if (
    window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1
    ) === "feed.html"
  ) {
    addFlipper(content, imgurl);
  }
  textareaoverlay.value = "";
  flipperOverlay.classList.remove("is-active");
  footer.style.display = "flex";
  humbergerMenu.classList.remove("hamburger--arrowalt");
  humbergerMenu.classList.add("hamburger--collapse");
  humbergerMenu.classList.remove("is-active");
  body.style.overflowY = "initial";
};

const sendFlipperModal = (content, imgurl) => {
  if (
    window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1
    ) === "feed.html"
  ) {
    addFlipper(content, imgurl);
  }
  textareamodal.value = "";
  flipperModal.classList.remove("is-active");
  body.style.overflowY = "initial";
};

flippermodalsend.addEventListener("click", () => {
  if (textareamodal.value !== "") {
    sendFlipperModal(textareamodal.value, "");
  }
});

flipperoverlaysend.addEventListener("click", () => {
  if (textareaoverlay.value !== "") {
    sendFlipperOverlay(textareaoverlay.value, "");
  }
});
