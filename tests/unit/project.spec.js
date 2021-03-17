/* eslint-disable */
import { assert } from "chai";
import { createLocalVue, shallowMount } from '@vue/test-utils';
import App from "@/App.vue";
import Index from "@/components/Index.vue";

import Vuetify from 'vuetify';
import data from "./mockStore.json";

describe("Index.vue tests", () => {

    const localVue = createLocalVue();
    let vuetify;

    beforeEach(() => {
        vuetify = new Vuetify()
    });

    it("The title should be rendered", () => {
        const expectedTitle = "Search Albums on iTunes";
        const wrapper = shallowMount(App, {
          localVue,
          vuetify
        });
    
        const titleComponent = wrapper.find("#app-bar-title");
    
        assert.equal(titleComponent.text(), expectedTitle);
    });

    it("props searchString renders properly when passed", () => {
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

    it("Validate retrievedInfo function", () => {
        const wrapper = shallowMount(Index, {
            localVue,
            vuetify
        })
        wrapper.vm.retrievedInfo = []
        let retrievedData = wrapper.vm.retrievedInfo;
        let initialLength = retrievedData.length;
        assert.equal(initialLength,0);
        assert.equal(wrapper.vm.retrivedInfoNotEmpty(), false);

        wrapper.vm.retrievedInfo = data.albums;
        retrievedData = wrapper.vm.retrievedInfo;
        let finalLength = retrievedData.length;
        assert.equal(finalLength,20);
        assert.equal(wrapper.vm.retrivedInfoNotEmpty(), true);
    })
});
