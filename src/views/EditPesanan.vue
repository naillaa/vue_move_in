<template>
  <div class="flex flex-col cursor-pointer mx-20 mt-[50px]">
    <div class="flex flex-row items-center">
      <x-heroicon-o-chevron-left class="h-[20px]" />
      <router-link
        to="/history"
        class="text-[26px] font-bold tracking-[5px] ml-5"
        >back</router-link
      >
    </div>
    <form @submit.prevent="submitForm">
      <div class="flex flex-row justify-between mt-[50px]">
        <div class="flex flex-col">
          <h1 class="text-[16px] font-bold">Select Date</h1>
          <h1
            class="text-[20px] mt-[50px] text-[#035397] font-bold tracking-[10px] justify-center flex"
          >
            EDIT
          </h1>
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
                @click="decreaseQuantity()"
                class="btn decrease border-2 px-[5px] text-[12px] font-bold rounded-sm border-black"
              >
                -
              </button>
              <input
                v-model.number="quantity"
                type="number"
                id="counter"
                name="quantity"
                class="bg-[#D6E4E5] border-2 w-[50px] mx-[50px] border-black text-center"
              />
              <button
                type="button"
                @click="increaseQuantity()"
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
                v-model="total"
                type="text"
                name="total"
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
</template>

<script>
export default {
  name: 'EditBooking',
  data() {
    return {
      date: '{{ $jasa->date }}', // Sesuaikan dengan variabel dari Blade
      quantity: '{{ $jasa->quantity }}', // Sesuaikan dengan variabel dari Blade
      total: '{{ $jasa->total }}', // Sesuaikan dengan variabel dari Blade
    };
  },
  methods: {
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    increaseQuantity() {
      this.quantity++;
    },
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
