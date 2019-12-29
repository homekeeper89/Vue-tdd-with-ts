import {shallowMount} from '@vue/test-utils'
import message from '@/components/message.vue'

describe('hello Message', ()=>{
    const build = ()=>{
        const wrapper = shallowMount(message)
        return {
            wrapper
        }
    }

    it('test render well', ()=>{
        const {wrapper} = build()
        expect(wrapper.exists()).toBe(true)
    })
    it('test input field', ()=>{
        const {wrapper} = build()
        const expected = "helloWorld"
        wrapper.find("[message-msg]").setValue(expected)
        expect(wrapper.find(".message-contents").text()).toBe(expected)
    })
})