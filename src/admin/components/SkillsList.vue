<template lang="pug">
    ul.skills-list
        SkillItem(
            v-for="skill in skills"
            :key="skill.id"
            :skill="skill"
            :category="categoryId"
            @removeThisSkill="removeThisSkill"
            @changeThisSkill="changeThisSkill"
        )
        .skills-list__footer
            .skills-list__skill-name.skills-list__skill-name--footer
                input.skills-list__input.skills-list__input--footer.skills-list__input--name(
                    placeholder="Новый скилл",
                    v-model="newSkill.title"
                )
            .skills-list__skill-percent-container
                input.skills-list__input.skills-list__input--footer.skills-list__input--percent(
                    placeholder="100",
                    v-model="newSkill.percent"
                )
            .skills-list__footer-btn
                add-btn(
                    size="big"
                    @addBtnHandler="addSkill(newSkill)"
                )
</template>

<script>
import $axios from '@/requests'
import { mapActions, mapState } from 'vuex'

export default {
    components: {
        addBtn: () => import('@/components/addBtn.vue'),
        SkillItem: () => import('@/components/SkillsItem.vue')
    },
    data() {
        return {
            newSkill: {
                title: '',
                percent: 0,
                category: this.categoryId
            },
            isEditMode: false
        }
    },
    props: {
        categoryId: Number,
        skills: {
            type: Array,
            default: []
        }
    },
    methods: {
        ...mapActions('skills', ['addNewSkill','removeSkill', 'changeSkill']),
        resetNewSkill() {
            this.newSkill.title = ''
            this.newSkill.percent = ''
        },
        async removeThisSkill(id) {
            try {
                await this.removeSkill(id)
            } catch (error) {
                console.log('error.message', error.message);
            }
        }, 
        async changeThisSkill(skill) {
            try {
                await this.changeSkill(skill)
            } catch (error) {
                console.log('error', error);
            }
        },
        resetNewSkill() {
            this.newSkill.title = ''
            this.newSkill.percent = ''
        },
        async addSkill(skill) {
            try {
                const response = await this.addNewSkill(skill);
                await this.$emit('updateSkills')
            } catch (error) {
                console.log('error', error);
            }
        },
    }
}
</script>
