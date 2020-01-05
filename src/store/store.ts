import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import moduleA from './moduleA.store';
import moduleB from './moduleB.store'

Vue.use(Vuex);
// 다른 모듈파일에서 해당 인터페이스를 사용해야 하므로 export 를 붙여준다
export interface RootState{
  data:string;
  count:number;
}

const store:StoreOptions<RootState> = {
  modules:{
    moduleA, moduleB
  },
  state:{
    data:'root',
    count:0
  },
  // state 지정 안해줘도 RootState로 암
  mutations:{
    setData(state, data:string){
      state.data = data;
    },
    setCount(state, count:number){
      state.count = count;
    }
  },
  // ActionContext도 StoreOptions에 있으므로 타입 지정 안해도 됨
  actions:{
    increaseCount({state, commit}){
      commit('setCount', state.count + 1);
    },
    setRootData({commit}, data:string){
      commit('setData', data)
    }
  },
  getters:{
    data:(state)=>state.data,
    count:(state)=>state.count
  },
}

export default new Vuex.Store(store);