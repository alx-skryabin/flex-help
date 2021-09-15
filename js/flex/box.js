export class Box {
	constructor() {
		this.count = 0;
	}

	static colors = ['coral', 'teal', 'pink', 'orange', 'limegreen', 'skyblue', 'brown'];

	createItem() {
		let $box = document.createElement('div');
		$box.classList.add('flex_box-item');
		$box.style.background = this.color;
		$box.innerText = this.count + 1;
		this.count++;
		return $box;
	}

	get color() {
		let num = (this.count >= Box.colors.length) 
		? this.count % Box.colors.length
		: this.count;
		return Box.colors[num];
	}
}