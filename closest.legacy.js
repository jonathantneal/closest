(function (ELEMENT, PREFIX) {
	ELEMENT.matches = ELEMENT.matches || ELEMENT[PREFIX + 'MatchesSelector'] || function (selector) {
		var
		element = this,
		elements = (element.document || element.ownerDocument).querySelectorAll(selector),
		index = 0;

		while (elements[index] && elements[index] !== element) ++index;

		return elements[index] ? true : false;
	};

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
