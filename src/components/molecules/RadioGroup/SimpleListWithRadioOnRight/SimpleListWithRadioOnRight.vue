
<template>
  <fieldset>
    <Text
      size="lg"
      weight="medium"
      color="gray-900"
      :content="label"
    />
    <div class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
      <div
        v-for="(item, itemIdx) in items"
        :key="itemIdx"
        class="relative flex items-start py-4"
      >
        <div class="min-w-0 flex-1 text-sm">
          <Text
            :for="item.id"
            size="sm"
            weight="medium"
            color="gray-700"
            :content="item.name"
            class="select-none"
          />
        </div>
        <div class="ml-3 flex items-center h-5">
          <input
            :id="`item-${item.id}`"
            v-model="inputValue"
            name="item"
            type="radio"
            :value="item"
            class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
          >
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
     * items to show as radiogroup items
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
