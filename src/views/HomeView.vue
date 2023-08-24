<!-- <script setup>
// import TheWelcome from '../components/TheWelcome.vue'
// import { ref } from 'vue'

// eslint-disable-next-line no-undef
let message = $ref('Hello world');

setTimeout(() => {
  message = 'Hola Mundo';
}, 2000);

let doSomething = () => {
  alert(message);
};

</script> -->


<!-- composables -->
<!-- <script>
// import flash from '@/mixins/flash'

import { useFlash } from '@/composables/useFlash'

export default {
  // mixins: [ flash ]

  setup() {
    let { flash } = useFlash();

    return { flash };
  }
}
</script> -->

<script setup>
  import { ref } from "vue";
  import TabbableTextarea from "@/components/TabbableTextarea.vue";

  let comment = ref('test value');
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->

    <!-- <p>{{ message }}</p>

    <input type="text" v-model="message">

    <button @click="doSomething">Btn</button>

    <hr> -->

    <!-- composables -->
    <!-- <button @click="flash('Home Page', 'Hello form home', 'info')">Click</button> -->

    <form>
      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px;"></TabbableTextarea>
    </form>
  </main>


</template>
