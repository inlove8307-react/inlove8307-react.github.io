class UxArticle extends HTMLElement {
	constructor() {
		super();
		this.baseClass = 'ux-article';
		this.classList.add(this.baseClass);
	}

	connectedCallback() {}
	disconnectedCallback() {}
	attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define('ux-article', UxArticle);