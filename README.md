# closest

[Element.prototype.closest][closest] returns the first element that matches a
CSS selector by traversing up the DOM tree starting from (and including) the
receiver element.

```js
element.closest(selectorString) //=> element
```

```js
document.addEventListener('click', function (event) {
	// find the anchor element that contains or is the click target itself:
	var link = event.target.closest('a');

	if (link) {
		// ...
		event.preventDefault();
	}
});
```

## matches

For the `closest` polyfill to work, this also polyfills [matches][], which is
widely supported but often vendor-prefixed.

```js
element.matches(selectorString) //=> boolean
```

## Browser compatibility

* Chrome
* Safari 3.1+, iOS 3.2+
* Firefox 3.5+
* Internet Explorer 8+
* Opera 10+, Opera Mini 5+
* Android 2.2+
* Blackberry 7+


[closest]: http://dom.spec.whatwg.org/#dom-element-closest
[matches]: https://developer.mozilla.org/en-US/docs/Web/API/Element.matches
