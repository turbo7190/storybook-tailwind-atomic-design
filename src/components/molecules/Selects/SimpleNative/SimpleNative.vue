<template>
  <div>
    <Text
      v-if="label"
      :content="label"
      size="sm"
      weight="medium"
      color="gray-700"
      :custom-class="customLabelClass"
    />
    <select
      id="nativeSelect"
      v-model="selected"
      name="location"
      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
      :class="[`${selected === '' ? 'text-gray-400' : ''}`, customSelectClass]"
      @change="selectedItemChanged"
    >
      <option value="" disabled>
        {{ placeholder }}
      </option>
      <option
        v-for="option in items"
        :key="isSimpleList ? option : option.value"
        :value="isSimpleList ? option : option.value"
        class="text-gray-900"
      >
        {{ isSimpleList ? option : option.text }}
      </option>
    </select>
  </div>
</template>
<script>
/**
 - Native select used to display a list of items
 */
import Text from "../../../atoms/Text/Text.vue";

export default {
  name: "NativeSelect",
  components: {
    Text,
  },
  props: {
    /**
     * items to show in select
     */
    items: {
      type: Array,
      default: () => [],
    },
    /**
     * used to set predefined object value.
     */
    selectedItem: {
      type: String,
      default: null,
    },

    /**
     * label of select
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * placeholder of select
     */
    placeholder: {
      type: String,
      default: "Select an option",
    },
    /**
     * extra class of label
     */
    customLabelClass: {
      type: String,
      default: "",
    },
    /**
     * extra class of select
     */
    customSelectClass: {
      type: String,
      default: "",
    },
    isSimpleList: {
      type: Boolean,
      default: false,
    },
    selectionChanged: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    selected: {
      get() {
        return this.selectedItem || "";
      },
      set(newValue) {
        this.$emit("update:selectedItem", newValue);
      },
    },
  },
  methods: {
    selectedItemChanged(evt) {
      this.$emit("update:selectedItem", evt.target.value);
      if (this.selectionChanged) {
        this.selectionChanged(evt.target.value);
      }
    },
  },
};
</script>
