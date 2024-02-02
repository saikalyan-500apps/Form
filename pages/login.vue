<template>
    <FormComponent
      :heading="form.Form_Heading"
      :fields="form.Form_Fields"
      :button="form.Form_button"
      @form-submit="login"
    />
  </template>
  
  <script setup>
  import { useFormStore } from '~/store/forms';
  import { useLoginStore } from '~/store/login';
  
  
  const formStore = useFormStore();
  const form = formStore.login_form[0];
  
  const loginStore = useLoginStore();
  
  const login = (formData) => {
      console.log('Submitted form data:', formData);
  
      // Set email and password in login store
      loginStore.setEmail(formData.Email);
      loginStore.setPassword(formData.Password);
  
      // Check login credentials
      const loggedInUser = loginStore.checkLogin(formData.Username, formData.Password);
  
      console.log('Registered users:', loginStore.registeredUser_data);
  
      if (loggedInUser) {
          console.log('Login successful');
          
      } else {
          console.log('Invalid email or password');
          
      }
  }
  </script>
  