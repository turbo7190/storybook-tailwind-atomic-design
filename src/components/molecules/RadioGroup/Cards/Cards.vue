
<template>
  <RadioGroup v-model="selected">
    <RadioGroupLabel class="text-base font-medium text-gray-900">
      {{ label }}
    </RadioGroupLabel>

    <div class="grid grid-cols-1 mt-4 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
      <RadioGroupOption
        v-for="item in items"
        :key="item.id"
        v-slot="{active, checked}"
        as="template"
        :value="item"
      >
        <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-primary-500 ring-2 ring-primary-500' : '', 'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none']">
          <div class="flex flex-1">
            <div class="flex flex-col">
              <RadioGroupLabel
                as="span"
                class="block text-sm font-medium text-gray-900"
              >
                {{ item.title }}
              </RadioGroupLabel>
              <RadioGroupDescription
                as="span"
                class="flex items-center mt-1 text-sm text-gray-500"
              >
                {{ item.description }}
              </RadioGroupDescription>
              <RadioGroupDescription
                as="span"
                class="mt-6 text-sm font-medium text-gray-900"
              >
                {{ item.users }}
              </RadioGroupDescription>
            </div>
          </div>
          <Icon
            name="CheckCircleIcon"
            size="5"
            color="primary-600"
            hover-text-color="primary-500"
            :custom-class="`${checked ?'': 'invisible'}`"
          />
          <div
            :class="[active ? 'border' : 'border-2', checked ? 'border-primary-500' : 'border-transparent', 'absolute -inset-px rounded-lg pointer-events-none']"
            aria-hidden="true"
          />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script>
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from "@headlessui/vue";
import Icon from "../../../atoms/Icons/Icons.vue";

export default {
  components: {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
    Icon,
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
  },
  computed: {
    selected: {
      get() {
        return this.selectedItem;
      },
      set(newValue) {
        this.$emit("update:selectedItem", newValue);
      },
    },
  },
};
</script>
