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

const insertTemplate = ({ data = undefined, templateFunc, className }) => {
	const template = data
		.reverse()
		.map((d) => templateFunc(d))
		.join("");
	const elementHTML = document.querySelector(className);
	elementHTML.innerHTML = template;
};
