<template>
    <FormComponent
      :heading="form.Form_Heading"
      :fields="form.Form_Fields"
      :button="form.Form_button"
      @form-submit="fetchData"
    />
    <div class="info">
      <h2>City: {{ places.name }}, {{ places.region }}, {{ places.country }}</h2>
      <p>Latitude: {{ places.lat }} / Longitude: {{ places.lon }}</p>
      <p>Temperature: {{ places_current.temp_c }}°C / {{ places_current.temp_f }}°F</p>
      <img v-if="places_current.temp_c > 20" src="https://www.freepnglogos.com/uploads/sun-png/sun-day-rays-sun-image-pixabay-35.png" alt="sun">
      <img v-else-if="places_current.temp_c < 20 && places_current.temp_c > 10" src="https://www.freeiconspng.com/thumbs/cloud-icon/cloud-icon-16.png" alt="cloud">
      <img v-else src="https://cdn-icons-png.flaticon.com/512/414/414866.png" alt="snow"> <!-- Corrected the else condition -->
      <p>Local Time: {{ places.localtime }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useFormStore } from '~/store/forms';
  
  const formStore = useFormStore();
  const form = formStore.Weather_Api_form[0];
  
  const places = ref({});
  const places_current = ref({});
  const placeName = ref('');
  
  const fetchData = async (formData) => {
    placeName.value = formData["Enter City"]; 
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${placeName.value}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3f4174474amsh600331a31614d2ep12bf23jsndddced32c21c',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      places.value = result.location;
      places_current.value = result.current;
      console.log(places.value);
      console.log(places_current.value);
    } catch (error) {
      console.error(error);
    }
  };
  </script>

  