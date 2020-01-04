import {shallowMount, createLocalVue} from '@vue/test-utils';
import Vuex from 'vuex'
import countTdd from '@/components/countTdd.vue';
import App from '@/App.vue';

describe('test count vue, vuex', ()=>{
    const build = ()=>{
        const wrapper = shallowMount(countTdd)
        return {
            wrapper
        }
    }
    it('render count', ()=>{
        const {wrapper} = build();
        expect(wrapper.exists()).toBe(true);
    })
})