import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { State, Item } from '@/store/store.interface';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [
      { id: 0, title: "test", status: "active" },
      { id: 1, title: "test1", status: "active" },
      { id: 2, title: "test2", status: "clear" }
    ]
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
    }
  },
  actions: {

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