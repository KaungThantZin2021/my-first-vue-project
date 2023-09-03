<script setup>
import { useTeamStore } from "@/stores/TeamStore";
import Modal from "@/components/Modal.vue";
import { ref } from "vue";

let team = useTeamStore();
let showModal = ref(false);

// Teleport Test
let loaded = ref(false);
setTimeout(() => {
  loaded.value = true;
}, 2000);

</script>

<template>
    <div>
      <button
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="!team.spotsRemaining"
        @click="showModal = true"
      >
        Add Member ({{ team.spotsRemaining }} Spots Left)
      </button>
    </div>

    <Teleport v-if="loaded" to="#teleportTest">
        <Modal :show="showModal" @close="showModal = false">
        
        <template #default>
            <p>Need to add new member to team?</p>
            <form class="mt-6">
            <div class="flex gap-2">
                <input type="email" placeholder="Email Address..." class="flex-1">
                <button>Add</button>
            </div>
            </form>
        </template>
        </Modal>
    </Teleport>
</template>
