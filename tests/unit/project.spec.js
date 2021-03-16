/* eslint-disable */
import { assert } from "chai";
import { createLocalVue, shallowMount } from '@vue/test-utils'
import App from "@/App.vue";
import Index from "@/components/Index.vue"

import Vuetify from 'vuetify'

describe("Index.vue tests", () => {

    const localVue = createLocalVue();
    let vuetify;

    beforeEach(() => {
        vuetify = new Vuetify()
    });

    it('props searchString renders properly when passed', () => {
        const wrapper = shallowMount(Index, {
            localVue,
            vuetify,
            parentComponent: App
        })
        const searchValue = "Helo World"
        wrapper.vm.$parent.sendProperty(searchValue);
        let sendValue = wrapper.vm.$parent.getSearchString();
        wrapper.vm.searchString = sendValue;
        assert.equal(wrapper.vm.searchString, searchValue)
    });
});
