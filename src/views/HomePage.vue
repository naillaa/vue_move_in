<template>
  <div>
    <HeaderLogin />
    <div class="flex flex-col">
      <div class="flex justify-center w-full mt-10">
        <img
          class="w-full md:w-3/4 h-auto"
          src="/assets/home5.png"
          alt="Welcome Image"
        />
      </div>
      <div class="flex mt-10 cursor-pointer justify-around w-full flex-row">
        <router-link to="/book/movein">
          <img
            class="w-full md:w-3/5 h-auto"
            src="/assets/home3.png"
            alt="MoveIn Service Image"
          />
        </router-link>
        <router-link to="/book/packin">
          <img
            class="w-full md:w-3/5 h-auto"
            src="/assets/home4.png"
            alt="PackIn Service Image"
          />
        </router-link>
      </div>
      <div class="flex text-center justify-around mt-10">
        <div class="w-full md:w-3/5">
          <h3 class="text-lg mt-5">
            Movin adalah layanan profesional kami yang dapat membantu anda mulai
            dari pengemasan hingga pengantar.
          </h3>
        </div>
        <div class="w-full md:w-3/5">
          <h3 class="text-lg mt-5">
            Packin adalah layanan profesional kami yang dapat membantu anda
            dalam proses pengemasan barang saja.
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogin from '@/components/HeaderLogin.vue'; // Sesuaikan dengan path komponen HeaderHome.vue

export default {
  components: {
    HeaderLogin
  }
};
</script>

<style scoped>
/* CSS khusus untuk komponen ini bisa ditambahkan di sini */
</style>
