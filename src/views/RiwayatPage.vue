<template>
  <div>
    <div class="ml-60 flex-col">
      <h1 class="mt-120 text-24 font-bold">Pesanan</h1>
    </div>
    <div class="flex flex-row mt-50 justify-around p-5 bg-[#D6E4E5]">
      <h1 class="font-bold text-20">Selesai</h1>
    </div>
    <div class="grid grid-cols-3 w-full p-5 mt-20 mb-50">
      <div
        v-for="history in histories"
        :key="history.id"
        class="px-7 h-350 text-white p-5 items-center mx-5 mt-50 w-400 font-semibold text-20 rounded-2xl bg-[#D6E4E5]"
      >
        <h1 class="w-350 bg-[#9F9F9F] rounded-2xl py-2 px-5">
          Tanggal pesan : {{ history.date }}
        </h1>
        <h3 class="mt-20 bg-[#9F9F9F] rounded-2xl py-2 px-5 w-350">
          Quantitiy : {{ history.quantity }}
        </h3>
        <h3 class="mt-20 bg-[#9F9F9F] rounded-2xl px-5 py-2 w-350">
          Total : Rp. {{ history.total }}
        </h3>
        <h3 class="mt-20 bg-[#9F9F9F] rounded-2xl px-5 py-2 w-350">
          Jenis : {{ history.jenis }}
        </h3>
        <form
          @submit.prevent="deleteHistory(history.id)"
          class="flex justify-around mt-30"
          method="post"
        >
          @csrf @method('delete')
          <input type="hidden" name="id" :value="history.id" />
          <button type="submit" class="bg-red-500 p-2 rounded-xl">
            Delete
          </button>
          <router-link
            :to="'/book/edit/' + history.id"
            class="bg-blue-500 p-2 px-5 rounded-xl"
            >Edit</router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      histories: [], // Array to store order histories, should be fetched from API or Vuex store
    };
  },
  created() {
    // Simulating fetching order histories from API
    this.histories = [
      {
        id: 1,
        date: '2024-07-15',
        quantity: 2,
        total: 500000,
        jenis: 'Packin',
      },
      {
        id: 2,
        date: '2024-07-14',
        quantity: 1,
        total: 300000,
        jenis: 'Movin',
      },
      // Add more history objects as needed
    ];
  },
  methods: {
    deleteHistory(id) {
      // Handle delete logic here (e.g., send delete request to server)
      console.log('Deleting history with id:', id);
      // Example: send delete request using Axios or fetch API
      // axios.delete('/book/delete', { data: { id: id } })
      //   .then(response => {
      //     console.log(response.data);
      //   })
      //   .catch(error => {
      //     console.error('Error deleting history:', error);
      //   });
    },
  },
};
</script>

<style scoped>
/* Styling specific to this component */
</style>
