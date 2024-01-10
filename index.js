(() => {
	const get = (target) => {
		return document.querySelector(target);
	};
	const getAll = (target) => {
		return document.querySelectorAll(target);
	};

	// --------------------Menu Items Activation Handling--------------------
	const menuItems = getAll(".menu-item");
	menuItems.forEach((menuItem, idx) => {
		menuItem.addEventListener("click", () => {
			menuItems.forEach((item, i) => {
				if (idx === i) {
					item.classList.add("active");
				} else {
					item.classList.remove("active");
				}
			});
		});
	});

	// --------------------Toggle Sidebar on Mobile Screen--------------------
	const menuToggler = get(".menu-toggle");
	menuToggler.addEventListener("click", (evt) => {
		if (menuToggler.className === "menu-toggle") {
			get(".sidebar").classList.add("active");
			menuToggler.classList.add("active");
		} else {
			get(".sidebar").classList.remove("active");
			menuToggler.classList.remove("active");
		}
	});
})();
