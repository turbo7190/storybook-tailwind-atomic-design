<template lang="html">
  <FormWrapper :label="label" class="relative">
    <div v-click-outside="() => (isOpen = false)">
      <button
        @click="isOpen = true"
        class="relative w-full bg-white border h-10 border-gray-300 rounded-md shadow-sm w-full pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      >
        {{ showValue() }}
        <span
          class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <Icon name="ChevronUpDownIcon" size="5" isOutline color="gray-400" />
        </span>
      </button>
      <ul
        v-if="isOpen"
        class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-y-scroll focus:outline-none sm:text-sm"
        style="max-height: 100px"
      >
        <li
          @click="onClickItem(item)"
          v-for="item in options"
          :key="item.id"
          class="hover:text-white hover:bg-primary-600 text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
          tabindex="-1"
        >
          {{ item.name }}
          <span
            v-if="isSelected(item)"
            class="text-primary-600 hover:text-white absolute inset-y-0 right-0 flex items-center pr-4"
          >
            <Icon name="CheckIcon" size="5" isOutline color="primary-600" />
          </span>
        </li>
      </ul>
    </div>
  </FormWrapper>
</template>

<script>
import FormWrapper from "../FormWrapper/FormWrapper.vue";
import vClickOutside from "click-outside-vue3";
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
export default {
  props: {
    /**
     * Use for label
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * Use for options
     */
    options: {
      type: Array,
      default: () => [],
    },
    /**
     * Use for selected items
     */
    items: {
      type: Array,
      default: () => [],
    },
    /**
     * Use for updating action
     */
    onUpdate: {
      type: Function,
      default: () => {},
    },
  },
  components: { FormWrapper, Icon, Text },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      selectedItems: this.items,
      isOpen: false,
    };
  },
  watch: {
    items: function (val) {
      this.selectedItems = val;
    },
  },
  methods: {
    isSelected(item) {
      return this.selectedItems?.find((i) => i.id === item.id);
    },
    onClickItem(item) {
      try {
        const items = [...this.selectedItems];
        const index = items?.findIndex((i) => i.id === item.id);
        if (index > -1) {
          items.splice(index, 1);
        } else {
          items.push(item);
        }
        // console.log(items, 'items')
        this.selectedItems = items;
        this.onUpdate(items);
      } catch (e) {
        // console.log(e)
      }
    },
    showValue() {
      const items = [];
      this.selectedItems.map((s) => items.push(s.name));
      return items.join(", ");
    },
  },
};
</script>

<style lang="css"></style>
