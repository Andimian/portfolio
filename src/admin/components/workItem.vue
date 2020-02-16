<template lang="pug">
    Card(
        modifier="work-item"
        type="work"
        :workImage="work.photo"
    )
        .works__work-content
            .works__work-title {{work.title}}

            .works__work-desc 
                | {{work.description}}
            
            .works__work-link-container
                a(:href="workUrl", target="_blank").works__work-link {{workUrl}}

        .works__work-footer
            .works__work-footer-btn
                button.btn.btn--change(
                    @click="emitEditWork"
                ) Изменить
            
            .works__work-footer-btn
                button.btn.btn--delete(
                    @click="emitRemoveWork"
                ) Удалить
</template>

<script>
export default {
    components: {
        Card: () => import('components/Card.vue')
    },
    props: {
        work: Object
    },
    computed: {
        workUrl: function () {
            const 
                template = /http/g,
                result = this.work.link.match(template) ? this.work.link : `http://${this.work.link}`;
            return result;
        }
    },
    methods: {
        emitRemoveWork() {
            this.$emit('removeWork', this.work.id);
        },
        emitEditWork() {
            this.$emit('editWork', this.work);
        }
    },
    created() {
    }
};
</script>
