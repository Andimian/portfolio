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
            .about-me__title-wrap 
              h1.about-me__title-about Блок "Обо мне"
              button.about-me__title-ad-group Добавить группу
            ul.about-me__editor-list
              //- дефолтная формочка
              li.about-me__editor-item
                form.form-new
                  .form-new__top
                    input(type="text" name="name" placeholder='название новой группы' required).form-new__top-input
                    .form-new__top-icons
                      .form-new__top-icon-default
                      .form-new__top-icons-edit
                  .form-new__bottom
                    input(type="text" name="name" required).form-new__bottom-scill
                    input(type="number" name="number" placeholder='0').form-new__bottom-percent
                    .form-new__bottom-icon
                //- формы с сервера
              li.about-me__editor-item      
                form.form-edit
                  .form-new__top Frontend
                    .form-new__top-icons
                      .form-new__top-icon-default
                      .form-new__top-icons-edit
                  .form-edit-skill
                    input(type="text" name="scill" placeholder='HTML').form-edit-skill__name
                    input(type="number" name="scill" placeholder='50').form-edit-skill__percent
                    .form-edit-skill__percent-pic-wrap %
                    .form-edit-skill__btns
                      .form-edit-skill__btns-default
                      .form-edit-skill__btns-edit
                  .form-edit-skill
                    input(type="text" name="scill" placeholder='CSS').form-edit-skill__name
                    input(type="number" name="scill" placeholder='50').form-edit-skill__percent
                    .form-edit-skill__percent-pic-wrap %
                    .form-edit-skill__btns
                      .form-edit-skill__btns-default
                      .form-edit-skill__btns-edit
                  .form-edit-skill
                    input(type="text" name="scill" placeholder='javascript').form-edit-skill__name
                    input(type="number" name="scill" placeholder='50').form-edit-skill__percent
                    .form-edit-skill__percent-pic-wrap %
                    .form-edit-skill__btns
                      .form-edit-skill__btns-default
                      .form-edit-skill__btns-edit
                  .form-new__bottom
                    input(type="text" name="name" placeholder='новый навык' required).form-new__bottom-scill
                    input(type="number" name="name" placeholder='0').form-new__bottom-percent
                    .form-new__bottom-icon
              li.about-me__editor-item
                form.form-edit
                  .form-new__top Frontend
                    .form-new__top-icons
                      .form-new__top-icon-default
                      .form-new__top-icons-edit
                  .form-edit-skill
                    input(type="text" name="scill" placeholder='HTML').form-edit-skill__name
                    input(type="number" name="scill" placeholder='50').form-edit-skill__percent
                    .form-edit-skill__percent-pic-wrap %
                    .form-edit-skill__btns
                      .form-edit-skill__btns-default
                      .form-edit-skill__btns-edit
                  .form-edit-skill
                    input(type="text" name="scill" placeholder='CSS').form-edit-skill__name
                    input(type="number" name="scill" placeholder='50').form-edit-skill__percent
                    .form-edit-skill__percent-pic-wrap %
                    .form-edit-skill__btns
                      .form-edit-skill__btns-default
                      .form-edit-skill__btns-edit
                  .form-edit-skill
                    input(type="text" name="scill" placeholder='javascript').form-edit-skill__name
                    input(type="number" name="scill" placeholder='50').form-edit-skill__percent
                    .form-edit-skill__percent-pic-wrap %
                    .form-edit-skill__btns
                      .form-edit-skill__btns-default
                      .form-edit-skill__btns-edit
                  .form-new__bottom
                    input(type="text" name="name" placeholder='новый навык' required).form-new__bottom-scill
                    input(type="number" name="name" placeholder='0').form-new__bottom-percent
                    .form-new__bottom-icon
        .projects
          .container.container--projects
            .projects__add
              .projects__title Добавление работы
              form.projects__add-pic
                label.projects__add-pic-label перетащите либо загрузите изображения
                  input.projects__add-pic-submit(type="submit" value="загрузить")
              .projects__add-desc
                form.projects__add-desc-form
                  .projects__add-desc-form-row
                    label.projects__add-desc-form-block
                      .projects__add-desc-form-title Название
                      input(type='text').projects__add-desc-input
                  .projects__add-desc-form-row
                    label.projects__add-desc-form-block
                      .projects__add-desc-form-title Ссылка
                      input(type='text').projects__add-desc-input
                  .projects__add-desc-form-row
                    label.projects__add-desc-form-block
                      .projects__add-desc-form-title Описание
                      textarea.projects__add-desc-textarea
                  .projects__add-desc-form-row
                    label.projects__add-desc-form-block
                      .projects__add-desc-form-title Добавление тега
                      input(type='text').projects__add-desc-input
                  .projects__add-desc-btns
                    input(type="reset" value="Отменa").projects__add-desc-reset
                    input(type="submit" value="Загрузить").projects__add-pic-submit
            form.preview
              .preview-btn-wrap
                .preview-btn-icon           
                button(type='button' value='добавить работу').preview__btn добавить работу
              .preview__desc
                .preview__desc-pic-wrap
                  img(src='./assets/images/burgers.jpg').preview__desc-pic

          







</template>

<script>
</script>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
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
  }

  .about-me__title-wrap {
    height: 8rem;
    display: flex;
    align-items: center;
  }

  .about-me__title-about {
    margin-right: 4rem;
  }

  .about-me__title-ad-group {
    position: relative;
    background-color: transparent;
    &:after {
      width: 0.9rem;
      height: 0.9rem;
      left: -9.9%;
      top: 50%;
      border-radius: 100px;
      transform: translate(-100%, -50%) rotate(45deg);
      position: absolute;
      content: '';
      background: svg-load("remove.svg", fill=white);
    }

    &:before {
      width: 1.5rem;
      height: 1.5rem;
      content: '';
      left: -7%;
      top: 50%;
      border-radius: 100px;
      transform: translate(-100%, -50%);
      position: absolute;
      background-color: rgb(11.7%, 11.7%, 86.2%);
    }
  }

/* ul с панельками редактора */
  .about-me__editor-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start
    
  }

  .about-me__editor-item {
    width: 33rem;
    height: 20rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
  }

/* форма добавления группы */
  .form-new {
    background-color: white;
    height: 100%;
    padding-left: 2rem;
    padding-bottom: 2rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .form-new__top {
    height: 20%;
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgba(39%, 39%, 39%, 0.3);
    align-items: center;
    justify-content: space-between;
  }

  .form-new__top-input {
    width: 50%;
    height: 43%;
    border: none;
    border-bottom: 1px solid rgba(39%, 39%, 39%, 0.3);
        margin-left: 1rem;
  }

  .form-new__top-icons {
    position: relative;
    width: 20%;
    height: 100%;
  }
  
  .form-new__top-icon-default {
    width: 100%;
    height: 100%;
    position: absolute;
    display: none;
    &:before {
      position: absolute;
      left: 50%;
      top: 50%;
      content: '';
      width: 1rem;
      height: 1rem;
      transform: translate(-50%, -50%);
      background: svg-load("pencil.svg", fill=gray, width=100%, height=100%);
      cursor: pointer;
    }
  }
  
  .form-new__top-icons-edit {
    width: 100%;
    height: 100%;
    position: absolute;
    /* display: none; */
    &:before {
      position: absolute;
      left: 20%;
      top: 50%;
      content: '';
      width: 1rem;
      height: 1rem;
      transform: translate(-50%, -50%);
      /* background-color: aqua; */
      background: svg-load("tick.svg", fill=green, width=100%, height=100%);
      cursor: pointer;
    }
      &:after {
      position: absolute;
      left: 50%;
      top: 50%;
      content: '';
      width: 0.9rem;
      height: 0.9rem;
      transform: translate(-50%, -50%);
      /* background-color: aqua; */
      background: svg-load("remove.svg", fill=red, width=100%, height=100%);
      cursor: pointer;
      }
  }

  .form-new__bottom {
    border: none;
    display: flex;
    justify-content: flex-end;
    padding-right: 2rem;
  }

  .form-new__bottom-scill {
    border: none;
    border-bottom: 1px solid rgba(39%, 39%, 39%, 0.3);
    margin-right: 1rem;
    width: 40%;
  }

  .form-new__bottom-percent {
    border: none;
    border-bottom: 1px solid rgba(39%, 39%, 39%, 0.3);
    width: 10%;
    margin-right: 5rem;
  }

  .form-new__bottom-icon {
    position: relative;
    width: 2rem;
    height: 2rem;
    &:after {
      width: 1rem;
      height: 1rem;
      left: -19%;
      top: 50%;
      border-radius: 100px;
      transform: translate(-100%, -50%) rotate(45deg);
      position: absolute;
      content: '';
      background: svg-load("remove.svg", fill=white);
    }

    &:before {
      width: 1.5rem;
      height: 1.5rem;
      content: '';
      left: -7%;
      top: 50%;
      border-radius: 100px;
      transform: translate(-100%, -50%);
      position: absolute;
      background-color: rgba(39%, 39%, 39%, 0.3);
    }
  }

/* формы с сервера */
  .form-edit {
    padding: 0 2rem;
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .form-new__top {
      margin-bottom: 1rem;
    }

    .form-new__top-input {
      border: none;
    }

    .form-new__top-icon-default {
      display: flex;
    }

    .form-new__top-icons-edit {
      display: none;
    }

    .form-new__bottom {
      padding-bottom: 1.5rem;
    }
  }
  .about-me__editor-edit-group-list {
    min-height: 100%;
  }

  .about-me__editor-edit-group-item {
    height: 100%;
  }


  .form-edit-skill {
    display: flex;
    height: 10%;
    
  }

  .form-edit-skill__name {
    border: none;
    width: 70%;
  }

  .form-edit-skill__percent {
    border: none;
    position: relative;
    width: 10%;

    &:before {
      position: absolute;
      content: '';
      width: 2rem;
      height: 2rem;
      top: 0;
      left: 0;
      color: black;
      background-color: red;
    }
  }
  
  .form-edit-skill__percent-pic-wrap {
    color: #9aa0b5;
    margin: auto;
    width: 15%;
  }

  .form-edit-skill__btns {
    position: relative;
    width: 20%;
    height: 100%;

  }
  
  .form-edit-skill__btns-default {
    width: 100%;
    height: 100%;
    position: absolute;
    /* display: none; */
    &:after {
      position: absolute;
      left: 20%;
      top: 50%;
      content: '';
      width: 1rem;
      height: 1rem;
      transform: translate(-50%, -50%);
      background: svg-load("trash.svg", fill=gray, width=100%, height=100%);
      cursor: pointer;
    }

    &:before {
      position: absolute;
      left: 50%;
      top: 50%;
      content: '';
      width: 1rem;
      height: 1rem;
      transform: translate(-50%, -50%);
      background: svg-load("pencil.svg", fill=gray, width=100%, height=100%);
      cursor: pointer;
    }
  }
  
  .form-edit-skill__btns-edit {
    width: 100%;
    height: 100%;
    position: absolute;
    display: none;
    &:before {
      position: absolute;
      left: 20%;
      top: 50%;
      content: '';
      width: 1rem;
      height: 1rem;
      transform: translate(-50%, -50%);
      /* background-color: aqua; */
      background: svg-load("tick.svg", fill=green, width=100%, height=100%);
      cursor: pointer;
    }
      &:after {
      position: absolute;
      left: 50%;
      top: 50%;
      content: '';
      width: 0.9rem;
      height: 0.9rem;
      transform: translate(-50%, -50%);
      /* background-color: aqua; */
      background: svg-load("remove.svg", fill=red, width=100%, height=100%);
      cursor: pointer;
      }
  }



  /* страница добавление работы============================================================================ */
.projects {
  background-color: #cbccd4;
  min-height: 50vh;
}

.projects__title {
  height: 5rem;
  width: 100%;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.projects__add {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  padding: 1rem;
  margin-bottom: 3rem;
}

.projects__add-pic {
  width: 35%;
  height: 15rem;
  border: 1px dotted rgb(41.2%, 41.2%, 41.2%);
  background-color: #c0c0c0;
  margin-right: 3rem;
}

.projects__add-pic-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}

.projects__add-pic-submit {
  width: 15rem;
  height: 5rem;
  background-image: linear-gradient(to top, #d0731b, #dc9322);
  font-size: 18px;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 100px;
  &:hover {
    background-image: linear-gradient(to top, #ff8e24, #bc6a1d);
  }
}

/* блочок с описанием работы */
.projects__add-desc {
  width: 50%;
  margin-bottom: 2rem;
}

.projects__add-desc-form {
  display: flex;
  flex-direction: column;
}

.projects__add-desc-form-row {
  margin-bottom: 2rem;
  width: 80%;
}

.projects__add-desc-input {
  border-bottom: 1px solid grey;
  width: 100%;
  height: 2rem;
}

.projects__add-desc-textarea {
  /* border-bottom: 1px solid grey; */
  width: 100%;
  height: 6rem;
}

.projects__add-desc-reset {
  color: blue;
  margin-right: 4rem;
}

/* кнопка загрузки работы */

.preview {
  display: flex;

}

.preview-btn-wrap {
  width: 30rem;
  height: 38rem;
  color: white;
  cursor: pointer;
  background-image: linear-gradient(to top, #2d0a6d, #12098b);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;
}

.preview__btn {
  color: white;
}

.preview-btn-icon {
  width: 100%;
  height: 40%;
  position: relative;
  margin-bottom: 3rem;
  &:after {
    width: 3rem;
    height: 3rem;
    left: 50%;
    top: 50%;
    /* border-radius: 100px; */
    transform: translate(-50%, -50%) rotate(45deg);
    position: absolute;
    content: '';
    background: svg-load("remove.svg", fill=white);
  }
  &:before {
    width: 15rem;
    height: 15rem;
    left: 50%;
    top: 50%;
    border-radius: 200px;
    transform: translate(-50%, -50%);
    position: absolute;
    border: 1px solid white;
    content: '';
  }
}

.preview__desc {
  width: 30rem;
  height: 38rem;
  color: white;
  background-color: #fff;
}

.preview__desc-pic-wrap {
  width: 100%;

  .preview__desc-pic {
    width: 100%;
    object-fit: cover;
  }
}





</style>

