import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { State, Item } from '@/store/store.interface';
import AxiosService  from '@/service/axios.service';
import {AxiosResponse} from 'axios';
Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: []
  },
  mutations: {
    // add, change, remove
    addItem(state, item: Item) {
      state.todoList.push(item);
    },
    changeItemStatus(state, { id, status }: { id: number, status: 'active' | 'clear' }) {
      state.todoList[id].status = status;
    },
    removeItemStatus(state, id: number) {
      state.todoList.splice(id, 1);
    },
    setTodoList(state, todoList: Item[]) {
      state.todoList = todoList;
    }
  },
  actions: {
    initData({ commit }) {
      const response :AxiosResponse<todoList:item[]> = AxiosService.instance.get('data.json')
    }
  },
  getters: {
    allTodoList: (state) => state.todoList,
    activeTodoList: (state) => {
      return state.todoList.filter((item: Item) => item.status == 'active')
    },
    clearTodoList: (state) => {
      return state.todoList.filter((item: Item) => item.status == 'clear')
    }
  }
}

export default new Vuex.Store(store);