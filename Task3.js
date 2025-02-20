Vue.component('filter-list', {
    template: `
      <div class="filter-container">
        <h2>Filtered list</h2>
        <input v-model="filterText" placeholder="Write the text">
        <ul>
          <li v-for="(item, index) in filteredItems" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    `,
    data() {
      return {
        filterText: '',
        items: ['Passionfruit', 'Banana', 'Dragon Fruit', 'Lici', 'Pineapple', 'Coconut']
      };
    },
    computed: {
      filteredItems() {
        return this.items.filter(item => 
          item.toLowerCase().includes(this.filterText.toLowerCase())
        );
      }
    }
  });