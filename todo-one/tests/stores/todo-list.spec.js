import { setActivePinia, createPinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { todoListStore } from "@/stores/todo-list";

describe('todoListStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('initializes todo list with default items', () => {
        const store = todoListStore();
        expect(store.todoList).to.not.toBeNull();
        expect(store.todoList.length).toEqual(3);
    });

    it('adds new todo list item', () => {
        const store = todoListStore();
        const newTodoDescription = 'feed Artie';
        store.add(newTodoDescription);
        const addedItem = store.todoList.find(i => i.description === newTodoDescription);
        expect(addedItem).to.not.toBeNull();
        expect(addedItem.description).toEqual(newTodoDescription);
        expect(addedItem.isDone).toBeFalsy();
    });

    it('removes todo list item', () => {
        const store = todoListStore();
        const firstItem = store.todoList[0];
        const firstItemId = firstItem.id;
        const firstItemDescription = firstItem?.description;
        store.remove(firstItemId);
        const removedItem = store.todoList.find(i => i.description === firstItemDescription);
        expect(removedItem).toBeUndefined();
    });

    it('marks todo list item as done', () => {
        const store = todoListStore();
        const firstItem = store.todoList[0];
        const firstItemId = firstItem.id;
        const firstItemDescription = firstItem?.description;
        store.markDone(firstItemId);
        const markedDoneItem = store.todoList.find(i => i.description === firstItemDescription);
        expect(markedDoneItem.isDone).toBeTruthy();
    });
});