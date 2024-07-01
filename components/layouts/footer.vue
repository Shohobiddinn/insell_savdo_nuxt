<template>
  <div>
    <div class="container">
      <h3 class="title text-center text-4xl my-5">Bizning manzillar</h3>
      <div class="row">
        <div class="title text-2xl col">
          <a href="https://www.instagram.com/insellsavdo/" target="_blank">
            <i class="fa-brands fa-instagram"></i> insell savdo dasturi
          </a>
        </div>
        <div class="title text-2xl col">
          <a href="https://www.youtube.com/@Insell_savdo" target="_blank">
            <i class="fa-brands fa-youtube"></i> insell
          </a>
        </div>
        <div class="title text-2xl col">
          <a href="https://t.me/crud_admin" target="_blank">
            <i class="fa-brands fa-telegram"></i> @insellsavdo
          </a>
        </div>
        <div class="title text-2xl col">
          <a href="" target="_blank">
            <i class="fa-brands fa-facebook"></i> insell savdo
          </a>
        </div>
      </div>
      <div class="w-full my-5 rounded-xl overflow-hidden">
        <SharedYandexMap />

      </div>
      <div class="flex justify-between pb-3">
        <NuxtImg src="/insell.png" width="200" fit="contain" />
        <h1 class="title text-2xl text-center">Barcha huquqlar himoyalangan . <br> Dastur CRUD Developer MCHJ ga
          tegishli.</h1>
        <NuxtImg src="/crud.png" width="200" fit="contain" />
      </div>
    </div>
    <!-- <div class="bg-pBlue pb-[20px] max-[400px]:pb-[40px]">
      <div class="container">
        <div
          class="mb-10 flex w-full justify-between max-[600px]:flex max-[600px]:items-center max-[600px]:justify-start"
        >
          <img
            src="../../assets/images/insell_oq.png"
            class="w-[250px] object-cover max-[500px]:w-7/12 max-[500px]:mt-[20px]"
            style="filter: invert(0)"
            data-aos="fade-up"
            data-aos-duration="700"
            alt=""
          />
          <img
            src="../../assets/images/crud_oq.png"
            class="w-[230px] object-contain max-[500px]:w-7/12 max-[500px]:mt-[20px] max-[600px]:hidden"
            data-aos="fade-up"
            data-aos-duration="700"
            alt=""
          />
        </div>
        <div
          class="flex justify-between flew-wrap max-[600px]:flex-col max-[500px]:justify-center"
        >
          <div
            class="flex-auto max-[600px]:flex max-[600px]:flex-col max-[600px]:mb-[10px]"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <a
              href="https://www.instagram.com/insellsavdo"
              target="_blank"
              class="text-[30px] text-pWhite mb-[15px] flex items-center max-[400px]:text-[25px]"
              ><i class="fa-brands fa-instagram me-2 translate-y-[1px]"></i>
              <span class="font-normal text-pWhite"> insell savdo dasturi</span>
            </a>
          </div>
          <div
            class="flex-auto max-[600px]:flex max-[600px]:flex-col max-[600px]:mb-[10px]"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <a
              href="https://youtube.com/@insell_uz?si=CK7BoXL8HLC1CHj6"
              target="_blank"
              class="text-[30px] text-pWhite mb-[15px] flex items-center max-[400px]:text-[25px]"
              ><i class="fa-brands fa-youtube me-2 translate-y-[1px]"></i>
              <span class="font-normal text-pWhite"> insell </span>
            </a>
          </div>
          <div
            class="flex-auto max-[600px]:flex max-[600px]:flex-col max-[600px]:mb-[10px]"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <a
              href="https://t.me/insellsavdo"
              target="_blank"
              class="text-[30px] text-pWhite mb-[15px] flex items-center justify-center max-[600px]:justify-start max-[400px]:text-[25px]"
              ><i class="fa-brands fa-telegram me-2 translate-y-[1px]"></i>
              <span class="font-normal text-pWhite">@insellsavdo</span>
            </a>
          </div>
          <div
            class="flex-auto text-end max-[600px]:flex max-[600px]:flex-col max-[600px]:mb-[10px]"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <a
              href="https://www.facebook.com/insellsavdo"
              target="_blank"
              class="text-[30px] text-pWhite mb-[15px] flex items-center justify-end max-[600px]:justify-start max-[400px]:text-[25px]"
              ><i class="fa-brands fa fa-facebook me-2 translate-y-[1px]"></i>
              <span class="font-normal text-pWhite">insell savdo</span>
            </a>
          </div>
        </div>
        <div class="flex-auto" data-aos="fade-up" data-aos-duration="1000">
          <div
            class="w-full h-[400px] max-[400px]:h-[350px] rounded-[20px] max-[500px]:rounded-[10px] overflow-hidden"
            ref="yandexMap"
            id="map"
          ></div>
        </div>
        <div class="flex items-center justify-center mt-10">
          <h1
            class="flex items-center justify-center text-[20px] text-pWhite font-normal max-[600px]:text-[10px] max-[400px]:text-[9px]"
          >
            <span>insell sotuv sayti </span
            ><a href="https://crud.uz/" target="_blank"
              ><img
                src="../../assets/images/crud_logo.png"
                class="w-[200px] max-[600px]:w-[150px] max-[400px]:w-[120px] object-cover px-[10px] max-[400px]:px-[3px]"
                alt=""
            /></a>
            <span>tomonidan ishlab chiqarilgan</span>
          </h1>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  components: {},
};
</script>