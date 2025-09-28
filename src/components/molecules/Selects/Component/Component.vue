<template>
  <Listbox v-model="selectedValue" as="div">
    <ListboxLabel class="block text-sm font-medium text-gray-700">
      {{ label }}
    </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton
        class="relative w-full bg-white border border-gray-300 h-10 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
      >
        <span class="flex items-center">
          <Avatar
            v-if="selectedValue && selectedValue.avatar"
            :src="selectedValue && selectedValue.avatar"
            is-circle
            size="6"
            class="flex-shrink-0"
          />
          <span
            v-else-if="selectedValue && selectedValue.online !== undefined"
            :aria-label="
              selectedValue && selectedValue.online ? 'Online' : 'Offline'
            "
            :class="[
              selectedValue.online ? 'bg-green-400' : 'bg-gray-200',
              'flex-shrink-0 inline-block h-2 w-2 rounded-full',
            ]"
          />
          <span class="w-full inline-flex truncate">
            <Text
              :content="selectedValue && selectedValue.name"
              :class="!(selectedValue && selectedValue.username) && 'ml-3'"
              custom-class="truncate  sm:text-sm"
            />
            <Text
              v-if="selectedValue && selectedValue.username"
              :content="selectedValue && selectedValue.username"
              color="gray-500"
              custom-class="ml-2 truncate "
            />
          </span>
        </span>
        <span
          class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <Icon name="ChevronUpDownIcon" color="gray-400" size="5" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-for="item in items"
            :key="item.id"
            v-slot="{ active, selected }"
            as="template"
            :value="item"
          >
            <li
              :class="[
                active ? 'text-white bg-primary-600' : 'text-gray-900',
                'cursor-default select-none relative py-2 pl-3 pr-9',
              ]"
            >
              <div class="flex items-center">
                <Avatar
                  v-if="item && item.avatar"
                  :src="item && item.avatar"
                  is-circle
                  size="6"
                  class="flex-shrink-0"
                />
                <span
                  v-else-if="item && item.online !== undefined"
                  :class="[
                    item.online ? 'bg-green-400' : 'bg-gray-200',
                    'flex-shrink-0 inline-block h-2 w-2 rounded-full',
                  ]"
                  aria-hidden="true"
                />

                <div class="flex">
                  <Text
                    :content="item && item.name"
                    :weight="`${selected ? 'semibold' : 'normal'}`"
                    :color="`${active ? 'white' : 'gray-900'}`"
                    custom-class="ml-3 block truncate"
                  />
                  <Text
                    v-if="item && item.username"
                    :content="item && item.username"
                    :color="`${active ? 'primary-200' : 'gray-500'}`"
                    custom-class="ml-2 truncate "
                  />
                </div>
              </div>

              <span
                v-if="selected"
                class="absolute inset-y-0 right-0 flex items-center pr-4"
              >
                <Icon
                  name="CheckIcon"
                  size="5"
                  aria-hidden="true"
                  :color="`${active ? 'white' : 'primary-600'}`"
                />
              </span>
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
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
import Avatar from "../../../atoms/Avatar/Avatar.vue";

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    Icon,
    Text,
    Avatar,
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
