<template>
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
      
      <div v-if="selectedTag" class="articles">
        <div v-for="article in filteredArticles" :key="article.id" class="article">
          <h3>{{ article.title }}</h3>
          <p>{{ article.content }}</p>
        </div>
      </div>
      <p v-else></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tags: ["Кухня", "Спальня", "Здание", "Архитектура", "Планировка"],
        selectedTag: null,
        articles: [
          { id: 1, title: "Статья 'Кухня'", content: "Текст статьи 1", tag: "Кухня" },
          { id: 2, title: "Статья 'Спальня'", content: "Текст статьи 2", tag: "Спальня" },
          { id: 3, title: "Статья 'Здание'", content: "Текст статьи 3", tag: "Здание" },
          { id: 4, title: "Статья 'Архитектура'", content: "Текст статьи 4", tag: "Архитектура" },
          { id: 5, title: "Статья 'Планировка'", content: "Текст статьи 5", tag: "Планировка" },
        ],
      };
    },
    computed: {
      filteredArticles() {
        return this.selectedTag ? this.articles.filter(a => a.tag === this.selectedTag) : [];
      }
    },
    methods: {
      selectTag(tag) {
        this.selectedTag = this.selectedTag === tag ? null : tag;
      }
    }
  };
  </script>
  