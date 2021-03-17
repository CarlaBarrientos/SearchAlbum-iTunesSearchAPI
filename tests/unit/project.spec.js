/* eslint-disable */
import { assert } from "chai";
import { createLocalVue, shallowMount } from '@vue/test-utils';
import App from "@/App.vue";
import Index from "@/components/Index.vue";
import Home from "@/views/Home.vue"

import Vuetify from 'vuetify';
import data from "./mockStore.json";
import VueRouter from "vue-router";
describe("UI tests", () => {

    const localVue = createLocalVue();
    let vuetify;
    let router;

    beforeEach(() => {
        vuetify = new Vuetify(),
            router = new VueRouter({
                routes: []
            });
    });

    it("The title should be rendered", () => {
        const expectedTitle = "Search Albums on iTunes";
        const wrapper = shallowMount(App, {
            localVue,
            router,
            vuetify
        });

        const titleComponent = wrapper.find("#app-bar-title");

        assert.equal(titleComponent.text(), expectedTitle);
    });

    it("Rendering the loader", () => {
        const wrapper = shallowMount(Index, {
            localVue,
            router,
            vuetify, 
            computed: {
                searchString() {
                    return "jack johnson"
                }
            }
        })
        const expectedText = "Loading...";
        wrapper.vm.load = false;
        const presentText = wrapper.find("#loader");
        assert.equal(presentText.text(), expectedText);

    });
});
describe("Index.vue functionality tests", () => {

    const localVue = createLocalVue();
    let vuetify;
    let router;

    beforeEach(() => {
        vuetify = new Vuetify(),
            router = new VueRouter({
                routes: []
            });
    });

    it("The title should be rendered", () => {
        const expectedTitle = "Search Albums on iTunes";
        const wrapper = shallowMount(App, {
            localVue,
            router,
            vuetify
        });

        const titleComponent = wrapper.find("#app-bar-title");

        assert.equal(titleComponent.text(), expectedTitle);
    });

    it("Rendering the loader", () => {
        const wrapper = shallowMount(Index, {
            localVue,
            router,
            vuetify, 
            computed: {
                searchString() {
                    return "jack johnson"
                }
            }
        })
        const expectedText = "Loading...";
        wrapper.vm.load = false;
        const presentText = wrapper.find("#loader");
        assert.equal(presentText.text(), expectedText);

    });

    it("Test convertString function", () => {
        const wrapper = shallowMount(Index, {
            localVue,
            router,
            vuetify, 
            computed: {
                searchString() {
                    return "jack johnson"
                }
            }
        })
        const searchString = "Hello World";
        const expectedString = "hello+world";
        let newString = wrapper.vm.convertString(searchString);
        assert.equal(newString, expectedString);
    });

    it("Validate retrievedInfo function", () => {
        const wrapper = shallowMount(Index, {
            router,
            localVue,
            vuetify,
            computed: {
                searchString() {
                    return "jack johnson"
                }
            }
        })
        let retrievedData = wrapper.vm.retrievedInfo;
        let initialLength = retrievedData.length;
        assert.equal(initialLength, 0);
        assert.isFalse(wrapper.vm.retrievedInfoNotEmpty());

        wrapper.vm.retrievedInfo = data.albums;
        retrievedData = wrapper.vm.retrievedInfo;
        let finalLength = retrievedData.length;
        assert.equal(finalLength, 20);
        assert.isTrue(wrapper.vm.retrievedInfoNotEmpty());
    });

    it("Axios is returning data, validation of getApiData function", async () => {
        const wrapper = shallowMount(Index, {
            router,
            localVue,
            vuetify,
            computed: {
                searchString() {
                    return "jack johnson"
                }
            }
        })
        let retrievedData = wrapper.vm.retrievedInfo;
        let initialLength = retrievedData.length;
        assert.equal(initialLength, 0);

        await wrapper.vm.getApiData();
        retrievedData = wrapper.vm.retrievedInfo;
        let finalLength = retrievedData.length;
        assert.notEqual(finalLength, initialLength);
    });
});
