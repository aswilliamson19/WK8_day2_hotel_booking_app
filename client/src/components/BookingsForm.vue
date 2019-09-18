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
      <label for="true">Yes </label>
      <input type="radio" id="true" name="checked_in" value=true v-model="check_in_status">
      <label for="false">No</label>
      <input type="radio" id="false" name="checked_in" value=false v-model="check_in_status">
    </div>
    <input type="submit" id="save" value="Save"/>
  </form>
</template>

<script>

import { eventBus } from '../main.js'
import BookingsService from '../services/BookingsService.js';

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
