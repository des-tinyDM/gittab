<template>
  <panel title="Songs">
    <v-btn
      slot="action"
      class="deep-purple accent-1"
      to="/songs/create"
      light
      medium
      absolute
      right
      middle
      fab>
      <v-icon>add</v-icon>
    </v-btn>

    <div
      v-for="song in songs"
      class="song"
      :key="song.id">

      <v-layout>
        <v-flex xs8 class="song-info">
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>

          <v-btn
            dark
            class="deep-purple accent-2"
            @click="navigateTo({
              name: 'song',
              params: {
                songId: song.id
              }
            })">
            View
          </v-btn>
        </v-flex>

        <v-flex xs4 class="img-container">
          <img class="album-image" :src="song.albumImageUrl" />
        </v-flex>

        </v-layout>
      </div>
    </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  justify-content: space-between;
  overflow: hidden;
}
.song-info {
  display: flex;
  flex-direction: column;
  height: unset;
  justify-content: center;
  align-items: center;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.album-image {
  width: 85%;
  margin: 0 auto;
}
</style>
