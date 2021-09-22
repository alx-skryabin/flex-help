import {Default} from './config.js'
import {Utils} from './utils.js'
import {Box} from './box.js'
import {Style} from './style.js'
import {Copy} from './copy.js'
import {Media} from './media.js'

export class Flex {
    constructor(sel, props = {}) {
        this.$root = this.checkRoot(sel);
        this.props = validProps(props);

        this.init();
    }

    init() {
        this.createEls();

        this.Box = new Box();
        this.Style = new Style(this.$style, this.$css);

        this.addEventRange();
        this.addEventCheckbox();
        this.addEventClick();

        this.outputItems(this.props.countRange);
        Media.add(this.$root);
    }

    outputItems(num) {
        for (let i = 0; i < num; i++) {
            let item = this.Box.createItem();
            this.$box.appendChild(item);
        }
    }

    checkRoot(sel) {
        let $root = Utils.qs(sel) || null;
        if ($root) {
            $root.classList.add(Utils.getClass());
            return $root;
        }
        else throw 'Not found selector on page!';
    }

    createEls() {
        let els = [
        {
            tag: 'input',
            variable: 'range',
            attrs: {
                class: Utils.getClass('range'),
                type: 'range',
                min: 1,
                max: this.props.countMax,
                step: this.props.countStep,
                value: this.props.countRange
            }
        },
        {
            tag: 'form',
            variable: 'style',
            attrs: {
                class: Utils.getClass('style')
            }
        },
        {
            tag: 'div',
            variable: 'box',
            attrs: {
                class: Utils.getClass('box')
            }                
        },
        {
            tag: 'div',
            variable: 'css',
            attrs: {
                class: Utils.getClass('css')
            }
        }
        ];

        els.map(el => {
            let {tag, variable, attrs} = el;
            let $el = Utils.crtEl(tag);
            this[`$${variable}`] = $el;
            this.$root.append($el);

            Object.entries(attrs).map(attr => {
                let [name, value] = attr;
                $el.setAttribute(name, value);
            });
        });
    }

    addEventRange() {
        this.$range.onchange = () => {
            this.$box.innerHTML = '';
            this.Box.count = 0;
            this.outputItems(+this.$range.value);
        }
    }

    addEventCheckbox() {
        this.$style.onchange = () => {
            this.Style.updateCss();
            this.$box.style.cssText = this.Style.cssText;
        }
    }

    addEventClick() {
        this.$root.addEventListener('click', e => {
            let t = e.target;

            if (t.dataset.copy) {
                Copy.toBuffer(t);
            }
        });
    }
}


function validProps(props) {
    props = Object.entries(props).reduce((obj, prop) => {
        let [name, val] = prop;
        val = Utils.isNum(val) ? val : Default[name];
        return {...obj, [name]: val};
    }, {});

    return Object.assign(new Object({...Default}), props);
}
