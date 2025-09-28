<template>
  <Menu as="div" class="relative inline-block text-left" :class="customClass">
    <div>
      <MenuButton
        class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        <span class="sr-only">Open options</span>
        <!-- <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" /> -->
        <Icon
          name="EllipsisVerticalIcon"
          size="5"
          color="text-gray-400"
          hover-text-color="gray-600"
          aria-hidden="true"
        />
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
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1">
          <template v-for="(item, index) in items" :key="index">
            <MenuItem v-slot="{ active }" as="div">
              <a
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                ]"
                @click="itemClicked(item)"
                >{{ item.name }}</a
              >
            </MenuItem>
          </template>
          <form>
            <MenuItem v-slot="{ active }">
              <button
                type="submit"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block w-full text-left px-4 py-2 text-sm',
                ]"
                @click="actionButtonClicked()"
              >
                {{ buttonText }}
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import Icon from "../../../atoms/Icons/Icons.vue";

export default {
  name: "DropdownWithMinIcon",
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
    footer button text
    */
    buttonText: {
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
    /**
		  to perform action on footer button
		 */
    actionButtonClicked: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    itemClicked: function (item) {
      this.menuItemClicked(item);
    },
    onClick: function (item) {
      this.actionButtonClicked(item);
    },
  },
};
</script>
