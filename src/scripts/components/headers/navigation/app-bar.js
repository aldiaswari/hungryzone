class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
    <div class="app-bar__menu">
    <button id="hamburgerButton" class="hamburger-menu" aria-label="click to show navbar">☰</button>
    </div>
    <div class="app-bar__brand">
    <img class="logo" src="/hungryzone.png" alt="Hungry Logo" crossorigin="anonymous"/>
    </div>
    <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://github.com/aldiaswari">About</a></li>
        </ul>
    </nav>
    </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
