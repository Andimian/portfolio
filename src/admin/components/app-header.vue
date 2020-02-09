<template lang="pug">
    header.header
        .container.container--header
            .header__user
                .header__user-pic-wrap
                    img(src='../assets/images/user.jpg').header__user-pic
                .header__user-name Антон Соколов
            .header__title Панель администрирования
            .header__exit
                a(href='#').header__exit-link Выйти
</template>

<script>
export default {
    // props: {
    //     title: String
    // },
    // methods: {
    //     async logout() {
    //         await localStorage.removeItem('token');
    //         window.location = window.location.origin
    //     }
    // }
}
</script>

<style lang="postcss" scoped>
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
        z-index: 11230;
        &:hover {
        color: orange;
        }
    }


</style>


