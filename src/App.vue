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
      <div v-if="!loading" class="mx-auto my-auto">
        <current-temp :city="cityMeteo.cityName" :degree="cityMeteo.degree" :image="cityMeteo.image" :description="cityMeteo.description" ></current-temp>
      </div>
      <div class="w-full mt-auto">
        <div class="flex gap-x-4 overflow-x-scroll">
          <DailyMeteo v-for="(day, key) in dailyMeteo" :key="key" :date="day.dt" :temp="day.temp.day" :description="day.weather[0].description" :icon="day.weather[0].icon" />
          <!-- <div class=" border-2 p-4 ">
            <p class="text-9xl">image</p>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="">
          </div>
          <div class="w-[500px] border-2 p-4 ">
            <p class="text-9xl">image</p>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="">
          </div>
          <div class="w-[500px] border-2 p-4 ">DAY</div>
          <div class="w-[500px] border-2 p-4 ">DAY</div>
          <div class="w-[500px] border-2 p-4">
            <p class="text-9xl">image</p>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="">
          </div>
          <div class="w-[500px] border-2 p-4 ">
            <p class="text-9xl">image</p>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="">
          </div>
          <div class="w-[500px] border-2 p-4">
            image
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CurrentTemp from './components/CurrentTemp.vue';
import DailyMeteo from './components/DailyMeteo.vue';
import { getCityWeather } from './MeteoApi/api';
import { getDailyWeather } from './MeteoApi/api';

export default {
  name: 'App',
  components: {
    CurrentTemp,
    DailyMeteo
},
  data() {
    return {
      search: '',
      cityMeteo: null,
      dailyMeteo: null,
      loading: true
    }
  },
  methods: {
    async searchCity() {
      this.loading = true;
      if (this.search === ''){
        this.search = 'london';
      }
      const cityWeather = await getCityWeather(this.search);
      this.cityMeteo = cityWeather;
      const dailyWeather = await getDailyWeather(cityWeather.lon, cityWeather.lat);
      this.dailyMeteo = dailyWeather;
      console.log(dailyWeather);
      this.search = ''
      this.loading = false;
    }
  },
  async mounted() {
    await this.searchCity();
  }
}
</script>


