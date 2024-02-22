import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing'
import App from '@/App.vue';

describe('App', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(App, {
            global: {
                plugins: [createTestingPinia({ createSpy: vi.fn })],
            }
        });
    });

    it('renders a title', () => {
        expect(App).toBeTruthy()
        expect(wrapper.text()).toContain('Jeremy\'s First Todo');
    });
});