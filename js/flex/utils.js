import {System} from './config.js'

export class Utils {
	static getClass(name = '') {
		name = name ? `_${name}` : '';
		return `${System.classPrefix}flex${name}`;
	}

	static crtEl(tagName) {
		return document.createElement(tagName);
	}

	static qs(sel) {
		return document.querySelector(sel);
	}
}