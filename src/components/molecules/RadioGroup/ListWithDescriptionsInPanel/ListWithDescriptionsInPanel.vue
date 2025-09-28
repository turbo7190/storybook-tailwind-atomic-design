
<template>
  <RadioGroup v-model="selected">
    <RadioGroupLabel class="sr-only">
      {{ label }}
    </RadioGroupLabel>
    <div class="bg-white rounded-md -space-y-px">
      <RadioGroupOption
        v-for="(item, index) in items"
        :key="item.name"
        v-slot="{ checked, active }"
        as="template"
        :value="item"
      >
        <div :class="[index === 0 ? 'rounded-tl-md rounded-tr-md' : '', index === items.length - 1 ? 'rounded-bl-md rounded-br-md' : '', checked ? 'bg-primary-50 border-primary-200 z-10' : 'border-gray-200', 'relative border p-4 flex cursor-pointer focus:outline-none']">
          <span
            :class="[checked ? 'bg-primary-600 border-transparent' : 'bg-white border-gray-300', active ? 'ring-2 ring-offset-2 ring-primary-500' : '', 'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center']"
            aria-hidden="true"
          >
            <span class="rounded-full bg-white w-1.5 h-1.5" />
          </span>
          <div class="ml-3 flex flex-col">
            <RadioGroupLabel
              as="span"
              :class="[checked ? 'text-primary-900' : 'text-gray-900', 'block text-sm font-medium']"
            >
              {{ item.name }}
            </RadioGroupLabel>
            <RadioGroupDescription
              as="span"
              :class="[checked ? 'text-primary-700' : 'text-gray-500', 'block text-sm']"
            >
              {{ item.description }}
            </RadioGroupDescription>
          </div>
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

export default {
  components: {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
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
