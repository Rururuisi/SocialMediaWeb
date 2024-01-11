(() => {
	// ---------------------------Encapsulation---------------------------
	const get = (target) => {
		return document.querySelector(target);
	};
	const getAll = (target) => {
		return document.querySelectorAll(target);
	};

	const changeActiveObj = (items, idx) => {
		items.forEach((item, i) => {
			if (idx === i) {
				item.classList.add("active");
			} else {
				item.classList.remove("active");
			}
		});
	};

	const root = getComputedStyle(document.documentElement);

	// --------------------Menu Items Activation Handling--------------------
	const menuItems = getAll(".menu-item");
	menuItems.forEach((menuItem, idx) => {
		menuItem.addEventListener("click", () => {
			changeActiveObj(menuItems, idx);

			// --------------------Toggle Notification Pannel--------------------
			if (menuItem.id !== "notification-menu-item") {
				get(".notifications-popup").classList.remove("active");
			} else {
				get(".notifications-popup").classList.add("active");
			}
		});
	});

	// ---------------------------Messages---------------------------
	const msgNotif = get("#messages-notifications");
	msgNotif.addEventListener("click", () => {
		get(".messages").style.boxShadow = "0 0 1rem var(--color-primary)";
		msgNotif.querySelector(".notification-count").style.display = "none";
		setTimeout(() => {
			get(".messages").style.boxShadow = "none";
		}, 2000);
	});

	// search for messages
	get("#messages").addEventListener("keyup", (evt) => {
		getAll(".message").forEach((msg) => {
			const user = msg.querySelector("h5").innerText.toLowerCase();
			if (user.includes(evt.target.value.toLowerCase())) {
				msg.style.display = "flex";
			} else {
				msg.style.display = "none";
			}
		});
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

	// --------------------Toggle Theme Customized Pannel--------------------
	get("#theme-menu-item").addEventListener("click", () => {
		get(".customize-theme").style.display = "grid";
	});

	get(".close-theme").addEventListener("click", () => {
		get(".customize-theme").style.display = "none";
	});

	// --------------------Handle Theme Customization--------------------
	const fontSizes = get(".choose-size").querySelectorAll("span");
	const colors = get(".choose-color").querySelectorAll("span");
	const bgs = get(".choose-bg").querySelectorAll("div");

	const initFontSize = 14;
	fontSizes.forEach((size, idx) => {
		size.addEventListener("click", () => {
			changeActiveObj(fontSizes, idx);
			get("html").style.fontSize = `${initFontSize + idx}px`;
		});
	});

	colors.forEach((color, idx) => {
		color.addEventListener("click", () => {
			changeActiveObj(colors, idx);
		});
	});

	bgs.forEach((bg, idx) => {
		bg.addEventListener("click", () => {
			changeActiveObj(bgs, idx);
		});
	});
})();
