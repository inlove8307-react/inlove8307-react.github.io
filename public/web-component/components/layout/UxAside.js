class UxAside extends HTMLElement {
	constructor() {
		super();
		this.baseClass = 'ux-aside';
		this.classList.add(this.baseClass);
	}

	connectedCallback() {}
	disconnectedCallback() {}
	attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define('ux-aside', UxAside);