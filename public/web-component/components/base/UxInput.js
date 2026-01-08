class UxInput extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.baseClass = 'ux-input';
		this.classList.add(this.baseClass);
	}

	static get observedAttributes() {
		return ['type', 'placeholder', 'value', 'minlength', 'maxlength', 'size', 'pattern', 'readonly', 'disabled', 'prefix', 'suffix', 'clear', 'submit'];
	}

	get type() {
		return this.getAttribute('type') || 'text';
	}

	set type(value) {
		this.setAttribute('type', value);
	}

	get placeholder() {
		return this.getAttribute('placeholder') || '';
	}

	set placeholder(value) {
		this.setAttribute('placeholder', value);
	}

	get value() {
		return this.getAttribute('value') || '';
	}

	set value(value) {
		this.setAttribute('value', value);
	}

	get minlength() {
		return this.getAttribute('minlength');
	}

	set minlength(value) {
		this.setAttribute('minlength', value);
	}

	get maxlength() {
		return this.getAttribute('maxlength');
	}

	set maxlength(value) {
		this.setAttribute('maxlength', value);
	}

	get size() {
		return this.getAttribute('size');
	}

	set size(value) {
		this.setAttribute('size', value);
	}

	get pattern() {
		return this.getAttribute('pattern');
	}

	set pattern(value) {
		this.setAttribute('pattern', value);
	}

	get readonly() {
		return this.hasAttribute('readonly');
	}

	set readonly(value) {
		value
			? this.setAttribute('readonly', '')
			: this.removeAttribute('readonly');
	}

	get disabled() {
		return this.hasAttribute('disabled');
	}

	set disabled(value) {
		value
			? this.setAttribute('disabled', '')
			: this.removeAttribute('disabled');
	}

	get prefix() {
		return this.getAttribute('prefix') || '';
	}

	get suffix() {
		return this.getAttribute('suffix') || '';
	}

	get clear() {
		return this.getAttribute('clear') || '';
	}

	get submit() {
		return this.getAttribute('submit') || '';
	}

	connectedCallback() {
		this.render();

		const input = this.shadowRoot.querySelector('input');

		input.addEventListener('input', this.handleInput.bind(this));
		input.addEventListener('change', this.handleChange.bind(this));
		input.addEventListener('keydown', this.handleKeydown.bind(this));
		input.addEventListener('keyup', this.handleKeyup.bind(this));
		input.addEventListener('focus', this.handleFocus.bind(this));
		input.addEventListener('blur', this.handleBlur.bind(this));

		this.shadowRoot.querySelector('button[part="clear"]').addEventListener('click', this.handleClear.bind(this));
		this.shadowRoot.querySelector('button[part="submit"]').addEventListener('click', this.handleSubmit.bind(this));
	}

	disconnectedCallback() {
		const input = this.shadowRoot.querySelector('input');

		input.removeEventListener('input', this.handleInput.bind(this));
		input.removeEventListener('change', this.handleChange.bind(this));
		input.removeEventListener('keydown', this.handleKeydown.bind(this));
		input.removeEventListener('keyup', this.handleKeyup.bind(this));
		input.removeEventListener('focus', this.handleFocus.bind(this));
		input.removeEventListener('blur', this.handleBlur.bind(this));

		this.shadowRoot.querySelector('button[part="clear"]').removeEventListener('click', this.handleClear.bind(this));
		this.shadowRoot.querySelector('button[part="submit"]').removeEventListener('click', this.handleSubmit.bind(this));
	}

	attributeChangedCallback(name, oldValue, newValue) {
		const input = this.shadowRoot.querySelector('input');

		if (!input) return;

		switch (name) {
			case 'type':
				input.type = this.type;
				break;
			case 'placeholder':
				input.placeholder = this.placeholder;
				break;
			case 'value':
				input.value = this.value;
				break;
			case 'minlength':
				input.minLength = this.minlength;
				break;
			case 'maxlength':
				input.maxLength = this.maxlength;
				break;
			case 'size':
				input.size = this.size;
				break;
			case 'pattern':
				input.pattern = this.pattern;
				break;
			case 'readonly':
				input.readonly = this.readonly;
				break;
			case 'disabled':
				input.disabled = this.disabled;
				break;
		}
	}

	handleInput(event) {
		this.value = event.target.value;

		this.dispatchEvent(new CustomEvent('input', {
			detail: { value: this.value },
			bubbles: true,
			composed: true
		}));
	}

	handleChange(event) {
		this.value = event.target.value;

		this.dispatchEvent(new CustomEvent('change', {
			detail: { value: this.value },
			bubbles: true,
			composed: true
		}));
	}

	handleKeydown(event) {
		this.dispatchEvent(new CustomEvent('keydown', {
			detail: { key: event.key },
			bubbles: true,
			composed: true
		}));
	}

	handleKeyup(event) {
		this.dispatchEvent(new CustomEvent('keyup', {
			detail: { key: event.key },
			bubbles: true,
			composed: true
		}));
	}

	handleFocus(event) {
		this.dispatchEvent(new CustomEvent('focus', {
			bubbles: true,
			composed: true
		}));
	}

	handleBlur(event) {
		this.dispatchEvent(new CustomEvent('blur', {
			bubbles: true,
			composed: true
		}));
	}

	handleClear(event) {
		this.value = '';

		this.dispatchEvent(new CustomEvent('clear', {
			bubbles: true,
			composed: true
		}));
	}

	handleSubmit(event) {
		this.dispatchEvent(new CustomEvent('submit', {
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
			</style>
		`;
	}

	template() {
		const type = `type="${this.type}"`;
		const placeholder = this.placeholder ? `placeholder="${this.placeholder}"` : '';
		const value = this.value ? `value="${this.value}"` : '';
		const minlength = this.minlength ? `minlength="${this.minlength}"` : '';
		const maxlength = this.maxlength ? `maxlength="${this.maxlength}"` : '';
		const size = this.size ? `size="${this.size}"` : '';
		const pattern = this.pattern ? `pattern="${this.pattern}"` : '';
		const readonly = this.readonly ? 'readonly' : '';
		const disabled = this.disabled ? 'disabled' : '';

		return `
			<div part="base">
				<span part="prefix">
					${this.prefix}
				</span>
				<input part="input" ${type} ${value} ${placeholder} ${disabled} ${readonly} ${maxlength} ${minlength} ${size} ${pattern} />
				<span part="suffix">
					${this.suffix}
				</span>
				<button part="clear" type="button">
					clear
				</button>
				<button part="submit" type="button">
					${this.submit}
				</button>
			</div>
		`;
	}
}

customElements.define('ux-input', UxInput);