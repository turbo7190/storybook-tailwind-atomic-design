<template>
  <div class="relative">
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
      class="rounded-md border px-3 py-2 bg-none pl-3 pr-8 text-base font-medium focus:ring-2 focus:ring-primary-600"
      :class="[`${selected === '' ? 'text-gray-400' : ''}`, customSelectClass]"
      @change="selectionChanged"
    >
      <option value="" disabled>
        {{ placeholder }}
      </option>
      <option
        v-for="option in items"
        :key="option.id"
        :value="option"
        class="text-gray-900"
      >
        {{ option[displayProp] }}
      </option>
    </select>
  </div>
</template>
<script>
/**
 - Native select used to display a list of items
 */
import { computed } from "vue";
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
     * used to set predefined value.
     */
    selectedItem: {
      type: Object,
      default: () => {},
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
    /**
     * extra class of select
     */
    displayProp: {
      type: String,
      default: "name",
    },
    /**
     * action on selected Item Changed
     */
    selectedItemChanged: {
      type: Function,
      default: () => {},
    },
  },
  setup(props, { emit }) {
    const selected = computed({
      get() {
        return props.selectedItem;
      },
      set(newValue) {
        emit("update:selectedItem", newValue);
      },
    });
    const selectionChanged = (evt) => {
      const { selectedIndex } = evt.currentTarget;
      emit("update:selectedItem", props.items[selectedIndex - 1]);
      props.selectedItemChanged(props.items[selectedIndex - 1]);
    };

    return {
      selected,
      selectionChanged,
    };
  },
};
</script>
