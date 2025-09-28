<template>
  <a
    class="w-full bg-white border flex flex-1 relative"
    style="height: 70vh"
    @contextmenu.prevent.stop="(event) => (isAdmin ? onRightClick(event) : {})"
    @dragenter.prevent="() => (isAdmin ? onDrag(true) : {})"
    @dragleave.prevent="() => (isAdmin ? onDrag(false) : {})"
    @dragover.prevent
    @drop.prevent="(event) => (isAdmin ? onDrop(event) : {})"
    :class="{ 'bg-gray-200': isActive }"
  >
    <div class="w-full">
      <slot></slot>
    </div>
  </a>
</template>

<script>
/**
 * - Use it for clound drive container
 */
export default {
  props: {
    /**
     * right click action
     */
    onRightClick: {
      type: Function,
      default: () => {},
    },
    /**
     * drag action
     */
    onDrag: {
      type: Function,
      default: () => {},
    },
    /**
     * drop action
     */
    onDrop: {
      type: Function,
      default: () => {},
    },
    /**
     * active status
     */
    isActive: {
      type: Boolean,
      default: true,
    },
    /**
     * admin role
     */
    isAdmin: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
