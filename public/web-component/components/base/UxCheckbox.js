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

	connectedCallback() {
		this.render();
		this.shadowRoot.querySelector('input[type="checkbox"]').addEventListener('change', this._handleChange.bind(this));
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector('input[type="checkbox"]').removeEventListener('change', this._handleChange.bind(this));
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'checked' && oldValue !== newValue) {
			const input = this.shadowRoot.querySelector('input[type="checkbox"]');
			if (input) {
				input.checked = this.checked;
			}
		}
		if (name === 'disabled' && oldValue !== newValue) {
			const input = this.shadowRoot.querySelector('input[type="checkbox"]');
			if (input) {
				input.disabled = this.disabled;
			}
		}
	}

	_handleChange() {
		this.checked = !this.checked;
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
				input[type="checkbox"] {
					/* Hide default checkbox */
					position: absolute;
					opacity: 0;
					cursor: inherit;
				}
				.checkbox-custom {
					width: 18px;
					height: 18px;
					border: 2px solid #555;
					border-radius: 3px;
					display: inline-block;
					position: relative;
					margin-right: 8px;
					background-color: #fff;
				}
				:host([checked]) .checkbox-custom {
					background-color: #007bff;
					border-color: #007bff;
				}
				.checkbox-custom::after {
					content: '';
					position: absolute;
					left: 5px;
					top: 1px;
					width: 5px;
					height: 10px;
					border: solid white;
					border-width: 0 3px 3px 0;
					transform: rotate(45deg);
					display: none;
				}
				:host([checked]) .checkbox-custom::after {
					display: block;
				}
				:host([disabled]) .checkbox-custom {
					background-color: #e9ecef;
					border-color: #ced4da;
				}
				::slotted(label), ::slotted(input) {
					color: #333;
				}
				:host([disabled]) ::slotted(label), :host([disabled]) ::slotted(input) {
					color: #6c757d;
				}
			</style>
		`;
	}

	template() {
		const isChecked = this.checked ? 'checked' : '';
		const isDisabled = this.disabled ? 'disabled' : '';

		return `
			<label part="base">
				<input type="checkbox" ${isChecked} ${isDisabled}>
				<span part="checkbox-custom" class="checkbox-custom"></span>
				<div part="label-container">
					<slot name="label"></slot>
				</div>
			</label>
		`;
	}
}

customElements.define('ux-checkbox', UxCheckbox);