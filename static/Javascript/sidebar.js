init();

async function init() {
    const openSidebar = document.querySelector(".sidebar__toggle-menu");
    const sidebar = document.querySelector(".sidebar__container");
    const sidebarList = document.querySelector(".sidebar__list");
    const searchIcon = document.querySelector(".sidebar__search-icon");
    const searchInput = document.querySelector(".sidebar__search-input");
    let activeCategory

    await fetch("https://anschoolacc.github.io/Uppgift-2-En-biograf-sajt/movies.JSON")
        .then((res) => res.json())
        .then((data) => {
            const categories = ["All", ...new Set(data.map((movie) => movie.category))];
            categories.forEach((category) => {
                const li = document.createElement("li");
                li.classList.add("sidebar__list-item");
                li.textContent = capitalize(category);
                if (category === "All") {
                    li.classList.add("sidebar__list-item--active");
                    activeCategory = li;
                }
                sidebarList.appendChild(li);
            });
        })
        .catch((err) => console.log(err));

    sidebar.addEventListener("click", (e) => {
        if (e.target === openSidebar) {
            sidebar.classList.toggle("sidebar__container--open");
            openSidebar.classList.toggle("fa-caret-left");
            searchIcon.classList.remove("sidebar__search-icon--hidden");
            searchInput.classList.remove("sidebar__search-input--open");
        } else if (e.target === searchIcon) {
            searchIcon.classList.toggle("sidebar__search-icon--hidden");
            searchInput.classList.toggle("sidebar__search-input--open");
            searchInput.focus();
        } else if (e.target.classList.contains("sidebar__list-item")) {
            activeCategory.classList.remove('sidebar__list-item--active');
            e.target.classList.add("sidebar__list-item--active");
            activeCategory = e.target;
            filterMovies(activeCategory.textContent, searchInput.value);
        }
    });

    searchInput.addEventListener("input", (e) => {
        filterMovies(activeCategory.textContent, e.target.value);
    });
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function filterMovies(activeCategory, searchStr) {
    const movies = [...document.querySelectorAll(".movieTemplate__card")];
    const showAll = activeCategory === "All";
    for(const movie of movies) {
        const title = movie.querySelector(".movieTemplate__title").textContent.toLowerCase();
        const category = movie.querySelector(".movieTemplate__category").textContent;
        if(searchStr && searchStr.length > 2 && !title.includes(searchStr.toLowerCase())) {
            movie.classList.add("movie--hidden");
            continue;
        }
        if((activeCategory && category === activeCategory) || showAll) {
            movie.classList.remove("movie--hidden");
        } else {
            movie.classList.add("movie--hidden");
        }
    }
}