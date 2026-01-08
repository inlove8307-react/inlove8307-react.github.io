class UxRadio extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.baseClass = 'ux-radio';
		this.classList.add(this.baseClass);
	}

	static get observedAttributes() {
		return ['checked', 'disabled', 'name', 'value'];
	}

	get checked() {
		return this.hasAttribute('checked');
	}

	set checked(value) {
		value
			? this.setAttribute('checked', '')
			: this.removeAttribute('checked');
	}

	get disabled() {
		return this.hasAttribute('disabled');
	}

	set disabled(value) {
		value
			? this.setAttribute('disabled', '')
			: this.removeAttribute('disabled');
	}

	get name() {
		return this.getAttribute('name');
	}

	set name(value) {
		this.setAttribute('name', value);
	}

	get value() {
		return this.getAttribute('value');
	}

	set value(value) {
		this.setAttribute('value', value);
	}

	connectedCallback() {
		this.render();
		this.shadowRoot.querySelector('input').addEventListener('change', this.handleChange.bind(this));
		document.addEventListener('change-group', this.handleChangeGroup.bind(this));
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector('input').removeEventListener('change', this.handleChange.bind(this));
		document.removeEventListener('change-group', this.handleChangeGroup.bind(this));
	}

	attributeChangedCallback(name, oldValue, newValue) {
		const input = this.shadowRoot.querySelector('input[type="radio"]');

		if (!input) return;

		switch (name) {
			case 'checked':
				input.checked = this.checked;
				break;
			case 'disabled':
				input.disabled = this.disabled;
				break;
			case 'name':
				input.name = this.name;
				break;
			case 'value':
				input.value = this.value;
				break;
		}
	}

	handleChange() {
		if (this.checked) return;

		this.checked = true;

		this.dispatchEvent(new CustomEvent('change', {
			detail: { checked: this.checked, value: this.value, name: this.name },
			bubbles: true,
			composed: true
		}));

		document.dispatchEvent(new CustomEvent('change-group', {
			detail: { name: this.name, target: this },
			bubbles: true,
			composed: true
		}));
	}

	handleChangeGroup(event) {
		const { name, target } = event.detail;

		if (this !== target && this.name === name) {
			this.checked = false;
		}
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
		const name = this.name ? `name="${this.name}"` : '';
		const value = this.value ? `value="${this.value}"` : '';
		const checked = this.checked ? 'checked' : '';
		const disabled = this.disabled ? 'disabled' : '';

		return `
			<label part="base">
				<input part="input" type="radio" ${name} ${value} ${checked} ${disabled}>
				<span part="icon"></span>
				<div part="label">
					<slot name="label"></slot>
				</div>
			</label>
		`;
	}
}

customElements.define('ux-radio', UxRadio);