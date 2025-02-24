<template>
    <footer class="footer container">
      <div class="footer_links">
        <div class="nav_header">
          <img src="Img/Logo.svg" alt="" class="nav_logo" />
          <div class="nav_name">Interno</div>
        </div>
        <div class="footer_websites">
          <img src="Img/twit.svg" alt="" />
          <img src="Img/inst.svg" alt="" />
        </div>
      </div>
      <div class="footer_pages">
        <ul>
          <li class="footer_pages-items">Страницы</li>
          <li class="footer_pages-items">Домой</li>
          <li class="footer_pages-items">Проект</li>
          <li class="footer_pages-items">Блог</li>
        </ul>
      </div>
      <div class="footer_contacts">
        <ul>
          <li class="footer_contacts-items">Контакты</li>
          <li class="footer_contacts-items">
            55 East Birchwood Ave. Brooklyn, New York 11201
          </li>
          <li class="footer_contacts-items">contact@interno.com</li>
          <li class="footer_contacts-items">(123) 456 - 7890</li>
        </ul>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "AppFooter",
  };
  </script>
  
  <style scoped>
  .footer{
    display: flex;
    justify-content: space-between;
    height: 437px;
    margin-top: 63px;
}
    .footer_links{
        display: flex;
        flex-direction: column;
    }
    .footer_websites img{
        margin-top: 31px;
        margin-right: 54px;
        width: 18px ;
        height: 22px;
    }
    .footer_pages{
        width: 125px;
    }
    .footer_pages-items{
        font-size: 22px;
        color: #4D5053;
    }
    .footer_pages ul{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 238px;
    }
    .footer_pages-items:first-child{
        font-size: 31px;
        color: #292F36;
    }
    .footer_contacts{
        width: 258px;
    }
    .footer_contacts-items{
        font-size: 22px;
        color: #4D5053;
    }
    .footer_contacts ul{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 238px;
    }
    .footer_contacts-items:first-child{
        font-size: 31px;
        color: #292F36;
    }
  </style>
  