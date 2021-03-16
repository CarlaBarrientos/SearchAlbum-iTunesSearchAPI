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
      <v-app-bar-title class="white--text font-italic"> Search Albums on iTunes </v-app-bar-title>
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
      <v-btn fab small color="#eeeeee">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Index />
    </v-main>
  </v-app>
</template>

<script>
import Index from "./components/Index";

export default {
  name: "App",

  components: {
    Index
  },

  data: () => ({
    search: "",
    images: {
      sample: require("./assets/iTunesLogo.png")
    }
  })
};
</script>
