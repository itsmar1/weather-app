<template>
  <div class="w-[500px] bg-white border-2 rounded-md py-5 px-3 shadow-lg font-comfortaa">
      <div class="flex flex-col justify-center text-center">
          <h3>{{ day }}</h3>
          <h3 class="text-xl font-bold">{{ degree }}&#176;</h3>
          <img :src="image" :alt="description" class="w-[120px] ">
          <p class="text-sm">{{ description }} </p>
      </div>
  </div>
</template>


<script>

import moment from 'moment';

export default {
    props: ['date', 'temp', 'description', 'icon'],
    computed: {
        image() {
            return `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
        },
        day() {
            return moment.unix(this.date).format('ddd.');
        },
        degree() {
            return parseInt(this.temp);
        }
    }

}
</script>


