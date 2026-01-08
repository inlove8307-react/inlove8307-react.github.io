class UxCheckbox extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.baseClass = 'ux-checkbox';
		this.classList.add(this.baseClass);
	}

	static get observedAttributes() {
		return ['checked', 'disabled'];
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

	connectedCallback() {
		this.render();
		this.shadowRoot.querySelector('input[type="checkbox"]').addEventListener('change', this.handleChange.bind(this));
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector('input[type="checkbox"]').removeEventListener('change', this.handleChange.bind(this));
	}

	attributeChangedCallback(name, oldValue, newValue) {
		const input = this.shadowRoot.querySelector('input');

		if (!input) return;

		switch (name) {
			case 'checked':
				input.checked = this.checked;
				break;
			case 'disabled':
				input.disabled = this.disabled;
				break;
		}
	}

	handleChange(event) {
		this.checked = event.target.checked;

		this.dispatchEvent(new CustomEvent('change', {
			detail: { checked: this.checked },
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
		const checked = this.checked ? 'checked' : '';
		const disabled = this.disabled ? 'disabled' : '';

		return `
			<label part="base">
				<input part="input" type="checkbox" ${checked} ${disabled}>
				<span part="icon"></span>
				<div part="label">
					<slot name="label"></slot>
				</div>
			</label>
		`;
	}
}

customElements.define('ux-checkbox', UxCheckbox);