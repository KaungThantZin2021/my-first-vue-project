<script>
import { useFlash } from '@/composables/useFlash';
import { useCounterStore } from "@/stores/CounterStore";
let counter = useCounterStore();

export default {
  setup() {
    let { flash } = useFlash();

    return { flash, counter };
  }
}
</script>

<template>
  <div>
    <h1>This is an about page. Count is {{ counter.count }}</h1>

    <button @click="flash('About Page', 'Hello form about', 'info')">Click</button>

  </div>
</template>
@/stores/CounterStore