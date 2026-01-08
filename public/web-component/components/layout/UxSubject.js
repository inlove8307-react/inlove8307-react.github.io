class UxSubject extends HTMLElement {
	constructor() {
		super();
		this.baseClass = 'ux-subject';
		this.classList.add(this.baseClass);
	}

	connectedCallback() {}
	disconnectedCallback() {}
	attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define('ux-subject', UxSubject);