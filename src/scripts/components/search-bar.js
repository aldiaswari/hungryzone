class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  
  render() {
    this.innerHTML = `
      <div id="search-container" class="search-container">
      <input id="query" type="text" placeholder="Search favorite restaurant...">
      </div>
      `;
  }
}
  
customElements.define('search-bar', SearchBar);