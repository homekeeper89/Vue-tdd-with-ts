import {shallowMount} from '@vue/test-utils'
import children from '@/components/children.vue'

describe('Childern', ()=>{
    let message = '';
    const build = ()=>{
        const wrapper = shallowMount(children, {
            propsData : {
                parentMessge : message,
            }
        })
        return {
            wrapper
        }
    };

    beforeEach(()=>{
        message = 'hello World'
    })

    it('render first', ()=>{
        const {wrapper} = build();
        expect(wrapper.exists()).toBe(true);
    });

    it('is Props Works?', ()=>{
        const {wrapper} = build();
        expect(wrapper.find('.children-info').exists()).toBe(true);
        expect(wrapper.find('.children-info').text()).toBe(message);
    })

    it('button click, clickCount methods should be called', ()=>{
        const {wrapper} = build()
        wrapper.find('.children-btn-counter').trigger('click')
        expect(wrapper.vm.$data.checkCount).toBe(20);
    });
})