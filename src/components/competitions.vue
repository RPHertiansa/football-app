<template>
  <div>
    <q-dialog
      ref="dialog"
      v-model="isModalOpen"
      persistent
    >
      <q-card class="modal-container">
        <div class="q-py-md q-px-lg">
          <div>
            <div class="text-primary text-h5 text-bold q-my-md row items-center">
              <q-icon
                class="q-mr-sm"
                name="person_add"
                size="36px"
              />
              <span><b>Pilih Counter Anda</b></span>
            </div>
          </div>
          {{ competitionsList.length === 0 ? "TEST" : competitionsList }}
          <q-btn
            name="ButtonClose"
            unelevated
            no-caps
            outline
            class="btn-100 outline"
            color="primary"
            type="button"
            label="Close"
            @click="closeModal"
          />
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
import { computed } from "vue";

const store = useStore();

const isModalOpen = computed(() => {
  return store.getters["football/isModalOpen"];
});
const closeModal = () => {
  store.commit("football/setModal", false);
};

const competitionsList = computed(() => {
  return store.getters["football/getCompetitionList"];
});

</script>
