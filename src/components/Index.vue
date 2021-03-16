<template>
  <div class="index">
    <v-container class="pa-10">
      <div>
        {{ searchString }}
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {},
  data() {
    return {};
  },
  props: {
    searchString: {
      type: String,
      default: ""
    }
  }
};
</script>
