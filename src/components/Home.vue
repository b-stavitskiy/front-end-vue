<template>
  <div class="container is-widescreen" style="margin-top: 15px;">
    <vue-table class="box is-paddingless is-rounded"
      path="https://test.1234.lc/api/testData/initTable"
      id="example"/>
  </div>
</template>

<script>
import { VueTable } from '@enso-ui/tables/bulma';

export default {
  name: 'Home',
  components: {
    VueTable,
  },
};
</script>
