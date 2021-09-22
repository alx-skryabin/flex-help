import {Colors} from './config.js'
import {Utils} from './utils.js'

export class Box {
	constructor() {
		this.count = 0;
	}

	createItem() {
		let $box = Utils.crtEl('div');
		$box.classList.add(Utils.getClass('box-item'));
		$box.style.background = this.color;
		$box.innerText = this.count + 1;
		this.count++;
		return $box;
	}

	get color() {
		let num = (this.count >= Colors.length) 
		? this.count % Colors.length
		: this.count;
		return Colors[num];
	}
}
