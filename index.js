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

			// --------------------Toggle Notification Pannel--------------------
			if (menuItem.id !== "notification-menu-item") {
				get(".notifications-popup").classList.remove("active");
			} else {
				get(".notifications-popup").classList.add("active");
			}
		});
	});

	// --------------------Toggle Theme Customized Pannel--------------------
	get("#theme-menu-item").addEventListener("click", () => {
		get(".customize-theme").style.display = "grid";
	});

	get(".close-theme").addEventListener("click", () => {
		get(".customize-theme").style.display = "none";
	});

	// --------------------Toggle Sidebar on Mobile Screen--------------------
	const menuToggler = get(".menu-toggle");
	menuToggler.addEventListener("click", () => {
		if (menuToggler.className === "menu-toggle") {
			get(".sidebar").classList.add("active");
			menuToggler.classList.add("active");
		} else {
			get(".sidebar").classList.remove("active");
			menuToggler.classList.remove("active");
			get(".notifications-popup").classList.remove("active");
		}
	});
})();
