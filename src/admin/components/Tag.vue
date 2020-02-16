<template lang="pug">
    .tag
        p {{ tagTitleToUpperCase }}
        button(
            class="add-work__close-tag-btn"
            @click="emitRemoveTag"
        )
</template>

<script>
export default {
    props: {
        title: String
    },
    computed: {
        tagTitleToUpperCase() {
            return this.title.toUpperCase();
        }
    },
    methods: {
        emitRemoveTag() {
            this.$emit('removeTag')
        }
    }
}
</script>

