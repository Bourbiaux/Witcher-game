import actions from "./actions";
import mutations from "./mutations";

const state = {
    loader: {
        loading: false,
        message: null,
    },
    music: true,
    videoAutoPlay: true
}

const getters = {
    loadingState: state => {
        return state.loader.loading;
    },

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}