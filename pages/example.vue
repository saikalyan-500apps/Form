<template>
    <!-- v-if -->
    <div v-if="data">Visible when data is true</div>

    <!-- v-if else -->
    <div v-if="isVisible">Visible when isVisible is true</div>
    <div v-else>Visible when isVisible is false</div>

    <!-- v-else-if -->
    <div v-if="data">This is v else if.</div>
    <div v-else-if="isVisible">This is else if condition. Visible when if is false</div>
    <div v-else>This is else condition. Visible when if else if is false.</div>

    <!-- v-for -->
    <div v-for="i in info" :key="i.id">name: {{ i.name }} - age: {{ i.age }}</div>

    <!-- v-on -->
    <button v-on:click="sampleButton">Click me</button>
    <div>{{ showData }}</div>

    <!-- v-model -->
    <input type="text" v-model="print">
    <p>{{ print }}</p>

    <!-- v-show -->
    <div v-show="isVisible">
        This is only visible when isVisible is true. It doesn't have an else.
    </div>
</template>

<script setup>
import { ref } from 'vue';

const data = false;
const isVisible = false;
const showData = ref("This is button click before reaction");

const print = ref("Display this data");

const info = [
    { id: 1, name: "kalyan", age: 23 },
    { id: 2, name: "sanjana", age: 24 },
    { id: 3, name: "eshwwar", age: 23 },
    { id: 4, name: "sohal", age: 23 }
];

const sampleButton = () => {
    showData.value = "This is button click after reaction";
};
</script>
