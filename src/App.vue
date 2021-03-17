<template>
  <v-app>
    <v-app-bar
      app
      style="background: linear-gradient(to right, #ff5f77, #ac72e6, #09c6ff)"
    >
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          contain
          :src="images.sample"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-app-bar-title class="white--text font-italic" id="app-bar-title">
        Search Albums on iTunes
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-text-field
        class="pa-2"
        v-model="search"
        label="Search by Artist/Group Name"
        outlined
        rounded
        dense
        hide-details
        color="#eeeeee"
      ></v-text-field>
      <router-link v-if="search"
                :to="{
                  name: 'Index',
                  params: { searchTerm: search }
                }"
              >
      <v-btn fab small color="#eeeeee">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      </router-link>
    </v-app-bar>

    <!--v-main>
      <Index :searchString="getSearchString()" />
    </v-main-->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import router from "@/router/index.js";

export default {
  name: "App",
  router,

  data: () => ({
    images: {
      sample: require("./assets/iTunesLogo.png")
    },
    search: "",
    sendArgument: ""
  }),

  methods: {
    getSearchString() {
      return this.sendArgument;
    },
    sendProperty(searchItem) {
      if (searchItem === "") {
        alert("You must type something in the search text field! :)");
      } else {
        this.sendArgument = searchItem;
      }
    }
  }
};
</script>
