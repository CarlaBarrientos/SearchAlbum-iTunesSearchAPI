<template>
  <div class="index">
    <v-container class="pa-10">
      <p v-if="load" id="loader">
        Loading...
        <v-progress-linear
          color="#ac72e6"
          :value="value"
          stream
        ></v-progress-linear>
      </p>
      <v-row v-else>
        <v-col v-for="album in visibleCards" :key="album.collectionId" cols="4">
          <v-card height="150">
            <v-list-item three-line>
              <v-list-item-avatar
                v-if="album.artworkUrl100.length === 0"
                tile
                size="120"
                color="grey"
              >
                <v-img :src="images.unknown"></v-img>
              </v-list-item-avatar>
              <v-list-item-avatar v-else tile size="120" color="grey">
                <v-img :src="album.artworkUrl100"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">
                  <v-icon> mdi-album </v-icon>
                  {{ album.collectionName }}
                </v-list-item-title>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  <v-icon> mdi-account-music-outline </v-icon>
                  Artist: {{ album.artistName }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon> mdi-currency-usd </v-icon>
                  Cost: {{ album.collectionPrice }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
      <v-pagination
        v-if="retrievedInfoNotEmpty()"
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
import axios from "axios";
export default {
  name: "Index",
  components: {},
  created() {
    this.getApiData();
  },
  data() {
    return {
      retrievedInfo: [],
      visibleCards: [],
      page: 1,
      pageSize: 9,
      entity: "album",
      media: "music",
      term: "",
      load: false,
      value: 10,
      images: {
        unknown: require("@/assets/unknownCover.png")
      }
    };
  },
  computed: {
    searchString() {
      return this.$route.params.searchTerm;
    }
  },
  watch: {
    searchString() {
      this.getApiData();
    }
  },
  methods: {
    retrievedInfoNotEmpty() {
      if (this.retrievedInfo.length > 0) {
        return true;
      } else {
        return false;
      }
    },
    convertString(searchString) {
      let newString = searchString.toLowerCase();
      newString = newString.replace(/ /g, "+");
      return newString;
    },
    calculatePages() {
      if (this.retrievedInfoNotEmpty()) {
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
    },
    populateVisibleCards() {
      if (this.retrievedInfoNotEmpty()) {
        this.visibleCards = this.retrievedInfo.slice(
          this.page - 1,
          this.page - 1 + this.pageSize
        );
      } else {
        this.visibleCards = [];
        alert(`Lo sentimos, no existen datos sobre ${this.searchString} :(`);
      }
    },
    changeLoader() {
      if (this.visibleCards.length === 0) {
        this.value = 0;
        this.load = true;
      } else {
        this.value = 100;
        this.load = false;
      }
    },
    async getApiData() {
      this.value = 50;
      this.load = true;
      this.term = this.convertString(this.searchString);

      await axios
        .get(
          `https://itunes.apple.com/search?term=${this.term}&media=${this.media}&entity=${this.entity}`
        )
        .then(response => {
          this.retrievedInfo = response.data.results;
          this.populateVisibleCards();
        })
        .catch(e => {
          console.log(e);
        })
        .finally(() => {
          this.changeLoader();
        });
    }
  }
};
</script>
