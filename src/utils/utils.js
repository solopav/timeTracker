export function convertDateToSheetsDateString(str) {
	const dateObject = new Date(str);

	return dateObject.toISOString().substr(0, '1990-01-03T15:30:00'.length)
		.replace(/T/, ' ')
		.replace(/-/g, '/');
}

export function toDateInputStr(date) {
	date = new Date(date);
	return date.getFullYear() +
		'-' + alignNum(date.getMonth() + 1) +
		'-' + alignNum(date.getDate()) +
		'T' + alignNum(date.getHours()) +
		':' + alignNum(date.getMinutes()) +
		':' + alignNum(date.getSeconds());
}
function alignNum(number) {
	if (number < 10) {
		return '0' + number;
	}
	return number;
}




/**
 * Get the closest element of a given element by class
 *
 * Take an element (the first param), and traverse the DOM upward from it
 * until it hits the element with a given class name (second parameter).
 * This mimics jQuery's `.closest()`.
 *
 * @param  {element} el    The element to start from
 * @param  {string}  clazz The class name
 * @return {element}       The closest element
 */
export const closestByClass = function(el, clazz) {
	// Traverse the DOM up with a while loop
	while (!(el.classList && el.classList.contains(clazz))) {
		// Increment the loop to the parent node
		el = el.parentNode;
		if (!el) {
			return null;
		}
	}
	// At this point, the while loop has stopped and `el` represents the element that has
	// the class you specified in the second parameter of the function `clazz`

	// Then return the matched element
	return el;
}