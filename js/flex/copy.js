export class Copy {
	static toBuffer(target) {
		Copy.copy(Copy.defineText(target))
		.then(() => Copy.animate(target));
	}

	static animate($target) {
		$target.classList.add('active');

		setTimeout(() => $target.classList.remove('active'), 1000);
	}

	static defineText(target) {
		let view = target.dataset.copy;
		let text = null;

		if (view === 'style') {
			let $check = target.parentNode.querySelector('input:checked');
			text = `${$check.getAttribute('name')}: ${$check.value};`;
		}

		if (view === 'css') {
			text = target.parentNode.querySelector('.fh__flex_css-pre').innerText;
		}

		return text;
	}

	/*Polyfill Clipboard*/
	static copy(text = '') {
		if (navigator.clipboard && window.isSecureContext) {
			return navigator.clipboard.writeText(text);
		} else {
			let textArea = document.createElement("textarea");
			textArea.value = text;
			textArea.style.position = "fixed";
			textArea.style.left = "-999999px";
			textArea.style.top = "-999999px";
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();
			return new Promise((res, rej) => {
				document.execCommand('copy') ? res() : rej();
				textArea.remove();
			});
		}
	}
}
