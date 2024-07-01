<script setup lang="ts">
let forLength = 4;
</script>
<template>
  <div class="relative h-[97px]">
  </div>
  <div class="bg-[#D66235] dark:bg-[#D66235] relative">
    <NuxtImg src="/feedback.png" class="absolute w-full  top-[-111px]" />
    <div class="container">
      <div>
        <h2 class="title text-center text-[45px]">
          INSELL Savdo haqida <br />
          foydalanuvchilar fikrlari:
        </h2>
      </div>
      <div
        class="mt-5 mb-3 grid grid-rows-4 grid-flow-col gap-3 grid-rows-4 sm:grid-rows-2 md:grid-rows-1"
      >
        <div class="" v-for="item in forLength" :key="item">
          <div class="text-center">
            <div class="rounded-xl overflow-hidden">
              <SharedYoutubeVideo
                videoUrl="https://youtu.be/uv0LekSBlAc?si=kmilK5t0Kp9RrjUw"
              />
            </div>
            <h2 class="title mt-3">Royal Garden Gul buket do’koni</h2>
          </div>
        </div>
      </div>
      <div class="text-center mt-5 mb-3">
        <button
          class="rounded-[5px] bg-[#313C59] py-2 px-8 text-white text-lg font-semibold"
          @click='forLength = 8'
        >
          YANA
        </button>
      </div>
    </div>
  </div>
  <div class="relative h-[97px]">
    <NuxtImg src="/Wave 2.png" class="absolute w-full" />
  </div>
</template>