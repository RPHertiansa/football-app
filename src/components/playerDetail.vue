<template>
  <div>
    <q-dialog
      ref="dialog"
      v-model="isModalPlayerOpen"
      persistent
    >
      <q-card class="modal-container" style="width: 500px; max-width: 50vw;">
        <div class="q-ma-md">
          <div class="row items-center">
            <div class="col-10">
              <div class="text-h4">
                {{ playerDetail.name || "-" }}
                -
                {{ playerDetail.shirtNumber }}
              </div>
              <div class="text-h6">
              <span>
                <q-icon
                  class="q-mr-xs"
                  name="person"
                  size="30px"
                />
              </span>
                {{ playerDetail.position || "-" }}
              </div>
              <div class="text-h6">
              <span>
                <q-icon
                  class="q-mr-xs"
                  name="flag"
                  size="30px"
                />
              </span>
                {{ playerDetail.nationality || "-" }}
              </div>
              <div class="text-h6">
              <span>
                <q-icon
                  class="q-mr-xs"
                  name="calendar_month"
                  size="30px"
                />
              </span>
                {{ playerDetail.dateOfBirth || "-" }}
              </div>
            </div>
          </div>
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
  name: "PlayerModal"
});
</script>
<script setup>
import { onMounted, computed, defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  id: { type: String, default: "" }
});

onMounted(() => {
  getPlayerDetail();
});

const isModalPlayerOpen = computed(() => {
  return store.getters["football/isModalPlayerOpen"];
});
const closeModal = () => {
  store.commit("football/setModalPlayer", false);
};

const getPlayerDetail = () => {
  store.dispatch("football/getPlayerDetail", props.id);
};
const playerDetail = computed(() => {
  return store.getters["football/getPlayerDetail"];
});

</script>
