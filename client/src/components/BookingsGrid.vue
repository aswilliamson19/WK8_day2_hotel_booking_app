<template lang="html">
  <div id="bookingsGrid">
    <div class="booking" v-for="booking in bookings">
      <h2>{{ booking.guest_name }}</h2>
      <p>{{ booking.guest_email }}</p>
      <p>{{ booking.check_in_status }}</p>
      <button v-on:click="handleDelete(booking._id)">Delete booking</button>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import BookingsService from '../services/BookingsService.js';

export default {
  name: "bookings-grid",
  props: ["bookings"],
  methods: {
    handleDelete(id) {
      BookingsService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id));
    }
  }
}
</script>

<style lang="css" scoped>
</style>
