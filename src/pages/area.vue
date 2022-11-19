<template>
  <q-page class="flex flex-center">
    <div v-for="area in areas" :key="area">
      <q-card class="my-card" @click="getCompetitions(area.id)">
        <q-card-section>
          <div class="text-h6">{{ area.name }}</div>
          <div v-if="area.flag === null">
            <q-icon
              class="q-mr-sm"
              name="flag"
              size="60px"
            />
          </div>
          <div v-else>
            <img
              :alt="area.name"
              :src="area.flag"
              style="width: 120px;"
            >
          </div>
        </q-card-section>

      </q-card>
    </div>
    <q-btn
      name="ButtonNext"
      no-caps
      fab
      stack
      icon="fast_forward"
      label="Selanjutnya"
      @click="getAreas"
    />
    <competitions-modal />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AreaPage"
});
</script>
<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import CompetitionsModal from "src/components/competitions";

onMounted(() => {
  getAreas();
});
const store = useStore();
const getAreas = () => {
  store.dispatch("football/getAreaList");
};
const areas = computed(() => {
  return store.getters["football/getAreaList"];
});
const getCompetitions = (id) => {
  store.commit("football/setModal", true);
  store.dispatch("football/getCompetitionList", id);
};
</script>
