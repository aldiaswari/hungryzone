class ErrorMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="error-data">
        <h1>Gagal memuat konten!</h1>
        <p>Silahkan refresh kembali halaman untuk mencoba lagi</p>
      </div>
    `;
  }
}

customElements.define('error-message', ErrorMessage);
