import {mount} from '@vue/test-utils';
import MainSignUp from '@/components/MainSignUp.vue';


describe('SignUp component unit test: ', () => {
    test('renders task 111', () => {
        const wrapper = mount(MainSignUp, {
            propsData: {
                user: {name:"user 123",
                        completed:false              
                      }
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
    test('renders task 222', () => {
        const wrapper = mount(MainSignUp, {
            propsData: {
                user: {name:"user 321321312",
                        completed:false              
                      }
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});