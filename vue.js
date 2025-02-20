Vue.component('article-filter', {
    data() {
      return {
        tags: ["Кухня", "Спальня", "Здание", "Архитектура", "Планировка", "Спальня"],
        selectedTag: null,
        articles: [
          { id: 1, title: "Статья 1", content: "Текст статьи 1", tag: "Кухня" },
          { id: 2, title: "Статья 2", content: "Текст статьи 2", tag: "Спальня" },
          { id: 3, title: "Статья 3", content: "Текст статьи 3", tag: "Здание" },
          { id: 4, title: "Статья 4", content: "Текст статьи 4", tag: "Архитектура" },
          { id: 5, title: "Статья 5", content: "Текст статьи 5", tag: "Планировка" },
          { id: 6, title: "Статья 6", content: "Текст статьи 6", tag: "Спальня" },
        ],
      };
    },
    computed: {
      filteredArticles() {
        return this.selectedTag ? this.articles.filter(a => a.tag === this.selectedTag) : this.articles;
      }
    },
    methods: {
      selectTag(tag) {
        this.selectedTag = this.selectedTag === tag ? null : tag;
      }
    },
    template: `
    <div>
      <div class="tags-container">
        <button 
          v-for="tag in tags" 
          :key="tag" 
          @click="selectTag(tag)" 
          :class="{ active: selectedTag === tag }">
          {{ tag }}
        </button>
    </div>
  `
});
