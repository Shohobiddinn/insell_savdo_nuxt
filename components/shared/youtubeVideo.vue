<template>
    <div class="video-container">
      <iframe
        width="560"
        height="315"
        :src="embedUrl"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      videoUrl: {
        type: String,
        required: true,
      },
    },
    computed: {
      embedUrl() {
        const videoId = this.getYouTubeId(this.videoUrl);
        return `https://www.youtube.com/embed/${videoId}`;
      },
    },
    methods: {
      getYouTubeId(url) {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : '';
      },
    },
  };
  </script>
  
  <style scoped>
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    max-width: 100%;
  }
  
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  </style>
  