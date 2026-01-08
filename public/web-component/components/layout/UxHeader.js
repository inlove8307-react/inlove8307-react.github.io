class UxHeader extends HTMLElement {
	constructor() {
		super();
		this.baseClass = 'ux-header';
		this.classList.add(this.baseClass);
	}

	connectedCallback() {}
	disconnectedCallback() {}
	attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define('ux-header', UxHeader);