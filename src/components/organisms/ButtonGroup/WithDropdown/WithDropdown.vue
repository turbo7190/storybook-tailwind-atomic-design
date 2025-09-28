<template>
  <span class="relative z-0 inline-flex shadow-sm rounded-md">
    <Button
      :type="type"
      :variant="variant"
      :size="size"
      customClass="rounded-l-md rounded-r-none"
    >
      {{ items[0].value }}
    </Button>
    <Menu as="span" class="-ml-px relative block">
      <MenuButton
        class="relative inline-flex items-center px-2 py-2 rounded-r-md text-sm font-medium bg-primary-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-primary-500"
        :class="`btn-${variant || 'primary'} btn-${size || 'md'}`"
      >
        <Icon
          :size="6"
          :color="iconColor ? iconColor : ''"
          :name="icon"
          :hoverTextColor="iconHoverColor"
        />
      </MenuButton>
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="origin-top-right absolute right-0 mt-2 -mr-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="py-1">
            <MenuItem
              v-for="(option, key) in items"
              :key="key"
              v-slot="{ active }"
            >
              <a
                :href="option.href"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                ]"
              >
                {{ option.value }}
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </span>
</template>

<script>
import Button from "../../../atoms/Button/Button.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

export default {
  name: "Dropdown",
  props: {
    /**
             used to provide type like button or submit. By default button is set.
             */
    type: {
      type: String,
      default: "button",
    },
    icon: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
      default: "",
    },
    iconHoverColor: {
      type: String,
      default: "",
    },
    /**
             used to provide type of array.
             */
    items: {
      type: Array,
      default: () => [],
    },
    /**
             switch between different variants i.e. primary, secondary, success, danger and themed. By default button is
             primary
             */
    variant: {
      type: String,
      default: "primary",
    },
    /**
             Button Group comes in different sizes like  sm, md, lg and xl. By default md is set.
             */
    size: {
      type: String,
      default: "md",
    },
  },
  components: {
    Button,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
};
</script>

<style>
.rounded-none {
  border-radius: 0 !important;
}

.rounded-r-md {
  border-top-right-radius: 0.375rem !important;
  border-bottom-right-radius: 0.375rem !important;
}

.rounded-l-md {
  border-top-left-radius: 0.375rem !important;
  border-bottom-left-radius: 0.375rem !important;
}
</style>
