
<template>
  <fieldset class="space-y-4">
    <div
      v-for="item in items"
      :key="item.id"
      class="relative flex items-start"
    >
      <div class="flex items-center h-5">
        <input
          :id="item.id"
          v-model="selectedItems"
          :value="item"
          aria-describedby="comments-description"
          :name="item.name"
          type="checkbox"
          class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
        >
      </div>
      <div class="ml-3">
        <Text
          for="comments"
          size="sm"
          weight="medium"
          color="gray-700"
          :content="item.title"
        />
        <Text
          id="comments-description"
          size="sm"
          weight="medium"
          color="gray-500"
          :content="item.description"
        />
      </div>
    </div>
  </fieldset>
</template>

<script>
/**
- Checkbox List with text
- options to  title,description
**/
import Text from "../../../atoms/Text/Text.vue";
export default {
  components: {
    Text,
  },
  props: {
    /**
    list of items
    */
    items: {
      type: Array,
      default: () => [],
    },
    /**
    state of checkbox.
    */
    selected: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    selectedItems: {
      get() {
        return this.selected;
      },
      set(newValue) {
        this.$emit("update:selected", newValue);
      },
    },
  },
};
</script>
