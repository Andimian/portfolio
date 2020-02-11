export default {
    namespaced: true,
    state: {
        user: {

        }
    },
    mutations: {
        SET_USER: (state, user) => {
            state.user = user
        }
    },
    getters: {
        userIsLogged: state => {
            const userObj = state.user;
            const userObjIsEmpty = Object.keys(userObj) === 0 && userObj.constructor === Object;

            return userObjIsEmpty === false;
        }
    }
}