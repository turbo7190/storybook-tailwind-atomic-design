
<template>
  <div>
    <Text
      v-if="label"
      size="base"
      weight="medium"
      color="gray-900"
      :content="label"
    />
    <Text
      v-if="description"
      size="sm"
      weight="normal"
      color="gray-500"
      :content="description"
      custom-class="leading-5"
    />
    <fieldset class="mt-4">
      <div
        class="space-y-4"
        :class="`${inline ? 'sm:flex sm:items-center sm:space-y-0 sm:space-x-10':''}`"
      >
        <div
          v-for="(item,index) in items"
          :key="index"
          class="flex items-center"
        >
          <input
            :id="`item-${index}`"
            v-model="inputValue"
            name="item"
            type="radio"
            :value="item"
            class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
          >
          <Text
            :for="`item-${index}`"
            size="sm"
            weight="medium"
            color="gray-700"
            :content="isSimpleList ? item :item[displayProp]"
            class="ml-3 block"
          />
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
/**
 * Simple Radio Group layout with options to:
 * - show Label and descriptiom
 * - toggle between vertical and inline(horizontal) view
 * - use list of objects (by default) with option to chose display prop
 * - display list of strings when isSimpleList is set
 */
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
      type: String,
      default: null,
    },
    /**
     * for assigning predefined object value
     */
    selectedItem: {
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
    /**
     * to display a description
     */
    description: {
      type: String,
      default: "",
    },
    /**
     *  to toggle orientation. Default is false so radio button will be in vertical orientation
     */
    inline: {
      type: Boolean,
      default: false,
    },
    /**
     * when set to true allows simple lists like list of string or numbers
     */
    isSimpleList: {
      type: Boolean,
      default: false,
    },
    /**
     * used to set display property for text shown with radio button.
     * not used when isSimpleList is true
     * set to title by default
     */
    displayProp: {
      type: String,
      default: "title",
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.isSimpleList ? this.value : this.selectedItem;
      },
      set(newValue) {
        this.$emit(
          this.isSimpleList ? "update:value" : "update:selectedItem",
          newValue
        );
      },
    },
  },
};
</script>
