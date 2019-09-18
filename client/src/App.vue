<template lang="html">
  <div id="app">
    <bookings-form/>
    <bookings-grid :bookings="bookings"/>
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';
import {eventBus } from './main.js';
import BookingService from './services/BookingService';

export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  },
  mounted() {
    this.fetchData();

    eventBus.$on('booking-added', booking => this.bookings.push(booking) )
  }
}
</script>

<style lang="css" scoped>
</style>
