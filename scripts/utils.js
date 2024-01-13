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

const fetchData = async (link) => {
	const res = await fetch(link);
	const data = await res.json();
	return data;
};

const insertTemplate = async ({
	data = undefined,
	fetchLink,
	dataKey,
	templateFunc,
	className,
}) => {
	data = data || (await fetchData(fetchLink))[dataKey];
	const template = data
		.reverse()
		.map((d) => templateFunc(d))
		.join("");
	const elementHTML = document.querySelector(className);
	elementHTML.innerHTML = template;
};
