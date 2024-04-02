<template>
  <div class="container is-widescreen" style="margin-top: 15px">
    <vue-table
      class="box is-paddingless is-rounded"
      path="https://test.1234.lc/api/testData/initTable"
      id="example"
    >
      <template v-slot:status_id="{ row, column }">
        <span>{{ replaceStatus(row[column.name]) }}</span>
      </template>
    </vue-table>
  </div>
</template>

<script>
import { VueTable } from '@enso-ui/tables/bulma';
import { statuses } from '../static/statuses';

export default {
  name: 'Home',
  components: {
    VueTable,
  },
  methods: {
    replaceStatus(id) {
      return statuses[id] ?? null;
    },
  },
};
</script>
