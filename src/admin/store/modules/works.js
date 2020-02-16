export default {
    namespaced: true,
    state: {
        works: []
    },
    actions: {
        async fetchWork({commit}) {
            try {
                const {data: {user: {id}}} = await this.$axios.get('/user');
                const response = await this.$axios.get(`/works/${id}`);
                commit('SET_WORKS', response.data);
                return response;
            } catch (error) {
                console.log('error.message from fetch work', error.message);
            }
        },
        async addWork({commit}, work) {
            try {
                const response = await this.$axios.post('/works', work);
                return response;
            } catch (error) {
                
            }
        },
        async removeWork({commit}, workId) {
            try {
                const response = await this.$axios.delete(`/works/${workId}`);
                return response;
            } catch (error) {
                
            }
        }, 
        async changeWork({commit}, editableWork) {
            try {
                await console.log('editableWork store', editableWork);
                const response = await this.$axios.post(`/works/${editableWork.id}`, editableWork);
                console.log('response', response);
                return response;
            } catch (error) {
                
            }
        }
    },
    mutations: {
        SET_WORKS: (state, works) => {
            state.works = works
        }
    }
}