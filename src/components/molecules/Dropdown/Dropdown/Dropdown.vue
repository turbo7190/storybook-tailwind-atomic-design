<template>
  <Menu as="div" class="relative inline-block text-left" :class="customClass">
    <div>
      <MenuButton
        class="
          inline-flex
          justify-center
          w-full
          rounded-md
          border border-gray-300
          shadow-sm
          px-4
          py-2
          bg-white
          text-sm
          font-medium
          text-gray-700
          hover:bg-gray-50
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-offset-gray-100
          focus:ring-primary-500
        "
      >
        {{ label }}
        <Icon
          name="ChevronDownIcon"
          size="5"
          custom-class="-mr-1 ml-2"
          color="gray-700"
          :aria-hidden="true"
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
        class="
          origin-top-right
          absolute
          right-0
          mt-2
          w-56
          rounded-md
          shadow-lg
          bg-white
          ring-1 ring-black ring-opacity-5
          focus:outline-none
        "
      >
        <div class="py-1">
          <MenuItem v-for="option in options" v-slot="{ active }" :key="option">
            <a
              href="#"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm',
              ]"
              @click="itemClicked(option)"
              >{{ option }}</a
            >
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
/**
- Simple dropdown to be used with an array of strings
- use menuItemClicked to perform action on item click
**/
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import Icon from "../../../atoms/Icons/Icons.vue";

export default {
  name: "Dropdown",
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
    options: {
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
  methods: {
    itemClicked: function (item) {
      this.menuItemClicked(item);
    },
  },
};
</script>
