(function (ELEMENT) {
	ELEMENT.matches = ELEMENT.matches
		|| ELEMENT.oMatchesSelector
		|| ELEMENT.msMatchesSelector
		|| ELEMENT.mozMatchesSelector
		|| ELEMENT.webkitMatchesSelector;

	ELEMENT.closest = ELEMENT.closest || function (selector) {
		var node = this;

		while (node) {
			if (node.matches(selector)) {
				break;
			}
			node = node.parentElement;
		}

		return node;
	};
}(Element.prototype));
