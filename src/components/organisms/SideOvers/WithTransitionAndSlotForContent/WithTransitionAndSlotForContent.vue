<template>
  <TransitionRoot
    as="template"
    :show="open"
  >
    <Dialog
      as="div"
      class="fixed inset-0 z-40 md:hidden"
      @close="closeSidebar()"
    >
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75" />
      </TransitionChild>

      <TransitionChild
        as="div"
        enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
        enter-from="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
        enter-to="transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100"
        leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
        leave-from="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
        leave-to="transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100"
      >
        <slot />
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { computed } from "vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
/**
 * - Use it to show an empty panel
 */
export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
  },
  props: {
    /**
     * use it to close sidebar
     */
    closeSidebar: {
      type: Function,
      default: () => {},
    },
    /**
     * prop to open and close sidebar
     */
    sidebarOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const open = computed({
      get() {
        return props.sidebarOpen;
      },
      set(newValue) {
        emit("update:sidebarOpen", newValue);
      },
    });
    return {
      open,
    };
  },
};
</script>
