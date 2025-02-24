<template>
  <div id="app">
    <AppHeader />
    <HeaderComponent />
    <BlogComponent />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import BlogComponent from './components/BlogComponent.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    HeaderComponent,
    BlogComponent,
    AppFooter
  }
}
</script>

<style>

</style>
