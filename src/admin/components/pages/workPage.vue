<template lang="pug">
    .projects#projects
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
                //- img(src='../../assets/images/burgers.jpg').preview__desc-pic
            .preview__desc-rows-wrap
                .preview__desc-name название работы  
                .preview__desc-text Описание
                .preview__desc-link-wrap
                a.preview__desc-link Ссылка
                .preview__desc-icons
                .edit Править
                .delete Удалить     
</template>

<script>

</script>

<style lang="postcss" scoped>
      /* страница добавление работы============================================================================ */
.projects {
  /* background-color: #cbccd4; */
  min-height: 50vh;
  padding-bottom: 5rem;
}

.container--projects {
  margin-bottom: 5rem;

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
  height: 100vh;
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
  width: 20rem;
  height: 28rem;
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
  width: 20rem;
  height: 28rem;
  color: grey;
  background-color: #fff;
}

.preview__desc-pic-wrap {
  width: 100%;

  .preview__desc-pic {
    width: 100%;
    object-fit: cover;
  }
}

.preview__desc-rows-wrap {
  padding-left: 2rem;
  padding-top: 2rem;
}

.preview__desc-name {
  color: black;
  margin-bottom: 1rem;
}

.preview__desc-text {
  color: grey;
  margin-bottom: 1rem;
}

.preview__desc-link-wrap {
  color: blue;
  margin-bottom: 3rem;
}

.preview__desc-icons {
  width: 80%;
  display: flex;
  justify-content: space-between;
}

.edit {
  position: relative;
  &:after {
    content: '';
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: 150%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: svg-load("pencil.svg", fill=blue, width=100%, height=100%);
  }
}

.delete {
  position: relative;
  &:after {
    content: '';
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: 150%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: svg-load("cross.svg", fill=red, width=100%, height=100%);
  }
}

</style>
