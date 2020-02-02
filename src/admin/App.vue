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
        +navInCont('nav', {'Обо мне': 'about-me', 'Работы': 'projects', 'Отзывы': 'reviews'}, 'Обо мне')
        .about-me
          .container.container--about-me
            h1.about-me__title Блок "Обо мне"
            .about-me__editor
              form.about-me__editor-build-group
                //- label.form-label
                //-   .form__label-title Введите ваше имя
                //-   .form__input-wrap
                //-     input(type="text" name="name" placeholder='Василиса Прекрасная' required).form__input
                //-     +icon('Avatar', 'form__input-pic')
              form.about-me__editor-edit-group
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

/* ==========================================Шапка========================*/
  .header {
    background-color: #5b6bb2;
    height: 8vh;
    color: #9aa0b5;
  }

  .container--header {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
  }
/* ============первый блочок ===============*/
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


/*=========================================навигашка===================== */
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
    height: 100%;
  }

  .nav__item {
    margin-right: 5%;
    height: 100%;
    padding-top: 2%;
    position: relative;
    &:last-child {
    margin-right: 0;
    }
    &:hover {
    color:orange;
    transition: .2s;
    }
    &:before {
      position: absolute;
      content: "";
      height: 2px;
      width: 0;
      background-color: orange;
      transition: width .2s ease-in-out, left .2s ease-in-out;
      left: 50%;
      bottom: 0;
    }
    &:after {
      position: absolute;
      content: "";
      height: 2px;
      width: 0;
      background-color: orange;
      transition: width .2s ease-in-out;
      left: 50%;
      bottom: 0;
    }
    &:hover:before{
      width: 60%;
      left: -10%;
    }
    &:hover::after{
      width: 60%;
    }

    &--active {
      color: orange;
      &:before {
      position: absolute;
      content: "";
      height: 2px;
      width: 0;
      background-color: orange;
      transition: width .2s ease-in-out, left .2s ease-in-out;
      left: 50%;
      bottom: 0;
      width: 60%;
      left: -10%;
      }
      &:after {
        position: absolute;
        content: "";
        height: 2px;
        width: 0;
        background-color: orange;
        transition: width .2s ease-in-out;
        left: 50%;
        bottom: 0;
        width: 60%;
      }
    }
  }

  .nav__link {
  }


/* =======================================Блок Обо мне=================== */
  .about-me {
    background-color: #cbccd4;
    height: 60vh;
  }
  
  .container--about-me {

  }

  .about-me__title {
    height: 20%;
    display: flex;
    align-items: center;
  }

  .about-me__editor {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 80%;
  }

  .about-me__editor-build-group {
    background-color: white;
    height: 80%;
    margin-right: 5%;
  }

  .about-me__editor-edit-group {
    background-color: white;
    height: 80%;

  }


</style>

