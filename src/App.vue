<template>
  <div class="h-screen w-full bg-gray-100">
    <div class="flex flex-col h-full">
      <div class="flex mt-4 ml-4">
        <form @submit.prevent="searchCity">
          <div class="w-[200px] flex flex-col">
            <div class="flex items-center">
              <span class="fa fa-search mr-1"></span>
              <input type="search" name="search" id="search" placeholder="City" v-model.trim="search" class="w-full p-1">
            </div>
            <button type="submit" class="bg-indigo-500 block mt-6 p-1 font-comfortaa rounded-md">Search</button>
          </div>
        </form>
      </div>
      <div class="w-[70vw] h-[200px] ml-auto ">
        <div class="grid grid-cols-1 lg:grid-cols-7 ">
          <div>DAY</div>
          <div>DAY</div>
          <div>DAY</div>
          <div>DAY</div>
          <div>DAY</div>
          <div>DAY</div>
          <div>DAY</div>
        </div>
      </div>
      <div class=" mt-auto mb-[30vh] ml-[30vw] ">
        city
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      search: '',
      cityMeteo: null,
      loading: true
    }
  },
  methods: {
    searchCity() {

    }
  }
}
</script>


