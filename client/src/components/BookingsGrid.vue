<template lang="html">
  <div id="bookingsGrid">
    <div class="booking" v-for="booking in bookings">
      <h2>Guest name: {{ booking.guest_name }}</h2>
      <p>Guest e-mail: {{ booking.guest_email }}</p>
      <p>Special occassions: {{ booking.special_occassion }}</p>
      <p>Checked in: {{ booking.check_in_status }}</p>
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
#bookingsGrid{
  font-family: 'Shrikhand', cursive;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.booking {
  width: 30%;
  background: #B8A6C5;
  margin-bottom: 20px;
  padding: 25px;
}

button{
  color: #C5A8A6;
  border: none;
  font-size: 14px;
  padding: 10px;
  margin-top: 10px;
  /* background: #C5A8A6; */
}
</style>
