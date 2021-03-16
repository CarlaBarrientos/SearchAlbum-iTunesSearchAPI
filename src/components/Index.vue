<template>
  <div class="index">
    <v-container class="pa-10">
      <div>
        {{ searchString }}
      </div>
      <v-row>
        <v-col v-for="album in retrievedInfo" :key="album.albumName" cols="4">
          <v-card height="150">
            <v-list-item three-line>
              <v-list-item-avatar tile size="120" color="grey" >
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
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {},
  data() {
    return {
      retrievedInfo: [
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a1",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a2",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a3",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a4",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a5",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a6",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a7",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a8",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a9",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a10",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a11",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a12",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a13",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a14",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a15",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a16",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a17",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a18",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a19",
          artistName: "b",
          price: "c",
        },
        {
          imgCover:
            "https://cdn.pixabay.com/photo/2017/06/29/19/58/said-2455984__340.jpg",
          albumName: "a20",
          artistName: "b",
          price: "c",
        },
      ]
    };
  },
  props: {
    searchString: {
      type: String,
      default: "",
    },
  },
  computed: {},
  methods: {
    validateRetrivedInfo() {
      if (this.retrievedInfo.length === 0) {
        return false;
      } else {
        return true;
      }
    }
  },
};
</script>