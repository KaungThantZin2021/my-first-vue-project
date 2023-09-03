<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Transition
        enter-from-class="opacity-0 scale-125"
        enter-to-class="opacity-100 scale-100"
        enter-active-class="transition duration-300"
        leave-active-class="transition duration-200"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-125"
    >
    <!-- Or (Transition) -->
    <!-- <Transition class="modal"> -->
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <div>
                    <slot>
                        <h1>Default Body</h1>
                    </slot>
                </div>
                <footer class="modal-footer">
                    <slot name="footer">
                        <button @click="$emit('close')">Close</button>
                    </slot>
                </footer>
            </div>
        </div>
    </Transition>
</template>

<script setup>
defineProps({
    show: Boolean
})
</script>

<style>
.modal-mask {
    position: fixed;
    inset: 0;
    background: rgb(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
}

.modal-container {
    background: white;
    padding: 1rem;
    width: 40vw;
    min-width: 500px;
    border-radius: 7px;
}

.modal-footer {
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding: 0.5rem;
    font-size: .8rem;
}

.modal-footer button {
    background: #ddd;
    padding: .25rem .75rem;
    border-radius: 20px;
    font-size: 15px;
}

.modal-footer button:hover {
    background: #c8c8c8;
}

/* .modal-enter-active, .modal-leave-active {
    transition: opacity 1s;
}

.modal-enter-from, .modal-leave-from {
    opacity: 0;
}

.modal-enter-to, .modal-leave-to {
    opacity: 100;
} */
</style>