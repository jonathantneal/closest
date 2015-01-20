# closest

**closest** returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.

```js
element = baseElement.closest(selectors);
```

**closest** tests the element itself for a selector match and then traverses up through its ancestors in the DOM tree until a successful selector match is found.

This is especially useful for delegating events.

```js
document.addEventListener('click', function (event) {
	// get the closet anchor that has been clicked
	var a = event.target.closest('a');

	if (a) {
		// do something with the anchor
	}
});
```

## matches

**closest** also polyfills [matches](https://developer.mozilla.org/en-US/docs/Web/API/Element.matches). **matches** returns true if the element would be selected by the specified selector string; otherwise, returns false.

```js
result = element.matches(selectorString);
```

**matches** is especially useful for shorthanding `hasAttribute` or `classList.contains` with selectors.

```js
var widget = document.querySelector('.custom-widget');

if (widget.matches('[data-active]') || widget.matches('.widget--active')) {
	// do something with the active widget
}
```

## Browser compatibility

The polyfills for **matches** and **closest** should work in:

* Chrome
* Safari 3.1+, iOS 3.2+
* Firefox 3.5+
* Internet Explorer 8+
* Opera 10+, Opera Mini 5+
* Android 2.2+
* Blackberry 7+

## Prollyfill status

<s>If you like **closest** and would like to it in a real DOM standard, convince [Anne van Kesteren](https://twitter.com/annevk) to add it to the [DOM Standard](http://dom.spec.whatwg.org/).</s>

**UPDATE:** [Anne van Kesteren](https://twitter.com/annevk) has added it to the [DOM Living Standard](http://dom.spec.whatwg.org/#dom-element-closest). We will track [Chrome](https://code.google.com/p/chromium/issues/entry), [Opera](https://bugs.opera.com/wizard/), [Firefox](https://bugzilla.mozilla.org/enter_bug.cgi?format=guided), and [Safari](https://bugs.webkit.org/enter_bug.cgi) as they implement it.

According to [caniuse](http://caniuse.com/matches), **matches** has wide adoption, from IE9 to Firefox 3.6 to iOS4. It is prefix-free in Chrome 34. Nothing like **closest** <s>exists</s> existed outside of libraries like [jQuery](http://api.jquery.com/closest/).

[Chris Coyier](https://twitter.com/chriscoyier)’s excellent blog post [Links with Inline SVG, Staying on Target with Events](http://css-tricks.com/links-inline-svg-staying-target-events/) highlights the need for something like **closest**. After reading it, I decided to throw this together.
