<template lang="pug">
    .route
        .container.route__container
            .route__title Блок &laquo;{{pageTitle}}&raquo;
            .route__controls
                transition(name="add-btn")
                    add-btn(
                        name="Добавить группу",
                        size="small"
                        v-if="withBtn"
                        @addBtnHandler="addBtnHandler"
                    )
</template>

<script>
export default {
    components: {
        addBtn: () => import('components/addBtn.vue')
    },
    props: {
        pageTitle: String,
        withBtn: false
    },
    methods: {
        addBtnHandler() {
            this.$emit('addBtnHandler')
        }
    }
}
</script>

<style lang="postcss" scoped>
    .route {
        margin: 0 0 55px 0;
    }

    /* add btn animation */

.add-btn-enter-active, .add-btn-leave-active {
    transition: opacity .3s ease;
}

.add-btn-enter {
    opacity: 0;
}

.add-btn-enter-to {
    opacity: 1;
}

.add-btn-leave {
    opacity: 1;
}

.add-btn-leave-to {
    opacity: 0;
}
</style>


