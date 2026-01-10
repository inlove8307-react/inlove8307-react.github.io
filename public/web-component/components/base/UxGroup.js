class UxGroup extends HTMLElement {
	constructor() {
		super();
		this.baseClass = 'ux-group';
		this.classList.add(this.baseClass);
	}

	connectedCallback() {}
	disconnectedCallback() {}
	attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define('ux-group', UxGroup);