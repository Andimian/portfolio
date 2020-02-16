<template lang="pug">
    .about-me#about-me
      .container.container--about-me
          .about-me__title-wrap 
              h1.about-me__title-about {{pageTitle}}
              btn
              //- button.about-me__title-ad-group Добавить группу
          ul.about-me__editor-list(
            "adding"
          )
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
</template>

<script>
  export default {
    components: {
      btn: () => import('../btn.vue'),
    },
    props: {
      pageTitle: String,
      },
    }
</script>

<style lang="postcss" scoped>
    .about-me {
        padding-bottom: 5rem;
    }

  .about-me__title-wrap {
    height: 8rem;
    display: flex;
    align-items: center;
  }

  .about-me__title-about {
    margin-right: 4rem;
  }

  

/* ul с панельками редактора */
  .about-me__editor-list {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: flex-start */
    
  }

  .about-me__editor-item {
    width: 48%;
    height: 20rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
    &:nth-child(2) {
      margin-right: 0;
    }
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
    width: 5%;
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
      left: -20%;
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
      left: 70%;
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


</style>
