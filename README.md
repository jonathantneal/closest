# closest

[closest]: https://dom.spec.whatwg.org/#dom-element-closestselectors
[matches]: https://developer.mozilla.org/en-US/docs/Web/API/Element.matches

[Element.prototype.closest][closest] returns the first element that matches a CSS selector by traversing up the DOM tree starting from (and including) the receiver element.

```js
element.closest(selectorString) //=> element
```

This is especially useful for delegating events.

```js
document.addEventListener('click', function (event) {
	// find the anchor element that contains or is the click target itself:
	var link = event.target.closest('a');

	if (link) {
		// do something with the anchor
		event.preventDefault();
	}
});
```

## matches
For the `closest` polyfill to work, this also polyfills [matches][], which is widely supported but often vendor-prefixed.

```js
element.matches(selectorString) //=> boolean
```

`matches` is especially useful for shorthanding `hasAttribute` or `classList.contains` with selectors.

```js
var widget = document.querySelector('.custom-widget');

if (widget.matches('[data-active]') || widget.matches('.widget--active')) {
	// do something with the active widget
}
```

## Browser compatibility

- Internet Explorer 9+
- Firefox 3.6+
- Chrome
- Opera 11.5+
- Android 2.2+
- Blackberry 7+
- iOS Safari 4+
- Safari 5+

**The legacy version extends support to**

- Internet Explorer 8+
- Firefox 3.5+
- iOS Safari 3.2+
- Opera 10+
- Opera Mini 5+
- Safari 3.1+.

Those are really old browsers, and I don’t see a usecase for IE8 compatibility, which is why it is packaged separately. `closest` is especially useful when delegating events, and Internet Explorer 8 does not support [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener#Browser_compatibility), and [attachEvent](http://help.dottoro.com/ljinxrmt.php) is an insufficient fallback, as it fires events in the reverse order they are added (read: the opposite order of what you expect and `addEventListener`).
