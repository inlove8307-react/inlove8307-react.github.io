class UxSubject extends HTMLElement {
	constructor() {
		super();
		this.baseClass = 'ux-subject';
		this.classList.add(this.baseClass);
	}

	static get observedAttributes() {
		return [];
	}

	connectedCallback() {
		this.render();
	}
	disconnectedCallback() {}
	attributeChangedCallback(name, oldValue, newValue) {}
	adoptedCallback() {}

	render() {
		this.innerHTML = `
			${this.template()}
		`;
	}

	template() {
		let children = '';

		Array.from(this.children).map(item => {
			children += item.outerHTML;
		});

		return `
			${children}
		`;
	}
}

customElements.define('ux-subject', UxSubject);