import {URL} from './config.js'
import {Utils} from './utils.js'

export class Media {
	static add($root) {
		let $el = Media.create();
		$el.innerHTML = Media.template();
		$root.append($el);
	}

	static create() {
		let $media = Utils.crtEl('div');
		$media.classList.add(Utils.getClass('media'));
		return $media;
	}

	static template() {
		let {github, insta, vk} = URL;

		return ` 
		<div class="fh__flex_media-group">
			<div class="fh__flex_media-head">Feedback? —</div>
			<div class="fh__flex_media-link">
				<a href="${insta}" target="_blank">instagram</a>
				<a href="${vk}" target="_blank">vk</a>
			</div>
		</div>
		<div class="fh__flex_media-group">
			<div class="fh__flex_media-head">Improvements? —</div>
			<div class="fh__flex_media-link">
				<a href="${github}" target="_blank">github</a>
			</div>
		</div>`;
	}
}