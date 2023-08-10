<script>
import { useFlash } from '@/composables/useFlash'

export default {
  setup() {
    let { flash } = useFlash();

    return { flash };
  }
}
</script>

<template>
  <div>
    <h1>This is an about page</h1>

    <button @click="flash('About Page', 'Hello form about', 'info')">Click</button>

  </div>
</template>
