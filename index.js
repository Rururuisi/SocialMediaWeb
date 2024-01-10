(() => {
	const get = (target) => {
		return document.querySelector(target);
	};
	const getAll = (target) => {
		return document.querySelectorAll(target);
	};

	const menuToggler = get(".menu-toggle");
	menuToggler.addEventListener("click", (evt) => {
		if (menuToggler.className === "menu-toggle") {
			get(".sidebar").className = "sidebar active";
			menuToggler.className = "menu-toggle active";
			menuToggler.innerHTML = closeIcon;
		} else {
			get(".sidebar").className = "sidebar";
			menuToggler.className = "menu-toggle";
		}
	});
})();
