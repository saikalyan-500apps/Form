<template>
    <div>
      <p>{{ heading }}</p>
  
      <!-- form fields -->
      <div v-for="(field, index) in fields" :key="index">
        <label>{{ field.label }} - {{ c_code }}</label>
        <input :type="field.inputfield" v-model="field.value"/>
      </div>
  
      <!-- button -->
      <button @click="handleSubmit">{{ button }}</button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    heading: String,
    fields: Array,
    button: String,
    c_code : String,
  })
  
  const emits = defineEmits(['form-submit'])
  
  const handleSubmit = () => {
    const formData = {}
    props.fields.forEach(field => {
      formData[field.label] = field.value
      field.value = '' // reset value of the field after submiting.
    })
    emits("form-submit", formData)
  }
  </script>
  