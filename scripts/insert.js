const insertListElements = async () => {
	const templateArguments = {
		notifications: {
			data: notifications,
			fetchLink: "./data/notifications.json",
			dataKey: "notifications",
			templateFunc: getNotificationTemplate,
			className: ".notifications",
		},
		stories: {
			data: stories,
			fetchLink: "./data/stories.json",
			dataKey: "stories",
			templateFunc: getStoryTemplate,
			className: ".stories",
		},
		feeds: {
			data: feeds,
			fetchLink: "./data/feeds.json",
			dataKey: "feeds",
			templateFunc: getFeedTemplate,
			className: ".feeds",
		},
		requests: {
			data: requests,
			fetchLink: "./data/requests.json",
			dataKey: "requests",
			templateFunc: getRequestTemplate,
			className: ".requests",
		},
		messages: {
			data: messages,
			fetchLink: "./data/messages.json",
			dataKey: "messages",
			templateFunc: getMessageTemplate,
			className: ".msg-list",
		},
	};

	// ----------------------INSERT TEMPLATES-----------------------
	// left
	await insertTemplate(templateArguments.notifications); // notifications

	//middle
	get(".middle").innerHTML = getMiddleTemplte();
	await insertTemplate(templateArguments.stories); // stories
	await insertTemplate(templateArguments.feeds); // feeds

	//right
	await insertTemplate(templateArguments.messages); //messages
	await insertTemplate(templateArguments.requests); // requests
};
