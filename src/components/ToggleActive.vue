<template>
  <label @click="$emit('update:modelValue', !value)" class="toggle-switch">
    <div class="toggle-switch__title">Show active only</div>
    <vue-switch class="has-margin-medium is-info" :modelValue="value" />
  </label>
</template>

<script>
import VueSwitch from '@enso-ui/switch/bulma';

export default {
  name: 'ToggleActive',
  components: {
    VueSwitch,
  },
  props: {
    value: {
      type: [Boolean, Number],
      required: true,
      default: false,
    },
  },
  emits: ['update:modelValue'],
};
</script>

<style scoped>
.toggle-switch {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.toggle-switch__title {
  pointer-events: none;
  user-select: none;
}
</style>
