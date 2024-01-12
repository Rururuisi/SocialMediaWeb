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

const getHomeTemplte = () => {
	return `
		<div class="stories"></div>
		<form class="create-post">
			<div class="profile-photo">
				<img src="./images/profile-1.jpg">
			</div>
			<input type="text" id="create-post" placeholder="What's on your mind, Diana? ">
			<input class="btn btn-primary" type="submit" value="Post">
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
	const tagsHTML = feed.tags.map((tag) => `<span>#${tag}</span>`);
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
					<span class="hash-tag">${tagsHTML.join(" ")}</span>
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
				<p>Liked by <b>Ernest Achiever</b> and <b class="number-of-likes">${
					feed.likes
				} others</b></p>
			</div>
			<div class="show-comments text-muted">View all 277 comments</div>
		</div>
	`;
};
