<template lang="html">
  <form id="bookings-form" v-on:submit="handleSubmit">
    <h2> Add a Booking</h2>
    <div class="formWrap">
      <label for="guest_name">Guest Name: </label>
      <input type="text" id="guest_name" v-model="guest_name" />
    </div>
    <div class="formWrap">
      <label for="guest_email">Guest Email: </label>
      <input type="text" id="guest_email" v-model="guest_email"/>
    </div>
    <div class="formWrap">
      <p>Is the guest checked in?</p>
      <label for="check_in_status">Yes </label>
      <input type="radio" id="yes" name="checked_in">
      <label for="check_in_status">No</label>
      <input type="radio" id="no" name="checked_in">
    </div>
  </form>
</template>

<script>

import { eventBus } from '../main.js'
import BookingService from '../services/BookingsService.js';

export default {
  name: "bookings-form",
  data(){
    return{
      guest_name: "",
      guest_email: "",
      check_in_status: null
    }
  },
  methods:{
    handleSubmit(event){
      event.preventDefault()

      const payload = {
        guest_name: this.guest_name,
        guest_email: this.guest_email,
        check_in_status: this.check_in_status
      };

      BookingsService.postBooking(payload)
      .then(booking => {
        eventBus.$emit('booking-added', booking);
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
