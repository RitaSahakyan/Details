<template>
        <div class="details container">
        <div class="details_content">
            <p class="details_content-heading">
                Создадим лучший макет перепланировки
            </p>
            <img :src="blogImg1" alt="" class="details_content-img1">
            <div class="details_content-data">
                <p>26 Декабрь,2022 </p>
                <p>Интерьер / Домой / Декор</p>
            </div>
            <p class="details_content-text">
                В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»
            </p>
            <div class="details_content-quato">
                <img :src="doubleQuotes" alt="" class="details_content-quato-img">
                <p class="details_content-quato-text">Какая-то умная и красивая цитата</p>
            </div>
            <p class="details_content-heading">
                Design sprints are great
            </p>
            <p class="details_content-text">
                В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»
                <ol class="details_content-list">
                    <li class="details_content-list-item">С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.</li>
                <li class="details_content-list-item">С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.</li>
                <li class="details_content-list-item">С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.</li></ol>
            </p>
            <img :src="blogImg2" alt="" class="details_content-img2">
            <p class="details_content-text">
                В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. 
            </p>
        </div>     
        <div>
          <p class="tags_heading">Тэги</p>
          <ArticleFilter />
        </div>
      </div>

</template>

<script>
import ArticleFilter from './ArticleFilter.vue';

export default {
  components: {
    ArticleFilter
  },
  data(){
    return{
        blogImg1: require('@/assets/Blog-det-2.svg'),
        blogImg2: require('@/assets/Blog-det-3.svg'),
        doubleQuotes:require('@/assets/double-quotes.png')
    }
  }
};
</script>

<style>
.details{
    display: flex;
    gap: 52px;
}
    .details_content{
        display: flex;
        flex-direction: column;
    }
        .details_content-heading{
            color: #292F36;
            font-size: 50px;
            line-height: 150%;
            letter-spacing: 2%;
            width: 684px;
            height: 126px;
            margin-bottom: 21px;
        }
        .details_content-img1{
            width: 799px;
            height: 539px;
            margin-bottom: 46px ;
        }
        .details_content-data{
            width: 804px;
            height: 24px;
            display: flex;
            justify-content: space-between;
            color: #4D5053;
            margin-bottom: 48px;
        }
        .details_content-text{
            width: 799px;
            font-size: 22px;
            line-height: 150%;
            letter-spacing: 1%;
        }
        .details_content-quato{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 799px;
            height: 267px;
            background-color: #F4F0EC;
            border-radius: 30px;
            margin-top: 35px;
            margin-bottom: 27px;
        }
            .details_content-quato-img{
                width:106px;
                height: 115px;

            }
            .details_content-quato-text{
                font-size: 25px;
                color: #CDA274;
                text-align: center;
                width: 345px;
            }
        .details_content-list{
            margin-top: 24px;
            margin-bottom: 44px;
            width: 733px;
        }
            .details_content-list-item{
                color: #4D5053;
                font-size: 22px;
                line-height: 150%;
                letter-spacing: 1%;
            }
            .details_content-list-item:first-child{
                margin-bottom: 32px;
            }
            .details_content-list-item:last-child{
                margin-top: 32px;
            }
        .details_content-img2{
            width:799px;
            height: 365px;
            margin-bottom: 35px;
        }

ol li::marker {
    color: #CDA274;
}

  .tags_heading{
    color: #292F36;
    font-size: 29px;
    margin-bottom: 24px;
  }</style>