<template>
  <div>
    <div class="flex ml-[50px] mt-[50px] font-semibold tracking-[5px] flex-col">
      <h1>TOTAL PAYMENT</h1>
      <h4 class="mt-[10px] font-semibold text-[20px]">{{ totalPayment }}</h4>
      <h4 class="mt-[60px] font-bold text-[20px]">Select Payment Method</h4>
    </div>
    <div class="ml-[50px] mt-[50px] w-[600px]">
      <div
        v-for="(method, index) in paymentMethods"
        :key="index"
        class="flex flex-row justify-between p-3 bg-[#D9D9D9]"
      >
        <h1 class="ml-[20px] items-center text-[20px]">{{ method.name }}</h1>
        <div class="flex flex-row">
          <img
            v-for="(bank, bIndex) in method.banks"
            :key="bIndex"
            :src="bank.logo"
            :alt="'logo-' + bIndex"
            class="h-[34px] mx-2"
          />
        </div>
      </div>
    </div>
    <div
      class="flex flex-col w-full ml-[300px] -mt-[180px] justify-center items-center"
    >
      <h1 class="text-[20px] tracking-[5px] text-[#595959]">
        Use Offers to get discounts
      </h1>
      <input
        v-model="promoCode"
        type="text"
        class="border mt-[20px] w-[350px] bg-[#D9D9D9] placeholder:text-black placeholder:text-center p-3 rounded-xl text-white"
        placeholder="Promo or Gift Code"
      />
      <button
        @click="pay"
        class="bg-[#4FA095] text-white mt-[30px] px-[100px] rounded-lg py-2"
      >
        PAY
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentSelection',
  data() {
    return {
      totalPayment: 'Rp. 300.000,00', // Misalnya Anda ingin menampilkan total pembayaran
      promoCode: '', // Untuk menyimpan kode promo atau hadiah
      paymentMethods: [
        {
          name: 'Transfer',
          banks: [
            { logo: '/assets/bank1.png' },
            { logo: '/assets/bank2.png' },
            { logo: '/assets/bank3.png' },
          ],
        },
        {
          name: 'Debit Card',
          banks: [
            { logo: '/assets/bank4.png' },
            { logo: '/assets/bank5.png' },
            { logo: '/assets/bank6.png' },
          ],
        },
        {
          name: 'E-Wallet',
          banks: [
            { logo: '/assets/bank7.png' },
            { logo: '/assets/bank8.png' },
            { logo: '/assets/bank9.png' },
          ],
        },
      ],
    };
  },
  methods: {
    pay() {
      // Logic untuk menangani proses pembayaran
      console.log('Pembayaran dilakukan dengan promo code:', this.promoCode);
      // Anda dapat menambahkan logika untuk mengirimkan permintaan pembayaran ke server
      // Misalnya menggunakan axios atau fetch untuk mengirim data ke backend
    },
  },
};
</script>

<style scoped>
/* Gaya tambahan jika diperlukan */
</style>
