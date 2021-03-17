<template>
  <div class="index">
    <v-container class="pa-10">
      <v-row>
        <v-col v-for="album in visibleCards" :key="album.collectionName" cols="4">
          <v-card height="150">
            <v-list-item three-line>
              <v-list-item-avatar tile size="120" color="grey">
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
                  {{ album.artistName }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon> mdi-currency-usd </v-icon>
                  {{ album.collectionPrice }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
      <v-pagination
        v-if="retrivedInfoNotEmpty()"
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
import axios from 'axios';
export default {
  name: "Index",
  components: {},
  mounted() {
    this.searchString = this._getString();
    if(this.searchStringNotEmpty()) {
    this.term = this.convertString(this.searchString);
    axios.get(`https://itunes.apple.com/search?term=${this.term}&media=${this.media}&entity=${this.entity}`)
    .then(response => {
      this.retrievedInfo = response.data.results;
      this.readElements();
      this.visibleCards = this.retrievedInfo.slice(
      this.page - 1,
      this.page - 1 + this.pageSize
    );

    })
    .catch(e => {
      console.log(e);
    })
    }
  },
  data() {
    return {
      retrievedInfo: [],
      page: 1,
      pageSize: 9,
      visibleCards: [],
      entity: "album",
      media: "music",
      term: "",
      searchString: ""
    };
  },
  computed: {},
  methods: {
     _getString() {
      return this.$route.params.searchTerm;
    },
    readElements() {
        console.log(this.retrievedInfo);
    },
    searchStringNotEmpty() {
      if(this.searchString !== "") {
        return true;
      } else {
        return false;
      }
    },
    retrivedInfoNotEmpty() {
      if (this.retrievedInfo.length === 0) {
        return false;
      } else {
        return true;
      }
    },
    convertString(searchString) {
      let newString = searchString.toLowerCase();
      newString = newString.replace(/ /g,"+");
      return newString;
    },
    calculatePages() {
      if (this.retrivedInfoNotEmpty()) {
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
