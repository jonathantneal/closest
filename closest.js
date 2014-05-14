(function (ELEMENT, PREFIX) {
	ELEMENT.matches = ELEMENT.matches || ELEMENT[PREFIX + 'MatchesSelector'];

	ELEMENT.closest = ELEMENT.closest || function (selector) {
		var node = this;

		while (node) {
			if (node.matches(selector)) return node;
			else node = node.parentElement;
		}

		return null;
	};
})(
	Element.prototype,
	(getComputedStyle(document.documentElement).cssText.match(/-(moz|webkit|ms)-/) || [])[1] || ''
);
