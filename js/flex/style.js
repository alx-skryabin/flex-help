export class Style {
	constructor() {
		this.css = null;
		this.init();
	}

	static props = [
	{
		name: 'flex-direction',
		value: ['row', 'row-reverse', 'column', 'column-reverse']
	},
	{
		name: 'flex-wrap',
		value: ['nowrap', 'wrap', 'wrap-reverse']
	},
	{
		name: 'justify-content',
		value: ['flex-start', 'flex-end', 'center', 'space-around', 'space-between']
	},
	{
		name: 'align-items',
		value: ['stretch', 'baseline', 'center', 'flex-start', 'flex-end']
	},
	{
		name: 'align-content',
		value: ['stretch', 'center', 'flex-start', 'flex-end', 'space-around', 'space-between']
	},
	]

	init() {
		this.addEls();
		this.updateCss();
		
	}

	getProps() {
		return Style.props.reduce((all, item) => {
			let {name, value} = item;
			value = document.querySelector(`input[name="${name}"]:checked`).value;

			return [...all, {name, value}];
		}, []);
	}

	updateCss() {
		let [drc, wr, jst, ai, ac] = this.getProps();
		let $root = document.querySelector('.flex_css');

		this.css = `flex-direction: ${drc.value}; flex-wrap: ${wr.value}; justify-content: ${jst.value}; align-items: ${ai.value}; align-content: ${ac.value};`;

		$root.innerText = '{\n' + 
		'    display: flex;\n' +
		'    flex-direction: ' + drc.value + ';\n' +
		'    flex-wrap: ' + wr.value + ';\n' +
		'    justify-content: ' + jst.value + ';\n' +
		'    align-items: ' + ai.value + ';\n' +
		'    align-content: ' + ac.value + ';\n' +
		'}';
	}

	addEls() {
		let $root = document.querySelector('.flex_style');
		let listArr = this.createEls();

		listArr.map(item => {
			$root.appendChild(item);
		})
	}

	createEls() {
		return Style.props.reduce((els, item) => {
			let {name, value} = item;

			let $item = this.createItem();
			let $head = this.createHead(name);
			let $check = this.createCheck();

			value.map((prps, i) => {
				let $label = this.createLabel(name, prps, i);
				$check.appendChild($label);
			});

			$item.appendChild($head);
			$item.appendChild($check);

			return [...els, $item];
		}, []);
	}

	createItem() {
		let $item = document.createElement('div');
		$item.classList.add('flex_style-prop');
		return $item;
	}

	createHead(title) {
		let $head = document.createElement('div');
		$head.classList.add('flex_style-head');
		$head.innerText = title;
		return $head;
	}

	createCheck() {
		let $check = document.createElement('div');
		$check.classList.add('flex_style-check');
		return $check;
	}

	createLabel(name, value, ind) {
		let $label = document.createElement('label');
		let $span = document.createElement('span');
		$span.innerText = (ind === 0) ? `${value} (default)` : value;

		let $input = document.createElement('input');
		$input.setAttribute('name', name);
		$input.setAttribute('value', value);
		$input.setAttribute('type', 'radio');
		if(ind === 0) $input.setAttribute('checked', 'checked');

		$label.appendChild($input);
		$label.appendChild($span);

		return $label;
	}
}