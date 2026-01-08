class UxSection extends HTMLElement {
	constructor() {
		super();
		this.baseClass = 'ux-section';
		this.classList.add(this.baseClass);
	}

	connectedCallback() {}
	disconnectedCallback() {}
	attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define('ux-section', UxSection);