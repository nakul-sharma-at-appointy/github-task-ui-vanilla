"use strict";
const repositories = [
    {
        title: "wipeout-rewrite",
        description: "",
        language: "C",
        languageClassName: "c-lang",
        status: "Public",
        lastModified: "Updated 15 hours ago",
        stars: 2171,
        forks: 184,
    },
    {
        title: "Impact",
        description: "HTML5 Game Engine",
        language: "JavaScript",
        languageClassName: "js-lang",
        status: "Public",
        lastModified: "Updated on Jul 25",
        stars: 1900,
        forks: 203,
    },
    {
        title: "underrun",
        description: "Twin stick shooter game in 13kb of JavaScript/WebGL",
        language: "JavaScript",
        languageClassName: "js-lang",
        status: "Public",
        lastModified: "Updated on Jan 27, 2022",
        stars: 1061,
        forks: 99,
    },
    {
        title: "JavaScriptCore-iOS",
        description: "Apple's JavaScript Engine, with modified project files for iOS",
        language: "C++",
        languageClassName: "cplusplus-lang",
        status: "Public",
        lastModified: "Updated on Feb 17",
        stars: 681,
        forks: 186,
    },
    {
        title: "ttt",
        description: "Tiny Texture Tumbler - A JS library and an editor to create textures",
        language: "HTML",
        languageClassName: "html-lang",
        status: "Public",
        lastModified: "Updated on Sep 17, 2021",
        stars: 79,
        forks: 4,
    },
];
const searchInput = document.querySelector(".repository-search-input");
function renderRepositories(repositories) {
    const repoContainer = document.querySelector(".repo-div");
    console.log(Boolean(repoContainer));
    if (repoContainer) {
        for (let i = 0; i < repositories.length; i++) {
            const repo = repositories[i];
            const repoDiv = document.createElement("div");
            repoDiv.className = "repo-display-div repository";
            repoDiv.innerHTML = `
      <!-- Add other details here -->
      <div class="repo-title-star-div">
        <div class="repo-title-div">
          <p class="repo-title title">${repo.title}</p>
          <p class="repo-status status">${repo.status}</p>
        </div>

        <button class="input-button repo-star-button">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-star d-inline-block mr-2"
          >
            <path
              d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
            ></path>
          </svg>
          <span>Star</span>
        </button>
      </div>

      <p class="lang-text description ${repo.description ? "lang-text desc-text" : "label-no-display"}">${repo.description}</p>

      <div class="repo-subinfo-div">
        <div class="sub-info">
          <div class="language-dot ${repo.languageClassName}"></div>
          <p class="lang-text language">${repo.language}</p>
        </div>

        <div class="sub-info">
          <svg
            aria-label="star"
            role="img"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-star"
          >
            <path
              d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
            ></path>
          </svg>
          <p class="lang-text stars">${repo.stars}</p>
        </div>

        <div class="sub-info">
          <svg
            aria-label="fork"
            role="img"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-repo-forked"
          >
            <path
              d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
            ></path>
          </svg>
          <p class="lang-text forks">${repo.forks}</p>
        </div>

        <p class="lang-text lastModified">${repo.lastModified}</p>
      </div>
    `;
            repoContainer.appendChild(repoDiv);
        }
    }
}
let isSearchEmpty = true; // Track whether the search input is empty
let searchedRepositories = repositories;
function searchRepositories() {
    const query = searchInput.value.toLowerCase(); // Get the search query and convert it to lowercase
    searchedRepositories = [];
    for (const repo of repositories) {
        const repoTitle = repo.title.toLowerCase(); // Convert the repo title to lowercase
        // Check if the search input is not empty and if the repo title contains the search query
        if (repoTitle.includes(query)) {
            searchedRepositories = [...searchedRepositories, repo];
        }
    }
    let repoDiv = document.querySelectorAll(".repository");
    let len = repoDiv.length;
    while (len > 0) {
        const repo = document.querySelector(".repository");
        repo === null || repo === void 0 ? void 0 : repo.remove();
        len--;
    }
    renderRepositories(searchedRepositories);
}
searchInput.addEventListener("input", () => {
    isSearchEmpty = searchInput.value.trim() === ""; // Check if the search input is empty
    searchRepositories();
});
renderRepositories(searchedRepositories);
