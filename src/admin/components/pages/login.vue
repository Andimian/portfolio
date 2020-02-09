<template lang="pug">
    .app-login
        .app-login__card
            form.app-login__form(
                @submit="checkForm"
            )
                h4.app-login__form-title Авторизация
                .app-login__input-block.app-login__input-block--login(
                    ref="username"
                )
                    label.app-login__label(for="app-login-username") Логин
                    input.app-login__input#app-login-username(
                        v-model="user.name"
                    )
                .app-login__input-block.app-login__input-block--pass(
                    ref="password"
                )
                    label.app-login__label(for="app-login-pass") Пароль
                    input.app-login__input#app-login-pass(
                        v-model="user.password"
                        type="password"
                    )

                button.btn.btn--gradient-border.app-login__btn(
                    @click="login"
                ) Отправить
            .tooltip(v-if='mistake') {{ mistakeText }}
        

</template>

<script>
import $axios from 'axios';

export default {
    data() {
        return {
            user: {
                name: '',
                password: ''
            },
            errors: [],
            mistakeText: '',
            mistake: false
        }
    },
    methods: {
        clearErrors() {
            this.$refs.username.classList.remove('is-error');
            this.$refs.password.classList.remove('is-error');
        },
        checkForm(e) {
            e.preventDefault();
            this.clearErrors();

            if(this.user.name && this.user.password) {
                return true
            };

            this.errors = [];

            if(!this.user.name) {
                this.errors.push('Введите имя');
                this.$refs.username.classList.add('is-error');
            };

            if(!this.user.password) {
                this.errors.push('Введите пароль');
                this.$refs.password.classList.add('is-error');
            };
        },
        login() {
            $axios.post("https://webdev-api.loftschool.com" + '/login', this.user).then(response => {
                console.log(response.data)
                }).catch(error => {
                    this.mistakeText = response.data;
                    this.mistake = true;
                        })
        }
    },
    mounted() {
    }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
    .app-login {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(#2d3c4e, .9);
    z-index: 10;
    color: #414c63;

    &__card {
        padding: 60px;
        background-color: #ffffff;
        min-width: 560px;
        position: relative;
    }

    &__close-btn {
        position: absolute;
        top: 30px;
        right: 30px;
    }

    &__form {
        display: flex;
        flex-direction: column;
    }

    &__form-title {
        font-size: 36px;
        font-weight: 700;
        text-align: center;
    }

    &__input-block {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        position: relative;

        &:after {
			display: block;
			content: 'Какая-то ошибка';
			height: 45px;
			padding: 0 10px;
			line-height: 45px;
			color: #ffffff;
			background-color: #cd1515;
			position: absolute;
			bottom: -45px;
			left: 45px;
			font-weight: 300;
			opacity: 0;
			transition: opacity .3s;
		}

        &:before {
            display: block;
            content: '';
            width: 30px;
            height: 30px;
            position: absolute;
            left: 0;
            bottom: 15px;
            z-index: 10;
        }

        &--login:before {
            background: svg-load('user.svg', fill="#c6c9d0" ,width="100%", height="100%");
        }

        &--pass:before {
            background: svg-load('key.svg', fill="#c6c9d0" ,width="100%", height="100%");;
        }

        &.is-error {
            &:after {
                opacity: 1;
            }
            .app-login__input {
                border-color: #f00;
            }
        }

    }

    &__label {
        color: rgba(#414c63, .3);
        font-size: 16px;
        font-weight: 400;
        padding-left: 45px;
    }

    &__input {
        margin-top: 15px;
        padding: 0 0 15px 45px;
        border: none;
        border-bottom: 1px solid #000;
        font-size: 18px;
        font-weight: 700;
        color: #414c63;
        position: relative;
    }

    &__btn {
        margin: 50px auto 0;
        margin-bottom: 3rem;
        background-color: #696969;
        border-radius: 100px;
        padding: 1rem 2rem;
        &:hover {
            background-color: orange;
        }
    }
}

@include phones {
    .app-login {

        &__card {
            display: flex;
            width: 100%;
            height: 100%;
            min-width: 0;
            align-items: center;
            justify-content: center;
        }

        &__btn {
            max-width: 100%;
        }
    }
}

.tooltip {
    /* background-color: #414c63; */
    widows: 200px;
    height: 100px;
    
}


</style>


