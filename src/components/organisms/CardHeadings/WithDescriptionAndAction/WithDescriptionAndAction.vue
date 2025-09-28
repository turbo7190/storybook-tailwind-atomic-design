<template>
  <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
    <div
      class="
        -ml-4
        -mt-4
        flex
        justify-between
        items-center
        flex-wrap
        sm:flex-nowrap
      "
    >
      <div class="ml-4 mt-4">
        <Text size="lg" weight="medium" color="gray-900" :content="title"/>
        <Text size="sm" color="gray-500" :content="description" class="mt-1"/>
      </div>
      <div class="ml-4 mt-4 flex-shrink-0">
        <Button :content="btnText" variant="primary" :onClick="onClick" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../../atoms/Button/Button.vue";
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show simple card header with description and action
 */
export default {
  components: { Button, Text },
  props: {
    /**
     * Use it to show title
     */
    title: {
      type: String,
    },
    /**
     * Use it to show description
     */
    description: {
      type: String,
    },
    /**
     * Use it for button label
     */
    btnText: {
      type: String,
    },
    /**
     * Use it for button action
     */
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>