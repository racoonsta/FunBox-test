function cards({
	catalogSelector,
	catalogFooterSelector,
	catalogWeightSelector,
}) {
	const cards = document.querySelectorAll(catalogSelector);
	const footers = document.querySelectorAll(catalogFooterSelector);
	const circle = document.querySelectorAll(catalogWeightSelector);

	cards.forEach((item, i) => {
		if (i < cards.length - 1) {
			item.addEventListener("click", (event) => {
				item.classList.toggle("catalog-item__content_selected");
				circle[i].classList.toggle("catalog-item__weight_selected");
				console.log(event);
			});
		}
	});

	footers.forEach((item, i) => {
		if (i < cards.length - 1) {
			item.addEventListener("click", (event) => {
				cards[i].classList.toggle("catalog-item__content_selected");
				circle[i].classList.toggle("catalog-item__weight_selected");
				console.log(event);
			});
		}
	});
}

export default cards;
