(function (ELEMENT) {
	ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector || function matches(selector) {
		var
		element = this,
		elements = (element.document || element.ownerDocument).querySelectorAll(selector),
		index = 0;

		while (elements[index] && elements[index] !== element) {
			++index;
		}

		return elements[index] ? true : false;
	};

	ELEMENT.closest = ELEMENT.closest || function closest(selector) {
		var element = this;

		while (element) {
			if (element.matches(selector)) {
				break;
			}

			element = element.parentElement;
		}

		return element;
	};
}(Element.prototype));
