const insertListElements = async () => {
	const templateArguments = {
		notifications: {
			fetchLink: "./data/notifications.json",
			dataKey: "notifications",
			templateFunc: getNotificationTemplate,
			className: ".notifications",
		},
		stories: {
			fetchLink: "./data/stories.json",
			dataKey: "stories",
			templateFunc: getStoryTemplate,
			className: ".stories",
		},
		feeds: {
			fetchLink: "./data/feeds.json",
			dataKey: "feeds",
			templateFunc: getFeedTemplate,
			className: ".feeds",
		},
	};

	// ----------------------INSERT TEMPLATES-----------------------
	get(".middle").innerHTML = getHomeTemplte();
	await insertTemplate(templateArguments.notifications); // notifications
	await insertTemplate(templateArguments.stories); // stories
	await insertTemplate(templateArguments.feeds); // feeds
};
