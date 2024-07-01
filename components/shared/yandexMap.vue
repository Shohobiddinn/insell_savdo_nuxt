<template>
  <div id="map" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://api-maps.yandex.ru/2.1/?lang=en_US'
  script.onload = () => {
    ymaps.ready(init)
  }
  document.head.appendChild(script)

  function init() {
    const map = new ymaps.Map('map', {
      center: [40.382484, 71.785064],
      zoom: 18,
      controls: ['zoomControl', 'fullscreenControl']
    })

    const placemark = new ymaps.Placemark([40.382484, 71.785064], {
      balloonContent: 'Belgilangan joy'
    }, {
      preset: 'islands#blueIcon',
 
    })

    map.geoObjects.add(placemark)
  }
})
</script>

<style scoped>
#map {
  width: 100%;
  height: 400px;
}
</style>