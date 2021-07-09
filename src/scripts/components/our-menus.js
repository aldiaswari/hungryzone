class OurMenus extends HTMLElement {
  connectedCallback() {
    this.render();
  }
      
  render() {
    this.innerHTML = `
          
      <section class="speciality" id="speciality">
  
      <h1 class="heading"> our <span>Speciality</span> </h1>
  
      <div class="box-container">
  
      <div class="box">
      <picture>
      <source media="(max-width: 600px)" srcset="./images/s-img-1-small.jpg">
      <img class="image lazyload" data-src="./images/s-img-1-large.jpg" alt="tasty burger">
      </picture>
          <div class="content">
              <h3>Tasty Burger</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
          </div>
      </div>
      <div class="box">
      <picture>
            <source media="(max-width: 600px)" srcset="./images/s-img-2-small.jpg">
            <img class="image lazyload" data-src="./images/s-img-2-large.jpg" alt="tasty pizza">
      </picture>
          <div class="content">
              <h3>Tasty Pizza</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
          </div>
      </div>
      <div class="box">
      <picture>
      <source media="(max-width: 600px)" srcset="./images/s-img-3-small.jpg">
      <img class="image lazyload" data-src="./images/s-img-3-large.jpg" alt="tasty pizza">
        </picture>
          <div class="content">
              <h3>Cold ice-cream</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
          </div>
      </div>
      <div class="box">
      <picture>
      <source media="(max-width: 600px)" srcset="./images/s-img-4-small.jpg">
      <img class="image lazyload" data-src="./images/s-img-4-large.jpg" alt="cold drink">
      </picture>
          <div class="content">
              <h3>Cold Drinks</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
          </div>
      </div>
      <div class="box">
      <picture>
      <source media="(max-width: 600px)" srcset="./images/s-img-5-small.jpg">
      <img class="image lazyload" data-src="./images/s-img-5-large.jpg" alt="tasty sweet">
      </picture>
          <div class="content">
              <h3>Tasty Sweets</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
          </div>
      </div>
      <div class="box">
      <picture>
      <source media="(max-width: 600px)" srcset="./images/s-img-6-small.jpg">
      <img class="image lazyload" data-src="./images/s-img-6-large.jpg" alt="healty brekfast">
      </picture>
          <div class="content">
              <h3>healty breakfast</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
          </div>
      </div>
  
      </div>
  
      </section>
          `;
  }
}
      
customElements.define('our-menus', OurMenus);