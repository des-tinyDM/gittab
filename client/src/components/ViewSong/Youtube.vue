<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="550"
      :player-height="300">
    </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
#youtube-player-2 {
  width: 80% !important;
}
</style>
