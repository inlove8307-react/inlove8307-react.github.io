class UxSection extends HTMLElement {
	constructor() {
		super();
		this.baseClass = 'ux-section';
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

customElements.define('ux-section', UxSection);