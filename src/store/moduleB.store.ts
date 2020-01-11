import { Module } from 'vuex';
import { RootState } from '@/store/store';


interface moduleB {
    data: string;
}

const module: Module<moduleB, RootState> = {
    state: {
        data: 'moduleB',
    },
    mutations: {
        setData(state, data: string) {
            state.data = data;
        },
    },
    // ActionContext도 StoreOptions에 있으므로 타입 지정 안해도 됨
    actions: {
        setRootData({ commit }, data: string) {
            commit('setData', data);
        },
    },
    getters: {
        data: (state) => state.data,
    },
};

export default module;
