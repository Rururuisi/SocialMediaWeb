const addEventListeners = () => {
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

	get(".customize-theme").addEventListener("click", (evt) => {
		if (evt.target.className === "customize-theme") {
			get(".customize-theme").style.display = "none";
		}
	});

	// --------------------Handle Theme Customization--------------------
	const fontSizes = get(".choose-size").querySelectorAll("span");
	const colors = get("#choose-primary-color").querySelectorAll("span");
	const btnColors = get("#choose-btn-color").querySelectorAll("span");
	const bgs = get(".choose-bg").querySelectorAll("div");

	// -----Handle Font Size Change-----
	const initFontSize = 14;
	fontSizes.forEach((size, idx) => {
		size.addEventListener("click", () => {
			changeActiveObj(fontSizes, idx);
			get("html").style.fontSize = `${initFontSize + idx}px`;
		});
	});

	// -----Handle Color Change-----
	const hslHues = [252, 52, 352, 152, 202];
	colors.forEach((color, idx) => {
		color.addEventListener("click", () => {
			changeActiveObj(colors, idx);
			get(":root").style.setProperty("--primary-color-hue", hslHues[idx]);
		});
	});

	// -----Handle Button Color Change-----
	btnColors.forEach((color, idx) => {
		color.addEventListener("click", () => {
			changeActiveObj(btnColors, idx);
			get(":root").style.setProperty(
				"--btn-primary-color-hue",
				hslHues[idx]
			);
		});
	});

	// -----Handle Background Change-----
	const rootColorVars = ["--color-card", "--color-bg", "--color-font"];
	const bgColors = [
		["100%", "95%", "17%"],
		["20%", "15%", "90%"],
		["10%", "0%", "90%"],
	];

	const changeBackground = (rootVar, color) => {
		if (rootVar.length !== color.length) return;
		rootVar.forEach((vari, idx) => {
			get(":root").style.setProperty(vari, color[idx]);
		});
	};

	bgs.forEach((bg, idx) => {
		bg.addEventListener("click", () => {
			changeActiveObj(bgs, idx);
			changeBackground(rootColorVars, bgColors[idx]);
		});
	});

	// ----------------------Handle Like Event-----------------------
	const numbers = getAll(".number-of-likes");
	getAll(".like").forEach((heart, idx) => {
		heart.addEventListener("click", () => {
			const noAction = '<i class="uil uil-heart"></i>';
			const liked = '<img src="./images/heart.png"/>';
			if (heart.innerHTML === noAction) {
				heart.innerHTML = liked;
				numbers[idx].innerText = `${
					parseInt(numbers[idx].innerText) + 1
				} others`;
			} else {
				heart.innerHTML = noAction;
				numbers[idx].innerText = `${
					parseInt(numbers[idx].innerText) - 1
				} others`;
			}
		});
	});
};