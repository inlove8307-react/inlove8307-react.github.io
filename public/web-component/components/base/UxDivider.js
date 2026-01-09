class UxDivider extends HTMLElement {
	constructor() {
		super();
		this.baseClass = 'ux-divider';
		this.classList.add(this.baseClass);
	}

	connectedCallback() {}
	disconnectedCallback() {}
	attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define('ux-divider', UxDivider);