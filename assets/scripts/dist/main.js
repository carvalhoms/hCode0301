const body = document.querySelector("body");

const btnOpen = document.getElementById("btn-open");
const closeMenu = document.getElementById("btn-close");

if (btnOpen) {
	btnOpen.addEventListener("click", (e) => {
		e.preventDefault();
		e.stopPropagation();
		body.classList.add("open-menu");
	});
}

if (closeMenu) {
	closeMenu.addEventListener("click", (e) => {
		e.preventDefault();
		e.stopPropagation();
		body.classList.remove("open-menu");
	});
}
