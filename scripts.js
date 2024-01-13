// ----------------------------DATA------------------------------

const notifications = [
	{
		user: "Keke Benjamin",
		avatarURL: "./images/profile-3.jpg",
		action: "accepted your friend request",
		time: "2 MINUTES AGO",
	},
	{
		user: "Rina Posh",
		avatarURL: "./images/profile-5.jpg",
		action: "sent you a friend request",
		time: "10 MINUTES AGO",
	},
	{
		user: "Linda Dash",
		avatarURL: "./images/profile-4.jpg",
		action: "commented your post",
		time: "4 HOURS AGO",
	},
	{
		user: "Jane Doe",
		avatarURL: "./images/profile-8.jpg",
		action: "and 283 others liked your post",
		time: "1 DAY AGO",
	},
	{
		user: "John Tirush",
		avatarURL: "./images/profile-10.jpg",
		action: "accepted your friend request",
		time: "2 DAYS AGO",
	},
];

const stories = [
	{
		user: "Diana Ayi",
		avatarURL: "./images/profile-1.jpg",
	},
	{
		user: "Christopher Brown",
		avatarURL: "./images/profile-10.jpg",
	},
	{
		user: "Sarah Davis",
		avatarURL: "./images/profile-13.jpg",
	},
	{
		user: "Olivia Taylor",
		avatarURL: "./images/profile-14.jpg",
	},
	{
		user: "Ava Wilson",
		avatarURL: "./images/profile-15.jpg",
	},
	{
		user: "William Anderson",
		avatarURL: "./images/profile-16.jpg",
	},
];

const feeds = [
	{
		user: "Emily Smith",
		avatarURL: "./images/profile-4.jpg",
		caption:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. #lifestyle",
		photoURL: "./images/feed-3.jpg",
		likes: 235,
		location: "Seattle, WA",
		post_time: "2024-01-11T13:15:00",
		tags: ["lifestyle"],
	},
	{
		user: "John Doe",
		avatarURL: "./images/profile-5.jpg",
		caption: "Sunny day in the park! 🌳☀️ #nature #sunnyday",
		photoURL: "./images/feed-1.jpg",
		likes: 123,
		location: "New York, NY",
		post_time: "2024-01-12T10:30:00",
		tags: ["nature", "sunnyday"],
	},
	{
		user: "Sarah Davis",
		avatarURL: "./images/profile-8.jpg",
		caption: "Enjoying a cup of coffee at my favorite spot. #coffee #relax",
		photoURL: "./images/feed-2.jpg",
		likes: 156,
		location: "San Francisco, CA",
		post_time: "2024-01-13T08:45:00",
		tags: ["coffee", "relax"],
	},
	{
		user: "Michael Johnson",
		avatarURL: "./images/profile-3.jpg",
		caption: "Exciting weekend getaway! 🏞️ #travel #adventure",
		photoURL: "./images/feed-4.jpg",
		likes: 189,
		location: "Los Angeles, CA",
		post_time: "2024-01-14T15:20:00",
		tags: ["travel", "adventure"],
	},
	{
		user: "Olivia Taylor",
		avatarURL: "./images/profile-7.jpg",
		caption: "Movie night with friends! 🍿🎬 #movies #friends",
		photoURL: "./images/feed-5.jpg",
		likes: 200,
		location: "Chicago, IL",
		post_time: "2024-01-15T19:00:00",
		tags: ["movies", "friends"],
	},
	{
		user: "Christopher Brown",
		avatarURL: "./images/profile-2.jpg",
		caption: "New workout routine, feeling energized! 💪 #fitness #health",
		photoURL: "./images/feed-6.jpg",
		likes: 145,
		location: "Dallas, TX",
		post_time: "2024-01-16T07:00:00",
		tags: ["fitness", "health"],
	},
	{
		user: "Emma Miller",
		avatarURL: "./images/profile-9.jpg",
		caption: "Cooking up a storm in the kitchen! 🍳🔥 #cooking #foodie",
		photoURL: "./images/feed-7.jpg",
		likes: 178,
		location: "Miami, FL",
		post_time: "2024-01-17T12:45:00",
		tags: ["cooking", "foodie"],
	},
	{
		user: "William Anderson",
		avatarURL: "./images/profile-4.jpg",
		caption:
			"Art gallery visit, mesmerized by the paintings. #art #gallery",
		photoURL: "./images/feed-1.jpg",
		likes: 210,
		location: "Denver, CO",
		post_time: "2024-01-18T16:30:00",
		tags: ["art", "gallery"],
	},
	{
		user: "Ava Wilson",
		avatarURL: "./images/profile-6.jpg",
		caption: "Sunday brunch with a view! 🍹🌆 #brunch #cityscape",
		photoURL: "./images/feed-2.jpg",
		likes: 167,
		location: "Austin, TX",
		post_time: "2024-01-19T11:00:00",
		tags: ["brunch", "cityscape"],
	},
	{
		user: "Benjamin Martinez",
		avatarURL: "./images/profile-1.jpg",
		caption: "Tech conference vibes! 🚀💻 #tech #conference",
		photoURL: "./images/feed-3.jpg",
		likes: 198,
		location: "San Jose, CA",
		post_time: "2024-01-20T14:15:00",
		tags: ["tech", "conference"],
	},
	{
		user: "Sophia Garcia",
		avatarURL: "./images/profile-11.jpg",
		caption: "Chill evening with good music! 🎶🍷 #music #chill",
		photoURL: "./images/feed-4.jpg",
		likes: 180,
		location: "Portland, OR",
		post_time: "2024-01-21T18:45:00",
		tags: ["music", "chill"],
	},
	{
		user: "Mason White",
		avatarURL: "./images/profile-12.jpg",
		caption: "Exploring hidden gems in the city. #exploration #citylife",
		photoURL: "./images/feed-5.jpg",
		likes: 220,
		location: "Phoenix, AZ",
		post_time: "2024-01-22T09:30:00",
		tags: ["exploration", "citylife"],
	},
];

const messages = [
	{
		avatarURL: "./images/profile-4.jpg",
		user: "Edem Quist",
		message: "Just woke up bruh",
	},
	{
		avatarURL: "./images/profile-5.jpg",
		user: "Luna Rose",
		message: "Got it! Thanks!",
	},
	{
		avatarURL: "./images/profile-6.jpg",
		user: "Linda Sulei",
		message: "Wdym",
	},
	{
		avatarURL: "./images/profile-7.jpg",
		user: "Ema Thomus",
		message: "2 new messages",
	},
	{
		avatarURL: "./images/profile-8.jpg",
		user: "Jone Tom",
		message: "ok",
	},
	{
		avatarURL: "./images/profile-9.jpg",
		user: "Adam Tomas",
		message: "Congratulation!",
	},
];

const requests = [
	{
		avatarURL: "./images/profile-17.jpg",
		user: "Hajia Bintu",
		mutual_friends: "8",
	},
	{
		avatarURL: "./images/profile-18.jpg",
		user: "Jackline Mensah",
		mutual_friends: "2",
	},
	{
		avatarURL: "./images/profile-19.jpg",
		user: "Jennifer Lawrence",
		mutual_friends: "0",
	},
];

// ----------------------------UTILS------------------------------
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

const insertTemplate = async ({
	data = undefined,
	templateFunc,
	className,
}) => {
	const template = data
		.reverse()
		.map((d) => templateFunc(d))
		.join("");
	const elementHTML = document.querySelector(className);
	elementHTML.innerHTML = template;
};

// ----------------------------TEMPLATES------------------------------
const getNotificationTemplate = (notification) => {
	const { user, avatarURL, action, time } = notification;
	return `
	<div>
		<div class="profile-photo">
			<img src="${avatarURL}">
		</div>
		<div class="notification-body">
			<b>${user}</b> ${action}
			<small class="text-muted">${time}</small>
		</div>
	</div>
	`;
};

const getMiddleTemplte = () => {
	return `
		<div class="search-bar feeds-search" id="explore-search">
			<i class="uil uil-search"></i>
			<input type="search" name="search" id="search" placeholder="Search">
			<select id="filter">
				<option value="creator">creator</option>
				<option value="tag">tag</option>
			</select>
		</div>
		<div class="stories"></div>
		<form class="create-post" id="submit-post">
			<div class="img-thumbnail"></div>
			<div class="input-container">
				<div class="profile-photo">
					<img src="./images/profile-1.jpg">
				</div>
				<input type="text" id="create-post" placeholder="What's on your mind, Diana? ">
				<input type="file" id="add-image"/>
				<label for="add-image" class="add-image"><i class="uil uil-image-plus"></i></label>
				<input class="btn btn-primary" type="submit" value="Post">
			</div>
		</form>
		<div class="feeds"></div>
	`;
};

const getStoryTemplate = (story) => {
	const { user, avatarURL } = story;
	return `
	<div class="story">
		<div class="profile-photo">
			<img src="${avatarURL}">
		</div>
		<p class="name">${user}</p>
	</div>
	`;
};

const getFeedTemplate = (feed) => {
	const time = new Date(feed.post_time).toLocaleString();
	const tags = feed.caption.match(/#[\w\d-_]+/g);
	tags &&
		tags.forEach((tag) => {
			feed.caption = feed.caption.replace(
				tag,
				`<span class="hash-tag">${tag}</span>`
			);
		});

	return `
		<div class="feed">
			<div class="head">
				<div class="user">
					<div class="profile-photo">
						<img src="${feed.avatarURL}">
					</div>
					<div class="ingo">
						<h3>${feed.user}</h3>
						<small>${feed.location}, ${time}</small>
					</div>
				</div>
				<span class="more">
					<i class="uil uil-ellipsis-h"></i>
				</span>
			</div>
			<div class="caption">
				<p>
					${feed.caption} 
				</p>
			</div>
			<div class="photo">
				<div class="photo">
					<img src="${feed.photoURL}">
				</div>
			</div>
			<div class="action-buttons">
				<div class="interaction-buttons">
					<span class="like"><i class="uil uil-heart"></i></span>
					<span><i class="uil uil-comment-dots"></i></span>
					<span><i class="uil uil-share-alt"></i></span>
				</div>
				<div class="bookmark">
					<span><i class="uil uil-bookmark"></i></span>
				</div>
			</div>
			<div class="liked-by">
				<span><img src="./images/profile-10.jpg"></span>
				<span><img src="./images/profile-4.jpg"></span>
				<span><img src="./images/profile-15.jpg"></span>
				<p>Liked by <b>Ernest Achiever</b> and <b class="number-of-likes">${feed.likes} others</b></p>
			</div>
			<div class="show-comments text-muted">View all 277 comments</div>
		</div>
	`;
};

const getMessageTemplate = (msg) => {
	const { user, avatarURL, message } = msg;
	return `
	<div class="message">
		<div class="profile-photo">
			<img src="${avatarURL}">
		</div>
		<div class="message-body">
			<h5>${user}</h5>
			<p class="text-muted">${message}</p>
		</div>
	</div>
	`;
};

const getRequestTemplate = (request) => {
	const { user, avatarURL, mutual_friends } = request;
	return `
	<div class="request">
		<div class="info">
			<div class="profile-photo">
				<img src="${avatarURL}">
			</div>
			<div>
				<h5>${user}</h5>
				<p class="text-muted">
					<small>${mutual_friends} mutual friends</small>
				</p>
			</div>
		</div>
		<div class="action">
			<button class="btn btn-primary">
				Accept
			</button>
			<button class="btn">
				Decline
			</button>
		</div>
	</div>
	`;
};

// ----------------------------INSERT------------------------------
const insertListElements = () => {
	const templateArguments = {
		notifications: {
			data: notifications,
			templateFunc: getNotificationTemplate,
			className: ".notifications",
		},
		stories: {
			data: stories,
			templateFunc: getStoryTemplate,
			className: ".stories",
		},
		feeds: {
			data: feeds,
			templateFunc: getFeedTemplate,
			className: ".feeds",
		},
		requests: {
			data: requests,
			templateFunc: getRequestTemplate,
			className: ".requests",
		},
		messages: {
			data: messages,
			templateFunc: getMessageTemplate,
			className: ".msg-list",
		},
	};

	// ----------------------INSERT TEMPLATES-----------------------
	// left
	insertTemplate(templateArguments.notifications); // notifications

	//middle
	get(".middle").innerHTML = getMiddleTemplte();
	insertTemplate(templateArguments.stories); // stories
	insertTemplate(templateArguments.feeds); // feeds

	//right
	insertTemplate(templateArguments.messages); //messages
	insertTemplate(templateArguments.requests); // requests
};

// ----------------------------EVENTS------------------------------
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

			if (menuItem.id === "home") {
				get(".middle").className = "middle active";
				get(".right").className = "right";
			}

			if (menuItem.id === "explore") {
				get("#explore-search").classList.add("active");
				if (window.innerWidth > 992) {
					get(".search-bar").style.boxShadow =
						"0 0 1rem var(--color-primary)";
					setTimeout(() => {
						get(".search-bar").style.boxShadow = "none";
					}, 2000);
				}
			} else {
				get("#explore-search").classList.remove("active");
			}
		});
	});

	// ---------------------------Messages---------------------------
	const msgNotif = get("#messages-notifications");
	msgNotif.addEventListener("click", () => {
		get(".middle").className = "middle";
		get(".right").className = "right active";
		msgNotif.querySelector(".notification-count").style.display = "none";
		if (window.innerWidth > 992) {
			get(".messages").style.boxShadow = "0 0 1rem var(--color-primary)";
			setTimeout(() => {
				get(".messages").style.boxShadow = "none";
			}, 2000);
		}
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
	const addLikeEvyListener = () => {
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
	addLikeEvyListener();

	// ----------------------Handle Search Event-----------------------
	getAll(".feeds-search").forEach((searchBar) => {
		const inputEl = searchBar.querySelector("input");
		const selectEl = searchBar.querySelector("select");
		inputEl.addEventListener("keyup", (evt) => {
			get(".stories").style.display =
				evt.target.value === "" ? "flex" : "none";
			get(".create-post").style.display =
				evt.target.value === "" ? "flex" : "none";

			getAll(".feed").forEach((feed) => {
				const creator = feed
					.querySelector("h3")
					.innerText.toLowerCase();
				let tags = "";
				feed.querySelectorAll(".hash-tag").forEach((tag) => {
					tags += tag.innerText.toLowerCase();
				});
				const target = selectEl.value === "creator" ? creator : tags;

				if (target.includes(evt.target.value.toLowerCase())) {
					feed.style.display = "block";
				} else {
					feed.style.display = "none";
				}
			});
		});
	});

	// ----------------------Handle Create Post-----------------------
	const initFeeds = {
		user: "Diana Ayi",
		avatarURL: "./images/profile-1.jpg",
		caption: "",
		photoURL: "",
		location: "New York, NY",
		likes: 0,
		post_time: "",
		tags: [],
	};

	let feeds = { ...initFeeds };

	const createImageContainer = (img) => {
		const url = URL.createObjectURL(img);
		const image = document.createElement("img");
		image.src = url;
		const removeIcon = document.createElement("span");
		removeIcon.innerHTML = `<i class="uil uil-multiply"></i>`;
		const div = document.createElement("div");
		div.appendChild(image);
		div.appendChild(removeIcon);
		return { element: div, imgURL: url, removeIcon };
	};

	get("#add-image").addEventListener("input", (evt) => {
		const { element, imgURL, removeIcon } = createImageContainer(
			evt.target.files[0]
		);
		const wrapper = document.createElement("div");
		wrapper.className = "img-wrapper";
		wrapper.appendChild(element);
		get(".img-thumbnail").appendChild(wrapper);
		feeds = { ...feeds, photoURL: imgURL };

		removeIcon.addEventListener("click", () => {
			get(".img-thumbnail").removeChild(wrapper);
		});
	});

	get("#create-post").addEventListener("keyup", (evt) => {
		const tags = evt.target.value.match(/(?<=#)[A-z]+-*[A-z]*/g) || [];
		feeds = { ...feeds, caption: evt.target.value, tags };
	});

	get("#submit-post").addEventListener("submit", async (evt) => {
		evt.preventDefault();
		if (feeds.caption === "" || feeds.photoURL === "") {
			alert("Please post both caption and image! ");
		} else {
			feeds.post_time = Date.now();
			feeds.likes = Math.floor(Math.random() * 999);

			const feedEle = get(".feeds");
			feedEle.innerHTML = getFeedTemplate(feeds) + feedEle.innerHTML;

			evt.target.reset();
			get(".img-thumbnail").innerHTML = "";
			feeds = initFeeds;
			addLikeEvyListener();
		}
	});
};

// ----------------------------RUNSCRIPTS------------------------------
insertListElements();
addEventListeners();
