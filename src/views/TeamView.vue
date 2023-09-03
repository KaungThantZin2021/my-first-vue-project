<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import HeadFooter from "@/components/Teams/TeamFooter.vue";

// import team from '@/team.json';

import { useTeamStore } from "@/stores/TeamStore";

let team = useTeamStore();
team.fill();

setTimeout(() => {
  team.grow(25);
}, 3000);

</script>

<template>
  <TeamHeader />

  <div class="place-self-center flex flex-col gap-y-3">

    <TeamMembers />

  </div>

  <HeadFooter />
</template>