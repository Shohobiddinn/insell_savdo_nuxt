<script setup lang="ts">
let forLength = 4;
</script>
<template>
  <div class="">
    <div class="container">
      <div>
        <h2 class="title text-center text-[45px]">
          Nima uchun aynan <br />
          INSELL Savdo dasturi?
        </h2>
      </div>
      <div
        class="mt-5 mb-3 grid grid-rows-4 grid-flow-col gap-4 grid-rows-4 sm:grid-rows-2 md:grid-rows-1"
      >
        <div class="" v-for="item in forLength" :key="item">
          <div class="text-center">
            <div>
              <SharedYoutubeVideo
                videoUrl="https://youtu.be/uv0LekSBlAc?si=kmilK5t0Kp9RrjUw"
              />
            </div>
            <h2 class="title mt-3">mijzolarga habar yuborish</h2>
          </div>
        </div>
      </div>
      <div class="text-center mt-5 mb-3">
        <button
          class="rounded-[5px] bg-[#313C59] py-2 px-5 text-white text-lg font-semibold"
          @click="forLength = 8"
        >
          YANA
        </button>
      </div>
    </div>
  </div>
</template>