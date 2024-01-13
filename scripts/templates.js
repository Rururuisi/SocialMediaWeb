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
			<div class="input-container">
				<div class="profile-photo">
					<img src="./images/profile-1.jpg">
				</div>
				<input type="text" id="create-post" placeholder="What's on your mind, Diana? ">
				<input type="file" id="add-image"/>
				<label for="add-image" class="add-image"><i class="uil uil-image-plus"></i></label>
				<input class="btn btn-primary" type="submit" value="Post">
			</div>
			<div class="img-thumbnail"></div>
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
	const tags = feed.caption.match(/#[\w\d\p{Script=Han}_-]+/gu);
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
