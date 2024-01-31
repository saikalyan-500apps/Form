<!-- pages/captcha.vue -->
<template>
   <FormComponent
      :heading="form.Form_Heading"
      :c_code="correctCode"
      :fields="form.Form_Fields"
      :button="form.Form_button"
      @form-submit="checkCode"
    />
</template>

<script setup>
import { ref } from 'vue';
import { useFormStore } from '~/store/forms';

const FormStore = useFormStore();
const form = FormStore.captcha_form[0];

const correctCode = ref(generateRandomCode());
const message = ref('');

function generateRandomCode() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

function checkCode(formData) {
  if (verifyCaptcha(formData.code)) {
    message.value = 'Successful!';
    console.log('Successful');
  } else {
    message.value = 'Incorrect code. Please try again.';
    console.log('Not correct');
  }
}

function verifyCaptcha(inputCode) {
  return inputCode === correctCode.value;
}
</script>
