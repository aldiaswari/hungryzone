class HomeReviews extends HTMLElement {
  connectedCallback() {
    this.render();
  }
    
  render() {
    this.innerHTML = `
    <section class="review" id="review">

    <h1 class="heading center"> our customers <span>reviews</span> </h1>

    <div class="box-container">

        <div class="box">
        <picture>
        <source media="(max-width: 600px)" srcset="./images/pic1-small.jpg">
        <img data-src="./images/pic1-large.jpg"
              class="lazyload"
              data-srcset="./images/pic1-small.jpg 480w, ./images/pic1-large.jpg 800w"
              sizes="(max-width: 600px) 480px, 800px"
              alt="aldiaswari">
        </picture>
            <h3>Aldi Aswari</h3>
            <div class="stars">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
        </div>
        <div class="box">
        <picture>
        <source media="(max-width: 600px)" srcset="./images/pic2-small.jpg">
          <img data-src="./images/pic2-large.jpg"
              class="lazyload"
              data-srcset="./images/pic2-small.jpg 480w, ./images/pic2-large.jpg 800w"
              sizes="(max-width: 600px) 480px, 800px"
              alt="stringinteger">
        </picture>
            <h3>String Integer</h3>
            <div class="stars">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
        </div>
     </div>

    </section>
    `;
  }
}
    
customElements.define('home-review', HomeReviews);