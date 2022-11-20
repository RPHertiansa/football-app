<template>
  <q-page class=" q-pa-md">
    <div class="row items-center">
      <div class="col-2 q-pl-lg">
        <div v-if="teamDetail.crest === null">
          <q-icon
            class="q-mr-sm"
            name="flag"
            size="60px"
          />
        </div>
        <div v-else>
          <img
            :alt="teamDetail.name"
            :src="teamDetail.crest"
            style="width: 120px;"
          >
        </div>
      </div>
      <div class="col-10">
        <div class="text-h3">{{ teamDetail.name || "-" }}</div>
        <div class="text-h5">
          <span>
            <q-icon
              class="q-mr-xs"
              name="place"
              size="30px"
            />
          </span>{{ teamDetail.address || "-" }}
        </div>
        <div class="text-h5">
           <span>
            <q-icon
              class="q-mr-xs"
              name="stadium"
              size="30px"
            />
          </span>{{ teamDetail.venue || "-" }}
        </div>
        <div class="text-h5">
           <span>
            <q-icon
              class="q-mr-xs"
              name="language"
              size="30px"
            />
          </span>{{ teamDetail.website || "-" }}
        </div>
      </div>
    </div>
    <div class="text-h5 text-center">Players:</div>
    <div class="row q-mt-md">
      <div v-for="player in playerList" :key="player" class="col-3">
        <q-card class="my-card q-mb-md q-mx-md cursor-pointer" @click="getPlayerDetail(player)">
          <q-card-section>
            <div class="text-h6">{{ player.name }}</div>
            <div class="text-caption">{{ player.position }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <player-modal :id="playerId" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TeamDetail"
});
</script>
<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import PlayerModal from "src/components/playerDetail";

const route = useRoute();
onMounted(() => {
  getTeamDetail();
});
const store = useStore();
const getTeamDetail = () => {
  store.dispatch("football/getTeamDetail", route.params.id);
};

const teamDetail = computed(() => {
  return store.getters["football/getTeamDetail"];
});
const playerList = computed(() => {
  return store.getters["football/getPlayerList"];
});
const playerId = ref("");
const getPlayerDetail = async (player) => {
  await store.dispatch("football/getPlayerDetail", player.id);
  playerId.value = player.id;
  store.commit("football/setModalPlayer", true);
};
</script>
