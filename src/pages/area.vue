<template>
  <q-page class="flex flex-center q-pa-lg">
    <div class="text-h3 text-center">Areas</div>

    <div class="row">
      <div v-for="area in areas" :key="area" class="col-3">
        <q-card class="my-card q-ma-sm cursor-pointer" @click="getCompetitions(area)">
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
    </div>
    <competitions-modal :title="selectedArea" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AreaPage"
});
</script>
<script setup>
import { onMounted, computed, ref } from "vue";
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
const selectedArea = ref("");
const getCompetitions = async (area) => {
  await store.dispatch("football/getCompetitionList", area.id);
  selectedArea.value = area.name;
  store.commit("football/setModal", true);
};
</script>
