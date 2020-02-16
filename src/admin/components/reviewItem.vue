<template lang="pug">
    Card(
        modifier="reviews"
        type="review"
        :author="author"
        :authorPosition="occ"
        :authorAvatarUrl="photoUrl"
    )   
        .reviews__review-text {{ text }}
        .reviews__review-footer
            button.btn.btn--change(
                @click="emitEditReview"
            )
                |  Править
            
            button.btn.btn--delete(
                @click="emitRemoveReview"
            )
                |  Удалить
</template>
 
 <script>
export default {
	components: {
		Card: () => import("components/Card.vue")
	},
	props: ["author", "occ", "text", "photo", "id"],
    data() {
        return {
            skill: {
                author: this.author,
                occ: this.occ,
                text: this.text,
                photo: this.photo,
                id: this.id
            }
        }
    },
	computed: {
		photoUrl: function() {
			return `https://webdev-api.loftschool.com/${this.photo}`;
		}
	},
	methods: {
		emitRemoveReview() {
			this.$emit("deleteCurrentReview", this.id);
		},
        emitEditReview() {
            this.$emit('editReview', this.skill)
        }
	},
	created() {
	}
};
</script>
 