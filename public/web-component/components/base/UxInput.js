class UxInput extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.baseClass = 'ux-input';
		this.classList.add(this.baseClass);
	}

	static get observedAttributes() {
		return [
			'value',
			'placeholder',
			'type',
			'disabled',
			'readonly',
			'maxlength',
			'minlength',
			'size',
			'pattern'
		];
	}

	get value() {
		return this.getAttribute('value') || '';
	}
	set value(val) {
		this.setAttribute('value', val);
	}

	get placeholder() {
		return this.getAttribute('placeholder') || '';
	}
	set placeholder(val) {
		this.setAttribute('placeholder', val);
	}

	get type() {
		return this.getAttribute('type') || 'text';
	}
	set type(val) {
		this.setAttribute('type', val);
	}

	get disabled() {
		return this.hasAttribute('disabled');
	}
	set disabled(val) {
		if (val) {
			this.setAttribute('disabled', '');
		} else {
			this.removeAttribute('disabled');
		}
	}

	get readonly() {
		return this.hasAttribute('readonly');
	}
	set readonly(val) {
		if (val) {
			this.setAttribute('readonly', '');
		} else {
			this.removeAttribute('readonly');
		}
	}

	get maxlength() {
		return this.getAttribute('maxlength');
	}
	set maxlength(val) {
		this.setAttribute('maxlength', val);
	}

	get minlength() {
		return this.getAttribute('minlength');
	}
	set minlength(val) {
		this.setAttribute('minlength', val);
	}

	get size() {
		return this.getAttribute('size');
	}
	set size(val) {
		this.setAttribute('size', val);
	}

	get pattern() {
		return this.getAttribute('pattern');
	}
	set pattern(val) {
		this.setAttribute('pattern', val);
	}

	connectedCallback() {
		this.render();
		const input = this.shadowRoot.querySelector('input');
		if (input) {
			input.addEventListener('input', this._handleInput.bind(this));
			input.addEventListener('change', this._handleChange.bind(this));
		}
	}

	disconnectedCallback() {
		const input = this.shadowRoot.querySelector('input');
		if (input) {
			input.removeEventListener('input', this._handleInput.bind(this));
			input.removeEventListener('change', this._handleChange.bind(this));
		}
	}

	attributeChangedCallback(name, oldValue, newValue) {
		const input = this.shadowRoot.querySelector('input');
		if (!input) return;

		switch (name) {
			case 'value':
				input.value = newValue;
				break;
			case 'placeholder':
				input.placeholder = newValue;
				break;
			case 'type':
				input.type = newValue;
				break;
			case 'disabled':
				newValue === null ? input.removeAttribute('disabled') : input.setAttribute('disabled', '');
				break;
			case 'readonly':
				newValue === null ? input.removeAttribute('readonly') : input.setAttribute('readonly', '');
				break;
			case 'maxlength':
				input.maxLength = newValue;
				break;
			case 'minlength':
				input.minLength = newValue;
				break;
			case 'size':
				input.size = newValue;
				break;
			case 'pattern':
				input.pattern = newValue;
				break;
		}
	}

	_handleInput(event) {
		this.value = event.target.value;
		this.dispatchEvent(new CustomEvent('input', {
			detail: { value: this.value },
			bubbles: true,
			composed: true
		}));
	}

	_handleChange(event) {
		this.value = event.target.value;
		this.dispatchEvent(new CustomEvent('change', {
			detail: { value: this.value },
			bubbles: true,
			composed: true
		}));
	}

	render() {
		this.shadowRoot.innerHTML = `
			${this.style()}
			${this.template()}
		`;
	}

	style() {
		return `
			<style>
				:host {
					display: inline-block;
					font-family: sans-serif;
					margin-bottom: 10px;
				}
				.input-wrapper {
					display: flex;
					flex-direction: column;
				}
				::slotted(label) {
					margin-bottom: 5px;
					color: #333;
				}
				input {
					padding: 8px 12px;
					border: 1px solid #ccc;
					border-radius: 4px;
					font-size: 16px;
					transition: border-color 0.2s ease-in-out;
				}
				input:focus {
					outline: none;
					border-color: #007bff;
				}
				input[disabled] {
					background-color: #e9ecef;
					cursor: not-allowed;
				}
				input[readonly] {
					background-color: #f8f9fa;
					cursor: default;
				}
			</style>
		`;
	}

	template() {
		const disabledAttr = this.disabled ? 'disabled' : '';
		const readonlyAttr = this.readonly ? 'readonly' : '';
		const placeholderAttr = this.placeholder ? `placeholder="${this.placeholder}"` : '';
		const valueAttr = this.value ? `value="${this.value}"` : '';
		const typeAttr = `type="${this.type}"`;
		const maxlengthAttr = this.maxlength ? `maxlength="${this.maxlength}"` : '';
		const minlengthAttr = this.minlength ? `minlength="${this.minlength}"` : '';
		const sizeAttr = this.size ? `size="${this.size}"` : '';
		const patternAttr = this.pattern ? `pattern="${this.pattern}"` : '';

		return `
			<div class="input-wrapper">
				<slot name="label"></slot>
				<input
					${typeAttr}
					${valueAttr}
					${placeholderAttr}
					${disabledAttr}
					${readonlyAttr}
					${maxlengthAttr}
					${minlengthAttr}
					${sizeAttr}
					${patternAttr}
				/>
			</div>
		`;
	}
}

customElements.define('ux-input', UxInput);