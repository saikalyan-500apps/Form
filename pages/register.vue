<!-- pages/register.vue -->
<template>
    <FormComponent
      :heading="form.Form_Heading"
      :fields="form.Form_Fields"
      :button="form.Form_button"
      @form-submit="register"
    />
  </template>
  
  <script setup>
  import { useFormStore } from '~/store/forms';
  import { useLoginStore } from '~/store/login';
  
  const formStore = useFormStore();
  const form = formStore.register_form[0];
  
  const loginStore = useLoginStore();
  
  const register = (formData) => {
    console.log(formData);
    const userData = {
      FirstName: formData.FirstName,
      LastName: formData.LastName,
      Password: formData.Password,
      Email: formData.Email,
      PhoneNumber: formData.PhoneNumber
    };
  
    console.log('Registering the data', userData);
  
    loginStore.storeUser(userData);
  };
  </script>
  