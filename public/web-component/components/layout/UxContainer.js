class UxContainer extends HTMLElement {
	constructor() {
		super();
		this.baseClass = 'ux-container';
		this.classList.add(this.baseClass);
	}

	connectedCallback() {}
	disconnectedCallback() {}
	attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define('ux-container', UxContainer);