(function (ELEMENT) {
	if (typeof ELEMENT.matches != 'function') {
		ELEMENT.matches = ELEMENT.msMatchesSelector || ELEMENT.mozMatchesSelector || ELEMENT.webkitMatchesSelector ||
			function (selector) {
				var element = this,
						elements = (element.document || element.ownerDocument).querySelectorAll(selector),
						index = 0;

				while (elements[index] && elements[index] !== element) ++index;

				return !!elements[index];
			};
	}

	if (typeof ELEMENT.closest != 'function') ELEMENT.closest = function (selector) {
		var node = this;

		while (node && node.nodeType != 11) {
			if (node.matches(selector)) return node;
			else node = node.parentElement;
		}

		return null;
	};
})(Element.prototype);
