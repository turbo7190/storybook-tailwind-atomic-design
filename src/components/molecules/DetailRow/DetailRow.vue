<template lang="html">
  <div class="w-full grid grid-cols-3 gap-1 my-2">
    <Text size="sm" color="gray-500" :content="label" class="col-span-1" />
    <Text size="sm" color="gray-500" :content="value" class="col-span-2" />
  </div>
</template>

<script>
import Text from "../../atoms/Text/Text.vue";
/**
 * - Use it to show a row with label and value
 */
export default {
  components: {
    Text,
  },
  props: {
    /**
     * use it for label
     */
    label: {
      type: String,
      defaul: "",
    },
    /**
     * use it for value
     */
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="css"></style>
