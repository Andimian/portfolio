<template lang="pug">
    .reviews#reviews
        .container.container--reviews
        .create-review
            h3.create-review__title Добавить отзыв
            form.create-review__form-block
            .create-review__form-avatar
                .create-review__form-pic-wrap
                .create-review__form-pic-title добавить фото
            .create-review__form-info
                .create-review__form-info-row
                label.create-review__form-info-name
                    .create-review__form-info-name-title Имя автора
                    input(type='text').create-review__form-info-input
                label.create-review__form-info-titul
                    .create-review__form-info-titul-title Титул автора
                    input(type='text').create-review__form-info-input
                label.create-review__form-info-rev
                .create-review__form-info-name-title Отзыв
                textarea(type='text').create-review__form-info-textarea
                .create-review__form-btns
                input(type='reset' value='Отмена').create-review__form-info-reset
                input(type='submit' value='Загрузить').create-review__form-info-submit
        .confirm-review
            .load-btn
            .load-btn-icon
            .load-btn-title Добавить работу
            .confirm-review__preview
            .confirm-review__preview-top
                .confirm-review__preview-pic-wrap
                //- img(src='./assets/images/user.jpg').confirm-review__preview-pic
                .confirm-review__preview-wrap
                .confirm-review__preview-name имя фамилия
                .confirm-review__preview-titul программист
            .confirm-review__preview-rev Пока что у нас получилось так, что во всех элементах списка будет один и тот же текст — это не очень-то интересно.
            .confirm-review__preview-btns
                .edit Править
                .delete Удалить  
</template>

<script>

</script>

<style lang="postcss" scoped>


</style>
