<template>
  <Menu as="div" class="relative inline-block text-left" :class="customClass">
    <div>
      <MenuButton
        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500"
      >
        {{ label }}
        <Icon
          name="ChevronDownIcon"
          size="5"
          custom-class="-mr-1 ml-2"
          color="gray-700"
          :aria-hidden="true"
        ></Icon>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
      >
        <template v-for="(item, index) in items" :key="index">
          <div v-if="index === 0 || index % 2 === 0" class="py-1">
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'flex block px-4 py-2 text-sm',
                ]"
                @click="itemClicked(item)"
              >
                <Icon
                  :name="item.icon"
                  size="5"
                  color="gray-400"
                  custom-class="mr-3 group-hover:text-gray-500"
                  aria-hidden="true"
                ></Icon>
                {{ item.name }}
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }" v-if="index + 1 < items.length - 1">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'flex block px-4 py-2 text-sm',
                ]"
                @click="itemClicked(items[index + 1])"
              >
                <Icon
                  :name="items[index + 1].icon"
                  size="5"
                  color="gray-400"
                  custom-class="mr-3 group-hover:text-gray-500"
                  aria-hidden="true"
                ></Icon>
                {{ items[index + 1].name }}</a
              >
            </MenuItem>
          </div>
        </template>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import Icon from "../../../atoms/Icons/Icons.vue";

export default {
  name: "DropdownWithIcons",
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Icon,
  },
  props: {
    /**
    apply custom class on dropdown menu.
    */
    customClass: {
      type: String,
      default: "",
    },
    /**
    label for dropdown
    */
    label: {
      type: String,
      default: "",
    },
    /**
    list to populate dropdown
    */
    items: {
      type: Array,
      default: () => [],
    },
    /**
		  to perform action on item click
		 */
    menuItemClicked: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
