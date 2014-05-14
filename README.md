# closest

**closest** returns the element or first ancestor of the element matching the specified group of selectors.

```js
element = baseElement.closest(selectors);
```

**closest** tests the element itself and then traverses up through its ancestors in the DOM tree until a successful match is found. This is especially useful when delegating events.

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

**matches** and **closest** will work in Android 2.2+, Blackberry 7+, Chrome, Firefox 3.6+, Internet Explorer 9+, iOS Safari 4+, Opera 11.5+, and Safari 5+.

The legacy version extends support to Firefox 3.5+, Internet Explorer 8+, iOS Safari 3.2+, Opera 10+, Opera Mini 5+, and Safari 3.1+.

Those are really old browsers, and I don’t see a usecase for IE8 compatibility, which is why it is packaged separately. **closest** is especially useful when delegating events, and Internet Explorer 8 does not support [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener#Browser_compatibility), and [attachEvent](http://help.dottoro.com/ljinxrmt.php) is an insufficient fallback, as it fires events in the reverse order they are added (read: the opposite order of what you expect and **addEventListener**).

## Prollyfill status

If you like **closest**, please write a spec for it. According to [caniuse](http://caniuse.com/matches), **matches** has wide adoption, from IE9 to Firefox 3.6 and iOS4. It is prefix-free as of Chrome 34. However, nothing like **closest** exists outside DOM libraries like [jQuery](http://api.jquery.com/closest/).

Chris Coyier’s excellent blog post [Links with Inline SVG, Staying on Target with Events](http://css-tricks.com/links-inline-svg-staying-target-events/) highlights the need for something like **closest**. After reading it, I decided to throw this together.

---

[closest.js](/closest.js) is 429B or 210B minified + gzipped. [closest.legacy.js](/closest.legacy.js) is 688B or 270B minified + gzipped.
