
<template>
  <div>
    <Text
      size="lg"
      weight="medium"
      color="gray-900"
      :content="title"
      custom-class="leading-6"
    />
    <Text
      size="sm"
      weight="normal"
      color="gray-500"
      :content="subtitle"
      class="mt-1"
    />
    <fieldset class="mt-2">
      <legend class="sr-only">
        {{ title }}
      </legend>
      <div class="divide-y divide-gray-200">
        <div
          v-for="(item, itemIdx) in items"
          :key="itemIdx"
          class="relative flex items-start py-4"
        >
          <div class="min-w-0 flex-1 text-sm">
            <Text
              :for="`item-${item.id}`"
              weight="medium"
              color="gray-700"
              :content="item.name"
            />
            <Text
              :id="`item-${item.id}-description`"
              weight="normal"
              color="gray-500"
              :content="item.description"
            />
          </div>
          <div class="ml-3 flex items-center h-5">
            <input
              :id="`item-${item.id}`"
              v-model="inputValue"
              :aria-describedby="`item-${item.id}-description`"
              name="item"
              type="radio"
              :value="item"
              class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
            >
          </div>
        </div>
      </div>
    </fieldset>
  </div>
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
    title: {
      type: String,
      default: "",
    },
    /**
     * to display a subheading
     */
    subtitle: {
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
