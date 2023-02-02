import {mount} from '@vue/test-utils';
import MainSignUp from '@/components/MainSignUp.vue';


describe('SignUp component unit test: ', () => {
    test('createUser fonksiyonunu test ediyoruz.', () => {
        const wrapper = mount(MainSignUp, {
            propsData: {
                user: {email:"deneme@gmail.com",
                        password:"123456",
                        completed:false              
                      }
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});