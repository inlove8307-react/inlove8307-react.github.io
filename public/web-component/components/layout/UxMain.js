class UxMain extends HTMLElement {
	constructor() {
		super();
		this.baseClass = 'ux-main';
		this.classList.add(this.baseClass);
	}

	connectedCallback() {}
	disconnectedCallback() {}
	attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define('ux-main', UxMain);