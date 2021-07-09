class ContentRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="content">
    <h2 class="content__heading title">Best <span>Restaurant</span></h2>
    <hr class="line-resto">
    <loading-indicator></loading-indicator>
    <div id="restaurant" class="restaurant">
    </div>
    </div>
      `;
  }
}

customElements.define('content-restaurant', ContentRestaurant);
