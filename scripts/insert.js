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
