import {Module, Mutation, VuexModule, Action} from 'vuex-module-decorators';
@Module({
    namespaced: true,
    name: 'myCustomModule',
})
export default class ModuleA extends VuexModule {
    data: string = 'moduleA';

    @Mutation
    setData(data: string) {
        this.data = data;
    }

    @Action
    editData(data: string) {
        this.context.commit('setData', data);
    }

    get getData() {
        return this.data;
    }
}
