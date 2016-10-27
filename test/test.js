var tests = 0;
var failures = 0;

function equal(expected, result) {
	if (expected !== result) {
		throw new Error('got ' + result);
	}
}

function test(name, fn) {
	var error;

	try {
		fn.call();
	} catch (e) {
		error = e;
	}

	if (error) {
		console.error(name + ' FAILED: ' + error.toString());

		failures++;
	} else {
		tests++;
	}
}

function find(tagName) {
	return document.getElementsByTagName(tagName)[0];
}

test('find closest link', function () {
	var span = find('span');

	equal(span.parentNode, span.closest('a'));
});

test('find self', function () {
	var link = find('a');
	equal(link, link.closest('a[href]'));
});

test('find <html> element', function () {
	var link = find('a');

	equal(document.documentElement, link.closest('.no-js'));
});

test('stop at first match', function () {
	var link = find('a');
	var item = link.closest('.task-item');

	equal('LI', item.nodeName);
});

test('not found', function () {
	var link = find('a');

	equal(null, link.closest('.nonexistent'));
});

var results = document.getElementById('results');

results.textContent = tests + ' passed, ' + failures + ' failures.';

if (failures > 0) {
	results.className = 'failed';
} else {
	results.className = 'passed';
}
