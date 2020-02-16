export default {
    namespaced: true,
    state: {
        reviews: []
    },
    actions: {
        async createReview({commit}, review) {
            try {
                const response = await this.$axios.post('/reviews', review);
                // commit('ADD_REVIEW', review)
                return response;
            } catch (error) {
                console.log('error.message', error.message);   
            }
        },
        async fetchReviews({commit}) {
            try {
                const {data: {user: {id}}} = await this.$axios.get('/user');
                const resonse = await this.$axios.get(`/reviews/${id}`);
                commit('SET_REVIEWS', resonse.data);
                return resonse;
            } catch (error) {
                
            }
        },
        async removeReview({commit}, reviewId){
            try {
                const response = await this.$axios.delete(`/reviews/${reviewId}`);
                commit('REMOVE_REVIEWS', reviewId)
                return response;
            } catch (error) {
                console.log('error.message', error.message);
            }
        },
        async editReview({commit}, editedReview) {
            try {
                const response = await this.$axios.post(`/reviews/${editedReview.id}`, editedReview);
                await commit('CHANGE_REVIEW', editedReview);
                this.fetchReviews();
                return response;
            } catch (error) {
                
            }
        }
    },
    mutations: {
        SET_REVIEWS: (state, reviews) => {
            state.reviews = reviews
        },
        REMOVE_REVIEWS: (state, reviewsId) => {
            state.reviews =  state.reviews.filter(review => review.id != reviewsId)
        },
        ADD_REVIEW: (state, review) => {
            state.reviews.push(review)
        },
        CHANGE_REVIEW: (state, editedReview) => {
            state.reviews = state.reviews.map(review => review.id === editedReview.id ? editedReview : review)
        }
    }
}