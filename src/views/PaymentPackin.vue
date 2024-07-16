<template>
  <div>
    <div class="flex flex-col cursor-pointer mx-20 mt-[50px]">
      <div class="flex flex-row items-center">
        <x-heroicon-o-chevron-left class="h-[20px]" />
        <router-link
          to="/book/packin"
          class="text-[26px] font-bold tracking-[5px] ml-5"
          >back</router-link
        >
      </div>
      <form @submit.prevent="submitForm" action="/checkout" method="post">
        @csrf
        <div class="flex flex-row justify-between mt-[50px]">
          <div class="flex flex-col">
            <h1 class="text-[16px] font-bold">Select Date</h1>
            <h1
              class="text-[20px] mt-[50px] text-[#035397] font-bold tracking-[10px] justify-center flex"
            >
              BOOK PACKIN
            </h1>
            <input type="hidden" name="jenis" value="Packin" />
            <input
              v-model="date"
              type="date"
              name="date"
              class="border-2 shadow-lg w-[500px] p-10 mt-[20px] rounded-xl"
            />
          </div>
          <div class="flex-col flex">
            <div
              class="bg-[#D6E4E5] p-5 flex justify-between w-[400px] rounded-xl mt-[100px]"
            >
              <h1>Quantity :</h1>
              <div>
                <button
                  type="button"
                  @click="decrease"
                  class="btn decrease border-2 px-[5px] text-[12px] font-bold rounded-sm border-black"
                >
                  -
                </button>
                <input
                  v-model="quantity"
                  type="number"
                  id="counter"
                  name="quantity"
                  class="bg-[#D6E4E5] border-2 w-[50px] mx-[50px] border-black text-center"
                />
                <button
                  type="button"
                  @click="increase"
                  class="btn increase border-2 px-[5px] text-[12px] font-bold rounded-sm border-black"
                >
                  +
                </button>
              </div>
            </div>
            <div
              class="bg-[#D6E4E5] font-bold p-5 flex justify-between w-[400px] rounded-xl mt-[20px]"
            >
              <h1>Total Payment</h1>
              <div>
                <span>Rp. </span>
                <input
                  type="text"
                  name="total"
                  v-model="total"
                  id="total"
                  class="bg-[#D6E4E5] placeholder:text-black"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end mt-[100px]">
          <button
            type="submit"
            class="p-3 text-[16px] justify-center flex w-[150px] text-sm font-semibold text-white bg-[#4FA095] rounded-lg"
          >
            BOOK NOW
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookPackIn',
  data() {
    return {
      date: '', // variabel untuk menyimpan tanggal yang dipilih
      quantity: 0, // variabel untuk menyimpan jumlah barang yang dipilih
      total: 0, // variabel untuk menyimpan total pembayaran
    };
  },
  methods: {
    // Method untuk mengurangi jumlah barang
    decrease() {
      if (this.quantity > 0) {
        this.quantity--;
        this.calculateTotal();
      }
    },
    // Method untuk menambah jumlah barang
    increase() {
      this.quantity++;
      this.calculateTotal();
    },
    // Method untuk menghitung total pembayaran
    calculateTotal() {
      // Gantilah ini dengan logika perhitungan sesuai kebutuhan Anda
      this.total = this.quantity * 300000; // misalnya harga per item adalah Rp. 300.000
    },
    // Method untuk menangani pengiriman formulir
    submitForm() {
      // Lakukan submit form di sini jika diperlukan
      console.log('Form submitted!');
      // Anda dapat menambahkan logika lainnya sesuai kebutuhan
    },
  },
};
</script>

<style scoped>
/* Gaya tambahan jika diperlukan */
</style>
