import {shallowMount, mount} from '@vue/test-utils'
import Home from '@/views/Home.vue'
import children from '@/components/children.vue'

describe('Test Home', ()=>{
    const build = ()=>{
        const wrapper = mount(Home);
        return {
            wrapper
        };
    };

    it('render first', ()=>{
        const {wrapper} = build();
        expect(wrapper.exists()).toBe(true);
    });

    it('find button', ()=>{
        const {wrapper} = build();
        expect(wrapper.find('button').exists()).toBe(true);
    });

    it('trigger button', async()=>{
        const {wrapper} = build();

        wrapper.find('.home-btn').trigger('click')
        await wrapper.vm.$nextTick();
        
        expect(wrapper.find('.children-alert').text()).toBe('message updated')
    })

    it('find home-message, btn', ()=>{
        const {wrapper} = build();
        expect(wrapper.find('.home-message').exists()).toBe(true)
        expect(wrapper.find('.children-btn-counter').exists()).toBe(true)
    })

    it('emits data to parennts', async()=>{
        const {wrapper} = build();
        wrapper.find('.children-btn-counter').trigger('click')
        expect(wrapper.vm.$data.count).toBe(1);
        wrapper.find('.children-btn-counter').trigger('click')
        expect(wrapper.vm.$data.count).toBe(2);
    })
})