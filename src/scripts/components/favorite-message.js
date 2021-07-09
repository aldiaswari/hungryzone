class FavoriteMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="error-data">
        <h1>Data tidak tersedia!</h1>
        <p class="favorite-message">Data restaurant favorit tidak ditemukan</p>
      </div>
    `;
  }
}

customElements.define('favorite-message', FavoriteMessage);
