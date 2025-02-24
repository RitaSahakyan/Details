<template>
    <nav class="nav container">
  <div class="nav_header">
    <img src="Img/Logo.svg" alt="" class="nav_logo" />
    <div class="nav_name">Interno</div>
  </div>
  <div class="nav_items">
    <a href="#" class="nav_item">Домой</a>
    <a href="#" class="nav_item">Проект</a>
    <a href="#" class="nav_item">Блог</a>
  </div>
</nav>
</template>

<script>
export default {
  name:"AppHeader",
};
</script>

<style>
.container {
  padding-left: calc(50% - 1200px / 2);
  padding-right: calc(50% - 1200px / 2);
}
a{
  text-decoration: none;
}
.nav{
  margin-top: 40px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  gap: 700px;
}
  .nav_header{
      display: flex;
      gap: 10px;
  }
  .nav_name{
  width: 133px;
  font-size: 50px;
  color: #292F36;
  }
  .nav_logo img{
      width: 34px;
      height: 34px;
  }
  .nav_items{
      display: flex;
      justify-content: space-between;
      width: 258px;
  }
  .nav_item{
      font-size: 20px;
      color: #292F36;
      
  }
</style>