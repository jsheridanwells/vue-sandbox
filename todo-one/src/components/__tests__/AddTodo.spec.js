import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import { todoListStore } from "@/stores/todo-list";
import AddTodoVue from "../AddTodo.vue";

describe('AddTodo', () => {
    let wrapper, store = null;

    beforeEach(() => {
        wrapper = mount(AddTodoVue, {
            global: {
                plugins: [createTestingPinia({
                    createSpy: vi.fn
                })]
            }
        });
        store = todoListStore();
    });

    it('calls todo.list add on button click', async () => {
        const testTodo = 'write a dang test!';
        wrapper.vm.newTodoRef = testTodo
        await wrapper.find('form.new-todo-form').trigger('submit.prevent');
        expect(store.add).toBeCalledWith(testTodo);
    });

    it('clears the input after form is submitted', async () => {
        const testTodo = 'write freakin better test!';
        wrapper.vm.newTodoRef = testTodo
        await wrapper.find('form.new-todo-form').trigger('submit.prevent');
        expect(wrapper.vm.newTodoRef).toBe('');
    });

    afterEach(() => {
        wrapper.unmount();
    })
});
