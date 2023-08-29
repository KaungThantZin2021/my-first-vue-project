// import { reactive } from "vue";

// export let counter = reactive({
//     count: 0,
//     increment () {
//         if (this.count >= 10) {
//             return;
//         }
//         this.count++
//     }
// });

import { defineStore } from "pinia";

export let useCounterStore = defineStore('counter', {

    // data
    state: () => ({
        count: 0
    }),

    // method
    actions: {
        increment() {
            if (this.count < 10) {
                this.count++;
            }
        }
    },
    
    // computed
    getters: {
        remaining() {
            return 10 - this.count;
        }
    }
});