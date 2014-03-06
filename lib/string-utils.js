function isLetter(c) {
	return isUppercase(c) || isLowercase(c);
}

function isUppercase(c) {
	return c >= 65 && c <= 90;
}

function isLowercase(c) {
	return c >= 97 && c <= 122;
}

function toCharCodeArray(key) {
	var result = [];
	for (var i = 0; i < key.length; i++) {
		var c = key.charCodeAt(i);
		if (isLetter(c))
			result.push((c - 65) % 32);
	}
	return result;
}

module.exports.isLetter = isLetter;
module.exports.isUpperCase = isUppercase;
module.exports.isLowerCase = isLowercase;
module.exports.toCharCodeArray = toCharCodeArray;