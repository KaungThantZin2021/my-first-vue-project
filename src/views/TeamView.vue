<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import HeadFooter from "@/components/Teams/TeamFooter.vue";
import Modal from "@/components/Modal.vue";
import { ref } from "vue";

// import team from '@/team.json';

import { useTeamStore } from "@/stores/TeamStore";

let team = useTeamStore();
team.fill();

let showModal = ref(false);

</script>

<template>
  <TeamHeader @add="showModal = true" />

  <div class="place-self-center flex flex-col gap-y-3">

    <TeamMembers />

  </div>

  <HeadFooter />

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

</template>