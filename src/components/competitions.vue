<template>
  <div>
    <q-dialog
      ref="dialog"
      v-model="isModalOpen"
      persistent
    >
      <q-card class="modal-container" style="width: 500px; max-width: 50vw;">
        <div class="q-pa-md">
          <div>
            <div class="text-primary text-h5 text-bold q-my-md row items-center">
              <q-icon
                class="q-mr-sm"
                name="sports_soccer"
                size="36px"
              />
              <span><b>{{ props.title }}</b></span>
            </div>
          </div>
          <div v-if="competitionsList.length === 0">
            No Data
          </div>
          <div v-else class="row">
            <div v-for="competition in competitionsList" :key="competition" class="col-6">
              <q-card class="my-card q-mx-lg cursor-pointer" @click="getTeams(competition)">
                <q-card-section>
                  <div class="text-h6">{{ competition.name }}</div>
                  <div v-if="competition.emblem === null">
                    <q-icon
                      class="q-mr-sm"
                      name="shield"
                      size="60px"
                    />
                  </div>
                  <div v-else>
                    <img
                      :alt="competition.name"
                      :src="competition.emblem"
                      style="width: 120px;"
                    >
                  </div>
                </q-card-section>

              </q-card>
            </div>
          </div>
          <div class="row">
            <q-btn
              name="ButtonClose"
              unelevated
              no-caps
              outline
              class="btn-100 outline q-mt-lg q-ml-auto"
              color="primary"
              type="button"
              label="Close"
              @click="closeModal"
            />
          </div>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CompetitionsModal"
});
</script>
<script setup>
import { useStore } from "vuex";
import { computed, defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  title: { type: String, default: "" }
});
const store = useStore();
const router = useRouter();


const isModalOpen = computed(() => {
  return store.getters["football/isModalOpen"];
});
const closeModal = () => {
  store.commit("football/setModal", false);
  store.commit("football/setCompetitionList", []);
};

const competitionsList = computed(() => {
  return store.getters["football/getCompetitionList"];
});
const getTeams = async (competition) => {
  await store.dispatch("football/getTeamList", competition.code);
  await router.push(`/competitions/${competition.code}/teams`);
  closeModal();
};
</script>
