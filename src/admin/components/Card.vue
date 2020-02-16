<template lang="pug">
    .card(:class="modifier ? 'card--' + modifier : '' ")
        //- skill
        .card__header(v-if="type == 'skill'")
            h3.card__header-title(
                v-if="!editSkillsGroupName"
            ) {{ title }}
            input.card__header-title-input(
                v-else
                v-model="title"
            )
            .card__header-btns(
                v-if="!editSkillsGroupName"
            )
                button.btn.btn--change.btn--change-gray.card__header-btn(
                    @click="editSkillsGroupName = true"
                )
            
            .card__header-btns(
                v-else="editSkillsGroupName"
            )
                button.btn.btn--ok.card__header-btn(
                    @click="editSkillsGroupName = false"
                )
                button.btn.btn--remove.card__header-btn(
                    @click="emitRemoveCategory"
                )

        //- add-skill-group
        .card__header(v-else-if="type == 'add-skills-group'")
            input.card__header-title-input(
                v-model="newGroupName"
                placeholder="New group name"
                @keyup.enter="addSkillGroup"
            )
            .card__header-btns
                button.btn.btn--ok.card__header-btn(
                    @click="addSkillGroup"
                )
                button.btn.btn--remove.card__header-btn(
                    @click="closeAddSkillForm"
                )

        //- review
        .card__header(v-else-if="type == 'review'")
            .card__review-author
                .card__author-photo
                    img.card__author-avatar(:src="authorAvatarUrl ? authorAvatarUrl : defaultReviewAvatarUrl")
                .card__author-info
                    .card__author-name {{ author }}
                    .card__author-position {{ authorPosition }}

    
        .card__body
            slot
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            defaultReviewAvatarUrl: 'data:image/png;base64,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'
        }
    },
    props: {
        modifier: String,
        type: String,
        author: String,
        authorPosition: String,
        authorAvatarUrl: String,
        title: String,
        categoryId: Number,
        workImage: String,
        workId: Number
    },
    data() {
        return {
            newGroupName: '',
            editSkillsGroupName: false,
            groupTitle: 'Workflow'
        }
    },
    computed: {
        currentWorkImage: function () {
            return {'backgroundImage' : `url('https://webdev-api.loftschool.com/${this.workImage}')`}
        }
    },
    methods: {
        closeAddSkillForm() {
            this.$emit('closeAddSkillsForm')
        },
        addSkillGroup() {
            this.$emit('addSkillGroup', this.newGroupName);
            this.newGroupName = ''
        },
        emitRemoveCategory() {
            this.editSkillsGroupName = false
            this.$emit('removeCategory', this.categoryId)
        }
    },
    async created() {
    }
}
</script>
    

<style lang="postcss" scoped>
    @import "../../styles/mixins.pcss";

    .card {
	box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
	padding: 30px 20px;
	background-color: #ffffff;
	flex-grow: 1;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	min-width: 300px;

	&--skill {
		height: 100%;
	}

	&--gradient {
		background-image: linear-gradient(to right, #135ae3 0%, #3f35cb 100%);
	}

	&--new-work {
		align-items: center;
		justify-content: center;
		height: 100%;
		text-align: center;
		cursor: pointer;
		transition: opacity .3s;

		&:hover {
			opacity: 0.8;
		}
	}

	&--work-item {
		padding: 0;
		max-width: 100%;

		.card__header {
			border: none;
			padding: 0;
		}

		.card__body {
			padding: 15px 20px;
		}

		.card__footer {
			margin-top: 0;
			padding: 15px 20px;
			justify-content: space-between;
		}
	}

	&__header {
		display: flex;
		align-items: center;
		padding: 0 8px 15px;
		border-bottom: 1px solid #dedee0;

		&--work {
			background-size: cover;
		}
	}

	&__header-title,
	&__header-title-input {
		font-weight: 600;
		font-size: 18px;
	}

	&__header-title-input {
		border: none;
		width: 100%;
	}

	&__header-btns {
		display: flex;
		align-items: center;
		margin-left: auto;
	}

	&__header-btn {

		&:nth-child(n+2) {
			margin-left: 10px;
		}
	}

	&__body {
		padding: 30px 0 0 0;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	&__footer {
		display: flex;
		align-items: center;
		margin-top: 40px;
		justify-content: flex-end;
		
		input {
			padding-left: 20px;
		}
	}

	&__footer-btn-container {
		margin-left: 20px;
	}

	&__footer-input-container {
		width: 50%;
		margin-right: 20px;
	}

	&__footer-percent-container {
		margin-left: 20px;
	}

	&__footer-btn {

		&:nth-child(n+2) {
			margin-left: 60px;
		}
	}

	// work-item

	&__work-thumb {
		height: 190px;
		background-image: url('../assets/images/burgers.jpg');
		background-size: cover;
		position: relative;
		overflow: hidden;
	}

	&__work-image {
		width: 100%;
		object-fit: cover;
	}

	&__work-title {
		font-size: 18px;
	}

	&__tags-list {
		position: absolute;
		bottom: 10px;
		right: 10px;
		display: flex;
		align-items: center;
	}

	&__tags-item {
		height: 30px;
		padding: 0 15px;
		border-radius: 15px;
		background-color: #ffffff;
		line-height: 30px;
		color: #a5a7a9;

		&:nth-child(n+2) {
			margin-left: 10px;
		}
	}

	// review header

	&__review-author {
		display: flex;
		align-items: center;
	}

	&__author-photo {
		background-color: #f4f4f4;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
		flex-shrink: 0;
	}

	&__author-avatar {
		width: 100%;
		height: 100%;
		flex-shrink: 0;
	}

	&__author-info {
		display: flex;
		flex-direction: column;
		margin-left: 15px;
	}

	&__author-name {
		font-size: 18px;
	}
	
	&__author-position {
		font-size: 16px;
		color: #bcbec3;
	}
}

@include tablets {
	.card {

		&__footer {
			justify-content: center;
		}
	}
}

@include phones {
	.card {

		&--new-work {
			flex-direction: row;
		}

		&__add-icon-text {
			margin-top: 0;
			margin-left: 20px;
		}
	}
}
</style>

