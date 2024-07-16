<template>
  <HeaderHome />
  <div class="flex flex-col">
    <div class="flex flex-col items-center mt-[200px]">
      <img class="w-[121px]" src="@/assets/Move3.png" alt="" />
      <h1
        class="mt-2 tracking-[50px] relative text-[64px] text-[#035397] font-bold"
      >
        MOVE.IN
      </h1>
    </div>
    <div class="flex h-[450px] -mt-[330px] w-[500px] flex-row">
      <img src="@/assets/home1.png" alt="" />
      <img class="ml-[510px]" src="@/assets/home2.png" alt="" />
    </div>
    <div class="flex mt-[50px] justify-around w-full flex-row">
      <img class="w-[342px] h-[216px]" src="@/assets/home3.png" alt="" />
      <img class="w-[342px] h-[216px]" src="@/assets/home4.png" alt="" />
    </div>
    <div class="flex text-center justify-around mb-[50px]">
      <h3 class="text-[20px] mt-5 w-[342px]">
        Movin adalah layanan profesional kami yang dapat membantu anda mulai
        dari pengemasan hingga pegantar
      </h3>
      <h3 class="text-[20px] mt-5 w-[342px]">
        Packin adalah layanan profesional kami yang dapat membantu anda dalam
        proses pengemasan barang saja
      </h3>
    </div>
  </div>
</template>

<script>
import HeaderHome from '@/components/HeaderHome.vue'; // Sesuaikan dengan path komponen HeaderHome.vue

export default {
  components: {
    HeaderHome
  }
};
</script>

<style scoped>
/* Styling specific to this component */
</style>
