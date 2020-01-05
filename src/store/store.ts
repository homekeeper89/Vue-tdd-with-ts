import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import moduleA from './moduleA.store';
import moduleB from './moduleB.store'

Vue.use(Vuex);
// 다른 모듈파일에서 해당 인터페이스를 사용해야 하므로 export 를 붙여준다
export interface RootState{
  data:string;
}

const store:StoreOptions<RootState> = {
  modules:{
    moduleA, moduleB
  },
  state:{
    data:'root'
  },
  // state 지정 안해줘도 RootState로 암
  mutations:{
    setData(state, data:string){
      state.data = data;
    }
  },
  // ActionContext도 StoreOptions에 있으므로 타입 지정 안해도 됨
  actions:{
    setRootData({commit}, data:string){
      commit('setData', data)
    }
  },
  getters:{
    data:(state)=>state.data
  }
}

export default new Vuex.Store(store);