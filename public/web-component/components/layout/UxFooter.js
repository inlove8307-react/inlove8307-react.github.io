class UxFooter extends HTMLElement {
	constructor() {
		super();
		this.baseClass = 'ux-footer';
		this.classList.add(this.baseClass);
	}

	connectedCallback() {}
	disconnectedCallback() {}
	attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define('ux-footer', UxFooter);