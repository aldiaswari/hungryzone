class OurServices extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="restaurant-services">
        <section class="page-section">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading title">Our <span>Services</span></h2>
                    <h3 class="section-subheading">Find your favorite restaurant</h3>
                </div>
            </div>
        </section>
        <div class="row">
            <div class="col">
                <span>
                <img class"img-nearby lazyload" src="../assets/location-resto.png" alt="nearby"></img>
                </span>
                <h4 class="my-best-restaurant">Restaurant</h4>
                <p class="text-best-restaurant">Banyak restaurant kesukaanmu dengan makanan yang lezat!</p>
            </div>
            <div class="col">
                <span>
                <img sclass"img-asyik lazyload" src="../assets/nyaman.png" alt="asyik"></img>
                </span>
                <h4 class="my-best-restaurant">Nyaman</h4>
                <p class="text-best-restaurant">Dengan tempat yang asyik untuk bersantai sambil menghidangkan makanan</p>
            </div>
            <div class="col">
                <span>
                <img class"img-pelayanan lazyload" src="../assets/pelayanan.png" alt="pelayan"></img>
                </span>
                <h4 class="my-best-restaurant">Pelayanan</h4>
                <p class="text-best-restaurant">Dengan pelayanan yang baik dan ramah membuat kamu semakin betah</p>
            </div>
        </div> 
      </div>
     `;
  }
}

customElements.define('our-services', OurServices);
