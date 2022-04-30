<template>
  <div class="flex items-center font-comfortaa">
      <div>
          <img :src="icon" :alt="description" class="w-[200px] ">
      </div>
      <div class="mr-5">
          <h2 class="text-9xl font-bold">{{ theDegree }}&#176;</h2>
      </div>
      <div class="flex flex-col items-start">
          <h2 class="text-5xl capitalize font-bold">{{ city }} </h2>
          <p>{{ time }}</p>
          <p>{{ description }} </p>
      </div>
  </div>
</template>

<script>

import moment from 'moment';

export default {
    props: ['city', 'degree', 'image', 'description'],
    computed: {
        icon() {
            return require('../assets/' + this.image);
        },
        theDegree() {
            return parseInt(this.degree);
        },
        time() {
            return moment().format('hh:mm - MMMM Do, YY')
        }
    }
}
</script>
