(function (ELEMENT) {
	if (typeof ELEMENT.matches != 'function') {
		ELEMENT.matches = ELEMENT.msMatchesSelector || ELEMENT.mozMatchesSelector || ELEMENT.webkitMatchesSelector;
	}

	if (typeof ELEMENT.closest != 'function') ELEMENT.closest = function (selector) {
		var node = this;

		while (node) {
			if (node.matches(selector)) return node;
			else node = node.parentElement;
		}

		return null;
	};
})(Element.prototype);
