import { describe, it, expect, beforeEach, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(App);
    });

    it('renders a title', () => {
        expect(App).toBeTruthy()
        expect(wrapper.text()).toContain('Jeremy\'s First Todo');
    });
});