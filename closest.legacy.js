(function (ELEMENT) {
	ELEMENT.matches = ELEMENT.matches
		|| ELEMENT.oMatchesSelector
		|| ELEMENT.msMatchesSelector
		|| ELEMENT.mozMatchesSelector
		|| ELEMENT.webkitMatchesSelector
		|| function (selector) {
			var
			element = this,
			elements = (element.document || element.ownerDocument).querySelectorAll(selector),
			index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return elements[index] ? true : false;
		};

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
