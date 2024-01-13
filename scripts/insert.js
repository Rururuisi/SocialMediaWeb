const insertListElements = async () => {
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
	await insertTemplate(templateArguments.notifications); // notifications

	//middle
	get(".middle").innerHTML = getMiddleTemplte();
	await insertTemplate(templateArguments.stories); // stories
	await insertTemplate(templateArguments.feeds); // feeds

	//right
	await insertTemplate(templateArguments.messages); //messages
	await insertTemplate(templateArguments.requests); // requests
};
