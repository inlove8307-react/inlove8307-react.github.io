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
		if (value) {
			this.setAttribute('checked', '');
		} else {
			this.removeAttribute('checked');
		}
	}

	get disabled() {
		return this.hasAttribute('disabled');
	}
	set disabled(value) {
		if (value) {
			this.setAttribute('disabled', '');
		} else {
			this.removeAttribute('disabled');
		}
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
		this.shadowRoot.querySelector('input[type="radio"]').addEventListener('change', this._handleChange.bind(this));
		// Listen for custom event to uncheck other radios in the same group
		document.addEventListener('ux-radio-checked', this._handleRadioGroupChange.bind(this));
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector('input[type="radio"]').removeEventListener('change', this._handleChange.bind(this));
		document.removeEventListener('ux-radio-checked', this._handleRadioGroupChange.bind(this));
	}

	attributeChangedCallback(name, oldValue, newValue) {
		const input = this.shadowRoot.querySelector('input[type="radio"]');
		if (!input) return;

		if (name === 'checked' && oldValue !== newValue) {
			input.checked = this.checked;
		}
		if (name === 'disabled' && oldValue !== newValue) {
			input.disabled = this.disabled;
		}
		if (name === 'name' && oldValue !== newValue) {
			input.name = this.name;
		}
		if (name === 'value' && oldValue !== newValue) {
			input.value = this.value;
		}
	}

	_handleChange() {
		if (this.checked) return; // Already checked, no change

		this.checked = true;
		// Dispatch a custom event to notify other radios in the same group
		document.dispatchEvent(new CustomEvent('ux-radio-checked', {
			detail: { name: this.name, checkedRadio: this },
			bubbles: true,
			composed: true
		}));

		this.dispatchEvent(new CustomEvent('change', {
			detail: { checked: this.checked, value: this.value, name: this.name },
			bubbles: true,
			composed: true
		}));
	}

	_handleRadioGroupChange(event) {
		const { name, checkedRadio } = event.detail;
		if (this !== checkedRadio && this.name === name) {
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
				:host {
					display: inline-flex;
					align-items: center;
					cursor: pointer;
					font-family: sans-serif;
					-webkit-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					user-select: none;
				}
				:host([disabled]) {
					cursor: not-allowed;
					opacity: 0.6;
				}
				input[type="radio"] {
					/* Hide default radio */
					position: absolute;
					opacity: 0;
					cursor: inherit;
				}
				.radio-custom {
					width: 18px;
					height: 18px;
					border: 2px solid #555;
					border-radius: 50%; /* Make it round */
					display: inline-block;
					position: relative;
					margin-right: 8px;
					background-color: #fff;
				}
				:host([checked]) .radio-custom {
					background-color: #007bff;
					border-color: #007bff;
				}
				.radio-custom::after {
					content: '';
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: white;
					display: none;
				}
				:host([checked]) .radio-custom::after {
					display: block;
				}
				:host([disabled]) .radio-custom {
					background-color: #e9ecef;
					border-color: #ced4da;
				}
				::slotted(*) { /* Allow any slotted content */
					color: #333;
				}
				:host([disabled]) ::slotted(*) {
					color: #6c757d;
				}
			</style>
		`;
	}

	template() {
		const isChecked = this.checked ? 'checked' : '';
		const isDisabled = this.disabled ? 'disabled' : '';
		const nameAttr = this.name ? `name="${this.name}"` : '';
		const valueAttr = this.value ? `value="${this.value}"` : '';

		return `
			<label part="base">
				<input type="radio" ${isChecked} ${isDisabled} ${nameAttr} ${valueAttr}>
				<span part="radio-custom" class="radio-custom"></span>
				<div part="label-container">
					<slot name="label"></slot>
				</div>
			</label>
		`;
	}
}

customElements.define('ux-radio', UxRadio);