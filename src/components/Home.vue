<template>
  <div class="home container is-widescreen">
    <toggle-active
      class="switch"
      v-model="active"
      @update:modelValue="(value) => (active = value)"
    />
    <vue-table
      class="box is-paddingless is-rounded"
      :intervals="intervals"
      :path="path"
      id="example"
    >
      <template v-slot:status_id="{ row, column }">
        <span>{{ replaceStatus(row[column.name]) }}</span>
      </template>
    </vue-table>
  </div>
</template>

<script>
import ToggleActive from "./ToggleActive.vue";
import { VueTable } from "@enso-ui/tables/bulma";
import { statuses } from "../static/statuses";

export default {
  name: "Home",
  components: {
    VueTable,
    ToggleActive,
  },
  data() {
    return {
      path: "https://test.1234.lc/api/testData/initTable",
      active: false,
    };
  },
  computed: {
    intervals() {
      return {
        test_data: {
          deleted_at: {
            min: this.active ? 0 : null,
          },
        },
      };
    },
  },
  methods: {
    replaceStatus(id) {
      return statuses[id] || statuses[0];
    },
  },
};
</script>

<style scoped>
.home {
  margin-top: 15px;
  position: relative;
}

.switch {
  position: absolute;
  top: 0.5em;
  right: 1em;
  z-index: 1;
}
</style>
