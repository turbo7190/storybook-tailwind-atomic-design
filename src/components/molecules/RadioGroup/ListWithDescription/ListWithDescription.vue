
<template>
  <fieldset>
    <legend class="text-sm">
      {{ label }}
    </legend>
    <div class="space-y-5">
      <div
        v-for="item in items"
        :key="item.id"
        class="relative flex items-start"
      >
        <div class="flex items-center h-5">
          <input
            :id="item.id"
            v-model="inputValue"
            :aria-describedby="`${item.id}-description`"
            name="item"
            type="radio"
            :value="item"
            class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
          >
        </div>
        <div class="ml-3 text-sm">
          <Text
            :for="item.id"
            weight="medium"
            color="gray-700"
            :content="item.name"
          />
          <Text
            :id="`${item.id}-description`"
            weight="normal"
            color="gray-500"
            :content="item.description"
          />
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
import Text from "../../../atoms/Text/Text.vue";
export default {
  components: {
    Text,
  },
  props: {
    /**
     * items to show as radiogroup options
     */
    items: {
      type: Array,
      default: () => [],
    },
    /**
     * for assigning predefined value
     */
    value: {
      type: Object,
      default: () => {},
    },
    /**
     * to display a heading
     */
    label: {
      type: String,
      default: "",
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("update:value", newValue);
      },
    },
  },
};
</script>
