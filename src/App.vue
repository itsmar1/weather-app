<template>
  <div class="h-screen w-full bg-gray-100" :style="{backgroundImage: backgroundLinear }">
    <div></div>
    <div class="flex flex-col h-full">
      <div class="flex mt-4 ml-4 font-comfortaa">
        <form @submit.prevent="searchCity">
          <div class="w-[250px] flex flex-col">
            <div class="flex items-center">
              <input type="search" name="search" id="search" placeholder="City" v-model.trim="search" class="w-full rounded-md p-1">
            </div>
            <button type="submit" class="bg-white text-indigo-700 font-semibold block mt-3 p-2 rounded-md hover:bg-black hover:text-white transition-all duration-300">
              <div class="flex justify-center items-center">
                <span class="fa fa-search mr-2"></span>
                <p>Search</p>
              </div>
            </button>
          </div>
        </form>
      </div>
      <div v-if="!loading" class="mx-auto my-auto text-white">
        <current-temp :city="cityMeteo.cityName" :degree="cityMeteo.degree" :image="cityMeteo.image" :description="cityMeteo.description" ></current-temp>
      </div>
      <div class="w-full mt-auto">
        <div class="flex gap-x-4 overflow-x-scroll">
          <DailyMeteo v-for="(day, key) in dailyMeteo" :key="key" :date="day.dt" :temp="day.temp.day" :description="day.weather[0].description" :icon="day.weather[0].icon" />
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
  computed: {
    backgroundLinear() {
      return "linear-gradient(0.50turn, black, #33adff, black)";
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


