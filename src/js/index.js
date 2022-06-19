"use strict";

import "../scss/style.scss";
import cards from "./modules/cards";

document.addEventListener("DOMContentLoaded", () => {
	cards({
		catalogSelector: ".catalog-item__content",
		catalogFooterSelector: ".catalog-item__footer",
		catalogWeightSelector: ".catalog-item__weight",
	});
});
