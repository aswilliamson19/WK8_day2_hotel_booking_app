<template lang="html">
  <div id="app">
    <h1>Shangrila Hotel Booking System</h1>
    <bookings-form/>
    <bookings-grid :bookings="bookings"/>
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';
import {eventBus } from './main.js';
import BookingsService from './services/BookingsService';

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

    eventBus.$on('booking-added', booking => this.bookings.push(booking) );

    eventBus.$on('booking-deleted', id => {
      const index = this.bookings.indexOf(booking => booking.id === id);
      this.bookings.splice(index, 1);
    })


  },
  methods: {
    fetchData(){
      BookingsService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style lang="css" scoped>
/* html {
  height: 100%;
} */
#app{
  background: url('./assets/hotel.jpg') no-repeat;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Shrikhand', cursive;

}

h1 {
  text-align: center;
  font-family: 'Shrikhand', cursive;
  color: white;

}
</style>
