import {FlexProps} from './config.js'
import {Utils} from './utils.js'

export class Style {
	constructor($root, $css) {
		this.$root = $root;
		this.$css = $css;
		this.$pre = null;
		this.cssText = null;
		this.init();
	}

	init() {
		this.addEls();
		this.updateCss();
	}

	getProps() {
		return FlexProps.reduce((all, item) => {
			let {name, value} = item;
			value = this.$root.querySelector(`input[name="${name}"]:checked`).value;

			return [...all, {name, value}];
		}, []);
	}

	updateCss() {
		let [drc, wr, jst, ai, ac] = this.getProps();

		this.cssText = `flex-direction: ${drc.value}; flex-wrap: ${wr.value}; justify-content: ${jst.value}; align-items: ${ai.value}; align-content: ${ac.value};`;

		this.$pre.innerText = '    display: flex;\n' +
		'    flex-direction: ' + drc.value + ';\n' +
		'    flex-wrap: ' + wr.value + ';\n' +
		'    justify-content: ' + jst.value + ';\n' +
		'    align-items: ' + ai.value + ';\n' +
		'    align-content: ' + ac.value + ';';
		
	}

	addEls() {
		this.createEls().map(item => {
			this.$root.append(item);
		});

		this.$pre = createPreCss();
		let $copy = createCopyStyle('css');
		this.$css.append(this.$pre, $copy);
	}

	createEls() {
		return FlexProps.reduce((els, item) => {
			let {name, value} = item;

			let $item = createItem();
			let $head = createHead(name);
			let $check = createCheck();
			let $copy = createCopyStyle('style');

			value.map((prps, i) => {
				let $label = createLabel(name, prps, i);
				$check.append($label);
			});

			$item.append($copy, $head, $check);

			return [...els, $item];
		}, []);
	}
}



function createItem() {
	let $item = Utils.crtEl('div');
	$item.classList.add(Utils.getClass('style-prop'));
	return $item;
}

function createHead(title) {
	let $head = Utils.crtEl('div');
	$head.classList.add(Utils.getClass('style-head'));
	$head.innerText = title;
	return $head;
}

function createCheck() {
	let $check = Utils.crtEl('div');
	$check.classList.add(Utils.getClass('style-check'));
	return $check;
}

function createLabel(name, value, ind) {
	let $label = Utils.crtEl('label');
	let $span = Utils.crtEl('span');
	$span.innerText = (ind === 0) ? `${value} (default)` : value;

	let $input = Utils.crtEl('input');
	$input.setAttribute('name', name);
	$input.setAttribute('value', value);
	$input.setAttribute('type', 'radio');
	if(ind === 0) $input.setAttribute('checked', 'checked');

	$label.append($input, $span);

	return $label;
}

function createCopyStyle(name) {
	let $copy = Utils.crtEl('div');
	$copy.classList.add(Utils.getClass('copy'));
	$copy.classList.add(Utils.getClass(`copy-${name}`));
	$copy.setAttribute('data-copy', name);
	$copy.innerText = '✂';
	return $copy;
}

function createPreCss() {
	let $pre = Utils.crtEl('pre');
	$pre.classList.add(Utils.getClass('css-pre'));
	return $pre;
}