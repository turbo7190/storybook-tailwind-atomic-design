<template>
  <div class="bg-white px-4 py-5 sm:px-6">
    <div class="flex justify-between">
      <AvatarText
        :title="avatar.title"
        :username="avatar.title"
        :subtitle="avatar.subtitle"
        :src="avatar.src"
      />
      <div class="flex-shrink-0 self-center flex">
        <Dropdown :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import Dropdown from "../../../molecules/Dropdown/DropdownWithMinIcon/DropdownWithMinIcon.vue";
import AvatarText from "../../../molecules/Avatar/AvatarText.vue";
/**
 * - Use it to show card header with avatar and dropdown
 */
export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Dropdown,
    AvatarText,
  },
  props: {
    /**
     * Use it for avatar part
     */
    avatar: {
      type: Object,
      default: () => {},
    },
    /**
     * Use it for dropdown options
     */
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
