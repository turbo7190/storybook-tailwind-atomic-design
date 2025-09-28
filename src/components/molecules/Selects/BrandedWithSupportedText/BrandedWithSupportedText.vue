<template>
  <Listbox v-model="selectedValue" as="div" class="w-40 flex self-center ml-40">
    <ListboxLabel class="sr-only">
      {{ label }}
    </ListboxLabel>
    <div class="relative">
      <div class="inline-flex shadow-sm rounded-md divide-x divide-primary-600">
        <div
          class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-primary-600"
        >
          <div
            class="relative inline-flex items-center bg-primary-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white"
          >
            <!-- <CheckIcon
              class="h-5 w-5"
              aria-hidden="true"
            />
            <p class="ml-2.5 text-sm font-medium">
              {{ selected.title }}
            </p> -->
            <Icon name="CheckIcon" size="5" color="white" />
            <Text
              color="white"
              size="sm"
              weight="medium"
              class="ml-2.5"
              :content="selectedValue.title"
            />
          </div>
          <ListboxButton
            class="relative inline-flex items-center bg-primary-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-primary-600"
          >
            <span class="sr-only">{{ label }}</span>
            <!-- <ChevronDownIcon
              class="h-5 w-5 text-white"
              aria-hidden="true"
            /> -->
            <Icon name="ChevronDownIcon" size="5" color="white" />
          </ListboxButton>
        </div>
      </div>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="origin-top-right absolute z-10 right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <ListboxOption
            v-for="item in items"
            :key="item.title"
            v-slot="{ active, selected }"
            as="template"
            :value="item"
          >
            <li
              :class="[
                active ? 'text-white bg-primary-500' : 'text-gray-900',
                'cursor-default select-none relative p-4 text-sm',
              ]"
            >
              <div class="flex flex-col">
                <div class="flex justify-between">
                  <p :class="selected ? 'font-semibold' : 'font-normal'">
                    {{ item.title }}
                  </p>
                  <Icon
                    v-if="selected"
                    name="CheckIcon"
                    :color="`${active ? 'text-white' : 'text-primary-500'}`"
                  />
                </div>
                <p
                  :class="[
                    active ? 'text-primary-200' : 'text-gray-500',
                    'mt-2',
                  ]"
                >
                  {{ item.description }}
                </p>
              </div>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
<script>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
// import { CheckIcon, ChevronDownIcon } from "@heroicons/vue/24/solid";
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    // CheckIcon,
    // ChevronDownIcon,
    Icon,
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
  },
  computed: {
    selectedValue: {
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
