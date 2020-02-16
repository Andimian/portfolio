
<template lang="pug">
  include ../mixins.pug
  .app-wrap
    template(v-if='$route.meta.public')
      router-view
    template(v-else-if='userIsLogged')
      app-header
      navig
      //- +navInCont('nav', {'Обо мне': 'about', 'Работы': 'workPage', 'Отзывы': 'reviews'}, 'Обо мне')
      main.content
        router-view(:pageTitle="$route.meta.title")
</template>

<script>
import login from "./components/pages/login.vue";
import about from "./components/pages/about.vue";
import workPage from "./components/pages/workPage.vue";
import reviews from "./components/pages/reviews.vue";
import {mapState, mapActions, mapGetters} from 'vuex';
import {store} from '@/store';


  export default {
    components: {
    appHeader: () => import('./components/app-header.vue'),
    navig: () => import('./components/navig.vue'),
    login,
    about,
    workPage,
    reviews
  },
  data() {
      return {
          showLogin: true,
          userIsLogged: store.getters["user/userIsLogged"]
    }
  },
  methods: {
    closeLoginForm() {
      console.log('this', this);
    }
  }
}
</script>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import 'reset-css';
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";




/* ==========================================Шапка========================*/
  .app-wrap {
    height: 100%;
    width: 100%;
    background: url('~images/content/Train-Bridge.png');
    background-size: cover;
    background-color: #cbccd41a;
    /* background-color: red; */
    z-index: 123423;
  }

  .wrapper {
    /* background-color: #cbccd4; */
  }

  

  /* .background-img {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: url('~images/content/Train-Bridge.jpg')no-repeat;
    background-size: cover;
    z-index: 2340;
    opacity: 0.1;
  } */

  




/* ============================отзывы====================================== */
.reviews {
  /* background-color: #cbccd4; */
  padding-bottom: 5rem;
}

.create-review {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  padding: 1rem;
  margin-bottom: 3rem;
}

.create-review__title {
  height: 5rem;
  width: 100%;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.create-review__form-block {
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: center;
}

.create-review__form-avatar {
  margin-right: 4rem;
}

.create-review__form-pic-wrap {
  width: 18rem;
  height: 18rem;
  background-color: #dde4ec;
  border-radius: 300px;
  position: relative;
  margin-bottom: 1rem;
  &:before {
      position: absolute;
      left: 50%;
      top: 50%;
      content: '';
      width: 10rem;
      height: 10rem;
      transform: translate(-50%, -50%);
      /* background-color: aqua; */
      background: svg-load("Avatar.svg", fill=white, width=100%, height=100%);
  }
}

.create-review__form-pic-title {
  color: blue;
  text-align: center;
}

.create-review__form-info {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  flex-direction: column;
}

.create-review__form-info-row {
  display: flex;
  height: 8rem;
}

.create-review__form-info-name {
  margin-right: 4rem;
  height: 3rem;;
}

.create-review__form-info-name-title {
  /* padding: 2rem; */
}

.create-review__form-info-titul {
  margin-right: 4rem;
  margin-bottom: 4rem;
  height: 3rem;
}


.create-review__form-info-input {
  border-bottom: 1px solid #dde4ec;
  height: 2rem;
  width: 100%;
}

.create-review__form-info-rev {
  margin-bottom: 3rem;
}

.create-review__form-info-textarea {
  width: 100%;
  height: 10rem;
}

.create-review__form-info-reset {
  color: #12098b;
  margin-right: 5rem;
}

.create-review__form-info-submit {
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

.confirm-review {
  display: flex;
}

.load-btn {
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

.load-btn-icon {
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

.confirm-review__preview {
  width: 20rem;
  height: 28rem;
  color: grey;
  background-color: #fff;
  padding: 2rem;
}

.confirm-review__preview-top {
  display: flex;
}

.confirm-review__preview-pic-wrap {
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
}

.confirm-review__preview-pic {
  width: 100%;
  object-fit: cover;
  border-radius: 200px;
}

.confirm-review__preview-name {
  color: black;
  margin-bottom: 1rem;
  padding-top: 1rem;
}

.confirm-review__preview-titul {
  color: #dde4ec;
  margin-bottom: 2rem;
}

.confirm-review__preview-rev {
  margin-bottom: 6rem;
}

.confirm-review__preview-btns {
  display: flex;

  .edit {
    margin-right: 5rem;
  }
}
</style>

