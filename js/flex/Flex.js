import {Box} from './box.js'
import {Style} from './style.js'

export class Flex {
    constructor(sel, props = {}) {
        this.checkRoot(sel);
        if(!this.$root) return;

        this.props = Object.assign(Flex.default, props);
        this._countRange = this.countRange = this.props.countRange;
    }

    static default = {
        countRange: 2
    }

    init() {
        this.createEls();
        this.addEventRange();
        this.Box = new Box();
        this.Style = new Style();
        this.addEventCheckbox();

        this.outputItems(this.countRange);
    }

    outputItems(num) {
        for (let i = 0; i < num; i++) {
            let item = this.Box.createItem();
            this.$box.appendChild(item)
        }
    }

    checkRoot(sel) {
        this.$root = document.querySelector(sel) || null;
        if (this.$root) this.$root.classList.add('flex');
    }

    set countRange(num) {
        this._countRange = num;
    }

    get countRange() {
        return this._countRange;
    }

    createEls() {
        let els = {
            input: {
                attrs: {
                    class: 'flex_input',
                    type: 'range',
                    min: 1,
                    max: 7,
                    step: 1,
                    value: this.countRange
                },
                var: 'range'
            },
            diver: {
                attrs: {
                    class: 'flex_style'
                },
                var: 'style'
            },
            div: {
                attrs: {
                    class: 'flex_box'
                },
                var: 'box'
            },
            pre: {
                attrs: {
                    class: 'flex_css'
                },
                var: 'css'
            }
        };

        Object.entries(els).map(el => {
            let [tag, props] = el;
            let $el = document.createElement(tag);
            this[`$${props.var}`] = $el
            this.$root.append($el);

            Object.entries(props.attrs).map(attr => {
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
            this.$box.style.cssText = this.Style.css;
        }
    }
}
