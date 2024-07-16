<template>
  <div>
    <include-header-login></include-header-login>
    <div class="flex flex-row ml-[50px] mt-[200px]">
      <img src="/assets/home3.png" class="w-[500px] flex h-[400px]" alt="" />
      <div class="flex flex-col ml-[50px]">
        <h1 class="font-semibold text-[64px] tracking-[50px]">MOVE.IN</h1>
        <h3 class="mt-[30px] text-[20px]">
          Jasa Pemindahan Barang untuk Pindah Kos
        </h3>
        <h4 class="mt-[100px] font-semibold text-[20px]">Rp. 300.000,00</h4>
      </div>
    </div>
    <div class="flex justify-end mr-[150px]">
      <router-link
        to="/payment/movein"
        class="p-3 text-[16px] justify-center flex w-[150px] text-sm font-semibold text-white bg-[#4FA095] rounded-lg"
        >BOOK</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookMoveIn',
};
</script>

<style scoped>
/* Gaya tambahan jika diperlukan */
</style>
