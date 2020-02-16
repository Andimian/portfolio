
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
  @import "../styles/admin/card.pcss";
  @import "../styles/admin/tabs.pcss";
  @import "../styles/admin/route.pcss";
  @import "../styles/admin/add-btn.pcss";
  @import "../styles/admin/works.pcss";
  @import "../styles/admin/add-work.pcss";
  @import "../styles/admin/btn.pcss";
  @import "../styles/admin/setup-skills.pcss";
  @import "../styles/admin/skills-list.pcss";
  @import "../styles/admin/reviews.pcss";
  @import "../styles/admin/add-review.pcss";



/* ==========================================Шапка========================*/
  .app-wrap {
    min-height: 100vh;
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

  




</style>

