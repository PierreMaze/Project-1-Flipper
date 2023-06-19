const userDatabase2 = [
  {
    userid: 1,
    username: "Rodriguez",
    firstname: "Theo",
    hachtag: "theo_rodriguez",
    picture: "../src/img/assets/profilpic.jpg",
    followers: 70,
    city: "Villenave d'Ornon",
  },
  {
    userid: 2,
    username: "Delion",
    firstname: "Jayson",
    hachtag: "jayson_delion",
    picture: "../src/img/assets/profilpic.jpg",
    followers: 520,
    city: "Bordeaux",
  },
  {
    userid: 3,
    username: "Mazelaygue",
    firstname: "Pierre",
    hachtag: "pierre_mazelaygue",
    picture: "../src/img/assets/profilpic.jpg",
    followers: 257,
    city: "Bordeaux",
  },
  {
    userid: 4,
    username: "Reillat",
    firstname: "Anthony",
    hachtag: "anthony_reillat",
    picture: "../src/img/assets/profilpic.jpg",
    followers: 652,
    city: "Bordeaux",
  },
  {
    userid: 5,
    username: "Bourrier",
    firstname: "Gaitan",
    hachtag: "gaetan_bourrier",
    picture: "../src/img/assets/profilpic.jpg",
    followers: 456,
    city: "Bordeaux",
  },
];

/* Side bar */
const searchBar = document.querySelector("#side_btn_search");
const searchContent = document.querySelector(".search-box");

searchBar.addEventListener("focus", () => {
  searchContent.classList.remove("is-colapsed");
});

searchBar.addEventListener("focusout", () => {
  searchContent.classList.add("is-colapsed");
});

const searchUserList = document.querySelector(".search-users-list");
/* Loop to add user in the search box */
for (let i = 0; i < userDatabase2.length; i += 1) {
  const li = document.createElement("li");
  li.classList.add("user-box");
  const a = document.createElement("a");
  a.href = `../pages/user_${userDatabase2[i].userid}.html`;
  const img = document.createElement("img");
  img.classList.add("profil-picture");
  img.src = `${userDatabase2[i].picture}`;
  img.alt = "Picture profile";
  a.appendChild(img);
  a.innerHTML += `${userDatabase2[i].firstname} ${userDatabase2[i].username}`;
  li.appendChild(a);
  searchUserList.appendChild(li);
}

const commentsCollapse = document.querySelectorAll(".comments_collapse");

for (let i = 0; i < commentsCollapse.length; i += 1) {
  commentsCollapse[i].addEventListener("click", () => {});
}

// Tutoriel : https://www.w3schools.com/howto/howto_js_filter_lists.asp
function searchFunction() {
  // Declare variables

  const input = document.querySelector("#side_btn_search");
  const filter = input.value.toUpperCase();
  const searchItemList = searchUserList.querySelectorAll("li");

  // Loop through all list items, and hide those who don't match the search query
  for (let i = 0; i < searchItemList.length; i += 1) {
    const a = searchItemList[i].querySelectorAll("a")[0];
    const txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      searchItemList[i].style.display = "";
    } else {
      searchItemList[i].style.display = "none";
    }
  }
}
