export default {
    namespaced: true,
    state: {
        categories: []
    },
    actions: {
        async addNewSkillGroup({commit}, groupTitle) {
            try {
                const res = await this.$axios.post('/categories', {
                title: groupTitle
            });
            commit('ADD_CATEGORIES', groupTitle)
            return res;
            } catch (error) {
                throw new Error(error.response.data.error);
            }
        },
        async fetchCategories({commit}) {
            try {
                const categories = await this.$axios.get('/categories');
                commit('SET_CATEGORIES', categories.data)
                return categories;
            } catch (error) {
                console.log('ошибка згрузки категорий', error.message);
            }
        },
        async removeCategory({commit}, categoryId) {
            try {
                const response = await this.$axios.delete(`/categories/${categoryId}`);
            } catch (error) {
                // error handler
            }
        }
    },
    mutations: {
        SET_CATEGORIES: (state, categories) => {
            state.categories = categories
        },
        ADD_CATEGORIES: (state, categoryTitle) => {
            state.categories.push(categoryTitle)
        },
    }
}