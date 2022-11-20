<template>
  <q-page class="flex flex-center">
    <div v-for="team in teams" :key="team">
      <q-card class="my-card" @click="getTeamDetail(team)">
        <q-card-section>
          <div class="text-h6">{{ team.name }}</div>
          <div v-if="team.crest === null">
            <q-icon
              class="q-mr-sm"
              name="flag"
              size="60px"
            />
          </div>
          <div v-else>
            <img
              :alt="team.name"
              :src="team.crest"
              style="width: 120px;"
            >
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TeamsPage"
});
</script>
<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
onMounted(() => {
  getTeams();
});
const store = useStore();
const getTeams = () => {
  store.dispatch("football/getTeamList", route.params.id);
};
const teams = computed(() => {
  return store.getters["football/getTeamList"];
});

const getTeamDetail = async (team) => {
  await store.dispatch("football/getTeamDetail", team.id);
  await router.push(`/teams/${team.id}`);
};
</script>
