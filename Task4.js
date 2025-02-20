Vue.component('product-item', {
    props: ['product'],
    template: `
      <div class="product-card">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <span>\${{ product.price.toFixed(2) }}</span>
      </div>
    `
  });
  
  Vue.component('product-list', {
    template: `
      <div class="product-container">
        <h2>Tropical Cocktails</h2>
        <div class="sort-buttons">
          <button @click="sortAsc">Sort by Price (Low to High)</button>
          <button @click="sortDesc">Sort by Price (High to Low)</button>
        </div>
        <div class="product-grid">
          <product-item v-for="(product, index) in products" :key="index" :product="product"></product-item>
        </div>
      </div>
    `,
    data() {
      return {
        products: [
          { name: 'Pina Colada', description: 'A tropical blend of pineapple and coconut.', price: 8.99 },
          { name: 'Mojito', description: 'Refreshing mint and lime cocktail.', price: 7.49 },
          { name: 'Mai Tai', description: 'A sweet and tangy rum-based drink.', price: 9.99 },
          { name: 'Blue Lagoon', description: 'A vibrant blue cocktail with vodka and lemonade.', price: 6.99 },
          { name: 'Tequila Sunrise', description: 'A stunning mix of tequila, orange juice, and grenadine.', price: 8.49 }
        ]
      };
    },
    methods: {
      sortAsc() {
        this.products.sort((a, b) => a.price - b.price);
      },
      sortDesc() {
        this.products.sort((a, b) => b.price - a.price);
      }
    }
  });