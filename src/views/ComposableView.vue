<script setup>

// import { ref, watch } from 'vue';

// // eslint-disable-next-line no-undef
// let food = ref(localStorage.getItem('food'));
// // eslint-disable-next-line no-undef
// let drink = ref(localStorage.getItem('drink'));

// watch(food, (val) => write('food', val));
// watch(drink, (val) => write('drink', val));

// function write(key, val) {
//     localStorage.setItem(key, val);
// }

// setTimeout(() => {
//     food = 'changed';
// }, 3000);

// ---- composable ----

import { useStorage } from '@/composables/useStorage';

let food = useStorage('food');
let drink = useStorage('drink');
let obj = useStorage('obj', { one: 'one' });

setTimeout(() => {
    obj.value.one = "Changed";
    // obj.value = { changed: "entirely" };
}, 3000);

</script>

<template>
    <div>
        <p>What is your favorite food? <input type="text" v-model="food"></p>
        <p>What is your favorite drink? <input type="text" v-model="drink"></p>
    </div>
</template>