class UxField extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.baseClass = 'ux-field';
		this.classList.add(this.baseClass);
	}

	static get observedAttributes() {
		return ['valid'];
	}

	get valid() {
		return this.getAttribute('valid');
	}
	set valid(value) {
		this.setAttribute('valid', value);
	}

	connectedCallback() {
		this.render();

		this.shadowRoot.querySelector('.cancel').addEventListener('click', (event) => {
			this.handleCancel(event);
			this.dispatchEvent(new CustomEvent('cancel'));
		});

		this.shadowRoot.querySelector('.submit').addEventListener('click', (event) => {
			this.handleSubmit(event);
			this.dispatchEvent(new CustomEvent('submit'));
		});
	}
	disconnectedCallback() {}
	attributeChangedCallback(name, oldValue, newValue) {}
	adoptedCallback() {}

	handleCancel() {}
	handleSubmit() {}

	render() {
		this.shadowRoot.innerHTML = `
			${this.style()}
			${this.template()}
		`;
	}
	style() {
		return `
			<style>
				:host {}
			</style>
		`;
	}
	template() {
		return `
			<div part="base">
				<div part="label">
					<slot name="label"></slot>
				</div>
				<div part="input">
					<slot name="input"></slot>
				</div>
				<div part="message">
					<slot name="message"></slot>
				</div>
				<div part="valid">
					<slot name="valid"></slot>
				</div>
				<div part="invalid">
					<slot name="invalid"></slot>
				</div>
				<div part="buttons" class="buttons">
					<button type="button" part="button cancel" class="cancel">cancel</button>
					<button type="button" part="button submit" class="submit">submit</button>
				</div>
			</div>
		`;
	}
}

customElements.define('ux-field', UxField);