class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
    <div class="hero-inner">
      <p class="welcome-text">Welcome!</p>
      <h1 class="title"><span>Hungry</span>Zone</h1>
      <p class="tagline">The best restaurant recommendation site in all of Indonesia</p>
    </div>
  </div>
    `;
  }
}

customElements.define('hero-image', Hero);
