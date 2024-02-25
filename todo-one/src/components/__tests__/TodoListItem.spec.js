import { describe, it, beforeEach, afterEach, vi, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

import { todoListStore } from '@/stores/todo-list';
import TodoListItemVue from '../TodoListItem.vue';

describe('TodoListItem', () => {
    const item = {
        id: 999,
        description: 'save the world',
        isDone: false
    };

    let wrapper, store = null;

    beforeEach(() => {
        wrapper = mount(TodoListItemVue, {
            global: {
                plugins: [createTestingPinia({
                    createSpy: vi.fn
                })]
            },
            props: { item }
        });

        store = todoListStore();
    });
    
    it('renders a todo description', () => {
        const todoContainer = wrapper.find('.todo-list-item span');
        expect(todoContainer.exists()).toBeTruthy();
        expect(todoContainer.text()).toEqual(item.description);
    });

    it('removes an item', () => {
        const xButton = wrapper.find('.remove');
        xButton.trigger('click');
        expect(store.remove).toHaveBeenCalledWith(item.id);
    });

    it('marks an item as done', () => {
        const checkbox = wrapper.find('.todo-list-item input[type=checkbox]');
        checkbox.trigger('change');
        expect(store.markDone).toHaveBeenCalledWith(item.id);
    });

    afterEach(() => {
        wrapper.unmount();
    });
});