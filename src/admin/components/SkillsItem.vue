<template lang="pug">
    li.skills-list__item
        .skills-list__skill-name
            div.skills-list__skill-title(
                v-if="!isEditMode"
            ) {{skill.title}}
            input.skills-list__input.skills-list__input--name(
                v-else
                v-model="skill.title"
            )
        .skills-list__skill-percent-container
            div.skills-list__skill-percent(
                v-if="!isEditMode"
            ) {{skill.percent}}
            input.skills-list__input.skills-list__input--percent(
                v-else
                v-model="skill.percent"
            )
        .skills-list__skill-edit
            button.skills-list__skill-edit-btn.btn.btn--change(
                @click="isEditMode = !isEditMode"
                v-if="!isEditMode"
            )
            button.skills-list__skill-edit-btn.btn.btn--ok(
                v-if="isEditMode"
                @click="emitChangeSkill"
            )
            button.skills-list__skill-edit-btn.btn.btn--remove(
                v-if="isEditMode"
                @click="emitRemoveSkill"
            )
</template>

<script>
export default {
    props: {
        skill: Object, 
        category: Number
    },
    data: () => {
        return {
            isEditMode: false
        }
    },
    methods: {
        emitChangeSkill() {
            this.isEditMode = false;
            this.$emit('changeThisSkill', this.skill);
        },
        emitRemoveSkill() {
            this.isEditMode = false;
            this.$emit('removeThisSkill', this.skill.id);
        }
    }
}
</script>
