const optionLinks = [
  { label: "Generate Schedule", icon: "add.svg" },
  { label: "View Schedule",     icon: "table.svg" },
  { label: "View Teacher",      icon: "teacher.svg" },
];

function appendLinks() {
  const options = document.getElementById("sidebar");

  optionLinks.forEach((link) => {
    options.innerHTML +=
      ` <li>
          <a class="nav-link">
            <img src="src/assets/icons/`+link.icon+`">
            `+link.label+`
          </a>
        </li>`;
  });

  
  options.querySelector(".nav-link")?.classList.add("highlight");

  addHighlights(); 
}

function addHighlights() {
  document.querySelectorAll(".nav-link").forEach((option) => {
    option.addEventListener("click", () => {
      document.querySelector(".nav-link.highlight")
              ?.classList.remove("highlight");
      option.classList.add("highlight");
    });
  });
}

appendLinks();
