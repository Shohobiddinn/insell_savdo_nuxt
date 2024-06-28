<template>
  <div class="dark:bg-DarkPrimary relative">
    <NuxtImg
      src="/Header-bg-orange.png"
      class="absolute top-0 w-full z-10 max-h-[400px]"
    />
    <NuxtImg
      src="/bg-header-gray.png"
      class="absolute bottom-[70px] w-full z-10"
    />
    <div class="container mx-auto pt-3 pb-2 relative z-20">
      <div class="flex justify-between items-end">
        <div>
          <div class="logo">
            <NuxtImg src="/insell.png" width="150" />
          </div>
        </div>
        <div class="flex items-center">
          <ul class="flex items-center gap-4 mr-4">
            <li class="font-semibold text-[15px] text-PWhite">Bosh sahifa</li>
            <li class="font-semibold text-[15px] text-PWhite">Dastur haqida</li>
            <li class="font-semibold text-[15px] text-PWhite">
              Mijozlar fikrlari
            </li>
            <li class="font-semibold text-[15px] text-PWhite">
              Ariza qoldirish
            </li>
            <a
              href="tel:+998335190901"
              class="font-bold text-[15px] text-PWhite"
              ><i class="fas fa-phone"></i> (33) 519 09 01</a
            >
          </ul>
          <UButton
            class="text-PWhite bg-PWhite dark:bg-PWhite hover:bg-PWhite hover:dark:bg-PWhite px-10"
          >
            <i class="fa-solid fa-right-from-bracket text-Primary"></i>
          </UButton>
        </div>
      </div>
    </div>
    <div class="mx-auto pt-3 pb-2 relative z-20 max-w-[1000px] mt-10">
      <div class="flex items-start justify-between">
        <div class="w-[450px]">
          <h2 class="text-[30px] font-bold dark:text-PWhite">
            Savdo jarayonlaringizni avtomatlashtiring.
          </h2>
          <p class="text-[18px] font-normal dark:text-PWhite mt-4">
            15 turdagi savdo yo’nalishlari uchun mahsus savdo avtomatizatsiya
            dasturi.
          </p>
          <button class="btn btn-danger mt-3">sinab ko'rish</button>
        </div>
        <div>
          <NuxtImg
            src="/monoblok.png"
            fit="contain"
            class="translate-y-[-60px] w-[350px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>