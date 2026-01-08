class UxContent extends HTMLElement {
	constructor() {
		super();
		this.baseClass = 'ux-content';
		this.classList.add(this.baseClass);
	}

	connectedCallback() {}
	disconnectedCallback() {}
	attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define('ux-content', UxContent);