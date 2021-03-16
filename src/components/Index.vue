<template>
  <div class="index">
    <v-container class="pa-10">
      <v-row>
        <v-col v-for="album in visibleCards" :key="album.albumName" cols="4">
          <v-card height="150">
            <v-list-item three-line>
              <v-list-item-avatar tile size="120" color="grey">
                <v-img :src="album.imgCover"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">
                <v-icon> mdi-album </v-icon>
                  {{ album.albumName }}
                </v-list-item-title>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  <v-icon> mdi-account-music-outline </v-icon>
                  {{ album.artistName }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon> mdi-currency-usd </v-icon>
                  {{ album.price }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
      <v-pagination
        v-if="validateRetrivedInfo()"
        v-model="page"
        :length="calculatePages()"
        class="my-4"
        @next="updateNext()"
        @previous="updatePrevious()"
      ></v-pagination>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {},
  mounted() {
    this.visibleCards = this.retrievedInfo.slice(
      this.page - 1,
      this.page - 1 + this.pageSize
    );
  },
  data() {
    return {
      retrievedInfo: [],
      page: 1,
      pageSize: 9,
      visibleCards: []
    };
  },
  props: {
    searchString: {
      type: String,
      default: ""
    }
  },
  computed: {},
  methods: {
    validateRetrivedInfo() {
      if (this.retrievedInfo.length === 0) {
        return false;
      } else {
        return true;
      }
    },
    calculatePages() {
      if (this.validateRetrivedInfo()) {
        if (this.retrievedInfo.length % this.pageSize === 0) {
          return this.retrievedInfo.length / this.pageSize;
        } else {
          return Math.floor(this.retrievedInfo.length / this.pageSize) + 1;
        }
      }
    },
    updateNext() {
      this.visibleCards = [];
      this.currentPage = this.currentPage + this.pageSize;
      this.visibleCards = this.retrievedInfo.slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
    },
    updatePrevious() {
      this.visibleCards = [];
      this.currentPage = this.currentPage - this.pageSize;
      this.visibleCards = this.retrievedInfo.slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
    }
  }
};
</script>
