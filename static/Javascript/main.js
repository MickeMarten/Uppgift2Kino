// async function fetchMovies() {
//   const response = await fetch(
//     "https://anschoolacc.github.io/Uppgift-2-En-biograf-sajt/movies.JSON"
//   ); // "/movies.JSON"
//   return await response.json();
// }

// const movies = await fetchMovies();

// if (window.location.pathname.includes("movies")) {
//   const container = document.querySelector(".allMovies");
//   renderMovies(container);
// }

// //this function renders movies to movies.html and top3 on index.html
// function renderMovies(container) {
//   if (!movies) return;
//   let render;

//   render = movies;

//   render.forEach((movie) => {
//     const movieCard = createMovie(movie);
//     container.appendChild(movieCard);
//   });
// }

// class TopThree {
//   renderTopThree() {
//     const container = document.querySelector(".viewTop3__container");
//     const sorted = movies.sort((a, b) => b.rating - a.rating).slice(0, 3);

//     if (container !== null) {
//       sorted.forEach((movie) => {
//         container.appendChild(createMovie(movie));
//       });
//     }
//   }
// }

// class CurrentMovies {
//   renderCurrentMovies() {
//     const currentMovies = document.querySelector(".viewCurrent__container");
//     /* const maxCardsToShow = 5;
//     let cardsRendered = 0; */

//     for (let i = 0; i < movies.length; i++) {
//       const movie = movies[i];

//       if (
//         movie.isNew === true &&
//         /* cardsRendered < maxCardsToShow && */
//         currentMovies !== null
//       ) {
//         const movieCard = createMovie(movie);
//         currentMovies.appendChild(movieCard);
//         //cardsRendered++;
//       }
//     }
//   }
// }

// function createMovie(movie) {
//   const movieTemplate = document.querySelector(".movieTemplate");
//   const temp = movieTemplate.content.cloneNode(true);
//   const card = temp.querySelector(".movieTemplate__card");
//   const cardCover = temp.querySelector(".movieTemplate__cover");
//   const cardImg = temp.querySelector(".movieTemplate__img");
//   const cardTitle = temp.querySelector(".movieTemplate__title");
//   const cardAge = temp.querySelector(".movieTemplate__ageLimit");
//   const cardCat = temp.querySelector(".movieTemplate__category");
//   const cardDes = temp.querySelector(".movieTemplate__description");
//   const cardBtn = temp.querySelector(".movieTemplate__button");
//   card.id = movie.id;
//   cardTitle.innerText = movie.title;
//   cardAge.innerText = movie.age_limit;
//   cardCat.innerText = movie.category;
//   cardDes.innerText = movie.description;
//   cardImg.style.backgroundImage = `url(${movie.image})`;
//   cardCover.style.backgroundImage = `url(${movie.image})`;
//   return temp;
// }

// //Rendering "coming movies".
// class RenderComingMovies {
//   renderMovies() {
//     const comingMovieSection = document.querySelector(
//       ".comingMovies__Container"
//     );

//     if (comingMovieSection !== null) {
//       movies.forEach((moviez) => {
//         if (moviez.isReleased === false) {
//           comingMovieSection.appendChild(createMovie(moviez));
//         }
//       });
//     }
//   }
// }
// //Calling new instance of class.
// const renderer = new RenderComingMovies();
// renderer.renderMovies();
// //render current movies
// const current = new CurrentMovies();
// current.renderCurrentMovies();

// const topThree = new TopThree();
// topThree.renderTopThree();

// //modal

// const btnsOpenModal = document.querySelectorAll(".movieTemplate__button");
// const btnCloseModal = document.querySelector(".modal__close-modal");
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const cancelBtn = document.querySelector(".modal__btns__cancel");
// const btnBook = document.querySelector(".modal__btns__book");

// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
//   console.log(btnsOpenModal);
// };

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
//   document.querySelector(".modal__offLine").style.color = "#464646";
// };

// if (btnCloseModal !== null) {
//   btnCloseModal.addEventListener("click", closeModal);
//   overlay.addEventListener("click", closeModal);
// }
// const offlineMessage = function () {
//   console.log("Offline message function is running");
//   document.querySelector(".modal__offLine").style.color = "#800020";
// };

// if (btnBook !== null) {
//   btnBook.addEventListener("click", offlineMessage);
// }
// if (cancelBtn !== null) {
//   cancelBtn.addEventListener("click", closeModal);
// }
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

// class Carousel {
//   carouselFunction() {
//     const prevBtn = document.querySelector(".viewCurrent__carouselPrev");
//     const nextBtn = document.querySelector(".viewCurrent__carouselNext");
//     const container = document.querySelector(".viewCurrent__container");

//     const itemWidth = 250;
//     const padding = 16;

//     if (prevBtn !== null) {
//       prevBtn.addEventListener("click", () => {
//         container.scrollLeft -= itemWidth + padding;
//       });
//     }

//     if (nextBtn !== null) {
//       nextBtn.addEventListener("click", () => {
//         container.scrollLeft += itemWidth + padding;
//       });
//     }
//   }
// }

// const carousel = new Carousel();
// carousel.carouselFunction();

// //search input for header
// const inputSearch = document.querySelector(".Header__nav__ul__li__search-input");
// const iconSearch = document.querySelector(".Header__nav__ul__li__search-icon");

// iconSearch.addEventListener("click", () => {
//   inputSearch.classList.remove("Header__nav__ul__li__search-input")
//   inputSearch.classList.toggle("Header__nav__ul__li__search-input--open")
//   iconSearch.classList.toggle("Header__nav__ul__li__search-icon--hidden")
// });