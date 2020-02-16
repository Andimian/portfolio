export default {
    namespaced: true,
    state: {
        skills: []
    },
    actions: {
        async addNewSkill({commit}, skill) {
            try {
                const response = await this.$axios.post('/skills', skill);
                commit('ADD_SKILL', skill)
                return response;
            } catch (error) {
            }
        },
        async fetchSkills({commit}) {
            try {
                const {data: {user: {id}}} = await this.$axios.get('/user');
                const {data} = await this.$axios.get(`/skills/${id}`);
                await commit('SET_SKILLS', data)
            } catch (error) {
                alert(error.message)
            }
        },
        async removeSkill({commit}, id) {
            try {
                const response = await this.$axios.delete(`/skills/${id}`)
                commit('REMOVE_SKILL', id)
            } catch (error) {
                
            }
        },
        async changeSkill({commit}, skill) {
            try {
                const response = await this.$axios.post(`/skills/${skill.id}`, skill)
                commit('EDIT_SKILL', skill);
                return response;
            } catch (error) {
                console.log('error', error);
            }
        }
    },
    mutations: {
        SET_SKILLS: (state, skills) => {
            state.skills = skills;
        },
        ADD_SKILL: (state, skill) => {
            state.skills.push(skill)
        }, 
        REMOVE_SKILL: (state, deletedSkillId) => {
            state.skills = state.skills.filter(skill => skill.id != deletedSkillId);
        },
        EDIT_SKILL: (state, editedSKill) => {
            state.skills = state.skills.map(skill => skill.id === editedSKill.id ? editedSKill : skill)
        }
    }
}