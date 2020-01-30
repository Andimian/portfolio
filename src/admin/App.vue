<template lang="pug">
  include ../mixins.pug

  <!DOCTYPE html>
  html(lang="ru")
    include ../includes/head.pug
    block title
      title Твоя админочка
      
    body
      .wrapper
        header.header
          .container.container--header
            .header__user
              .header__user-pic-wrap
                img(src='./assets/images/user.jpg').header__user-pic
              .header__user-name Антон Соколов
            .header__title Панель администрирования
            .header__exit
              a(href='#').header__exit-link Выйти
        +nav('nav', {'Обо мне': 'about-me', 'Работы': 'projects', 'Отзывы': 'reviews'}, 0)

</template>

<script>

</script>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  /* @import "reset.css"; */
  @import 'reset-css';
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";

  /* ================================шапка==================================*/
  .header {
    background-color: #5b6bb2;
    height: 8vh;
    color: #9aa0b5;
  }

  .container--header {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
  }
/* ============первый блочок (слева если что)*/
  .header__user {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .header__user-pic-wrap {
    width: 20%;
    .header__user-pic {
        border-radius: 100px;
        padding: 5%;
    }
  }

  .header__user-name {
    color: white;
  }
/* ============второй блочок=============== */
  .header__title {
    text-align: center;
    margin: auto;
  }
/* ============третий блочок=============== */
  .header__exit {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5%;
  }

  .header__exit-link {
    &:hover {
      color: orange;
    }
  }


 /*===============================навигашка======================== */
  .nav {
    height: 8vh;
    color:  #9aa0b5;
  }

  .container--nav {
    display: flex;
    align-items: center;
    padding-left: 5%;
  }

  .nav__list {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .nav__item {
    margin-right: 5%;
  }

  .nav__link {
    &:hover {
      color: orange;
    }
  }



</style>

