import Patterns from '../regexp/patterns';
const Utils = {
	fromCamelCaseToProperCase(camelCase) {
		return camelCase.charAt(0).toUpperCase() + camelCase.replace(Patterns.UPPERCASE, match => ' ' + match).slice(1);
	},
	fromCamelCaseToConstantCase(camelCase) {
		return camelCase.replace(Patterns.UPPERCASE, match => '_' + match).slice(1).toUpperCase();
	},
	fromHyphenatedToProperHyphenated(hyphenated) {
		let properHyphenated = hyphenated.toLowerCase().split('-').map(section => section.charAt(0).toUpperCase() + section.slice(1)).join('-');
		return properHyphenated.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
	},
	fromConstantCaseToProperCase(constantCase) {
		return constantCase.toLowerCase().split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
	},
	fromUpperCaseToProperCase(upperCase) {
		return upperCase.toLowerCase().split(Patterns.WHITESPACE).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
	},
	fromProperCaseToCamelCase(properCase) {
		return properCase.charAt(0).toLowerCase() + properCase.slice(1).replace(Patterns.WHITESPACE, '');
	},
	fromProperCaseToConstantCase(properCase) {
		return properCase.toUpperCase().split(' ').join('_');
	},
	replaceExtraWhitespace(value, replacement = ' ') {
		return value.trim().replace(/[\s]{2,}/, replacement);
	},
	replaceSpecialCharacters(value, replacement = ' ') {
		return value.replace(Patterns.SPECIAL_CHARACTER, replacement);
	},
	testSearchTerm(searchText, key) {
		const value = Utils.replaceSpecialCharacters(key);
		return new RegExp(Utils.replaceExtraWhitespace(searchText), 'gi').test(value);
	},
	searchTermExists(searchText, key) {
		const pattern = Utils.replaceExtraWhitespace(searchText);
		return Utils.replaceSpecialCharacters(key.toUpperCase()).indexOf(pattern.toUpperCase());
	},
	toProperCase(text) {
		if (Patterns.CAMEL_CASE.test(text)) return Utils.fromCamelCaseToProperCase(text);
		else if (Patterns.CONSTANT_CASE.test(text)) return Utils.fromConstantCaseToProperCase(text);
		else return Utils.fromHyphenatedToProperHyphenated(text);
	},
	getObjectPropertyNumberSort(key) {
		return function (a, b) {
			let nameA = a[key];
			let nameB = b[key];
			if (nameA < nameB) return -1;
			else if (nameA > nameB) return 1;
			return 0;
		}
	}
};
export const replaceSpecialCharacters = (term, replacement = ' ') => term.replace(Patterns.SPECIAL_CHARACTER, replacement);
export const trimExtraWhitespace = value => value.trim().replace(/[\s]{2,}/,' ');
export const testPattern = (searchTerm, key, options = 'gi') => {
	const value = replaceSpecialCharacters(key);
	return new RegExp(trimExtraWhitespace(searchTerm), options).test(value);
};
export const findIndexOf = (searchTerm, key) => {
	const pattern = trimExtraWhitespace(replaceSpecialCharacters(searchTerm, '')).toUpperCase();
	return replaceSpecialCharacters(key, '').toUpperCase().indexOf(pattern);
};
export const regularExpressionSearchFilter = (searchText, key) => searchText && testPattern(searchText, key);
export const universitySearchFilter = (searchText, key) => searchText && findIndexOf(searchText, key) !== -1;
export const toProperCase = string => {
	let value = string;
	if (Patterns.CAMEL_CASE.test(value)) return Utils.fromCamelCaseToProperCase(value);
	else if (Patterns.CONSTANT_CASE.test(value)) return Utils.fromConstantCaseToProperCase(value);
	else return Utils.fromHyphenatedToProperHyphenated(value);
};
export const getObjectPropertySort = (key, caseSensitive = false) => {
	return caseSensitive ?
		Utils.getObjectPropertyNumberSort(key) :
		function (a, b) {
			let nameA = a[key].toUpperCase();
			let nameB = b[key].toUpperCase();
			if (nameA < nameB) return -1;
			else if (nameA > nameB) return 1;
			return 0;
		}
};
export default Utils;