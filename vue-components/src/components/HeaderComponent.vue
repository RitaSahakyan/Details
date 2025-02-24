<template>
    <header class="header">
      <img :src="blogHeader" class="header_img" />
    </header>
</template>

<script>
export default {
  name:"HeaderComponent",
  data() {
    return {
      blogHeader: require('@/assets/Blog-det.svg')
    };
}
}

</script>

<style>
.header{
    height: 356px;
    margin-top: 45px;
    position: relative;
    margin-bottom:200px;
}
    .header_img{
        width: 100%;
        height: 356px;
        overflow:hidden;
    }
</style>