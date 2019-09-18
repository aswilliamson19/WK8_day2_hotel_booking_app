<template lang="html">
  <form id="bookings-form" v-on:submit="handleSubmit">
    <h2> Add a Booking</h2>
    <div class="formWrap">
      <label for="guest_name">Guest Name: </label>
      <input type="text" id="guest_name" v-model="guest_name" required />
    </div>
    <div class="formWrap">
      <label for="guest_email">Guest Email: </label>
      <input type="text" id="guest_email" v-model="guest_email" required />
    </div>
    <div class="formWrap">
      <p>Is the guest checked in?</p>
      <label for="true">Yes </label>
      <input type="radio" id="true" name="checked_in" v-bind:value="true" v-model="check_in_status" required>
      <label for="false">No</label>
      <input type="radio" id="false" name="checked_in" v-bind:value="false" v-model="check_in_status" required>
    </div>
    <div class="formWrap">
      <p>Is it a special occassion?
      <input type="checkbox" v-model="special_occassion" true-value="yes" false-value="no"></p>
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
      check_in_status: null,
      special_occassion: null
    }
  },
  methods:{
    handleSubmit(event){
      event.preventDefault()
      {document.getElementById("bookings-form").reset()}

      const payload = {
        guest_name: this.guest_name,
        guest_email: this.guest_email,
        check_in_status: this.check_in_status,
        special_occassion: this.special_occassion
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

h2 {
  margin: 10px 0;
  padding: 4px;
  font-family: 'Shrikhand', cursive;
}

form {
  text-align: center;
  width: 35%;
  margin: 0 auto;
  background: #A6C3C5;
  padding:  20px;
  margin-bottom:  40px;
  font-family: 'Shrikhand', cursive;
  opacity: 0.9;
}

#save{
  color: #C5A8A6;
  border: none;
  font-size: 14px;
  padding: 10px;
  margin-top: 10px;
}
</style>
