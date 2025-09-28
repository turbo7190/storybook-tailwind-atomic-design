<template>
  <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
    <div
      class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap"
    >
      <div class="ml-4 mt-4">
        <AvatarText
          :title="avatar.title"
          :subtitle="avatar.subtitle"
          :username="avatar.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";
import AvatarText from "../../../molecules/Avatar/AvatarText.vue";
/**
 * - Use it to show card header with avatar and action
 */
export default {
  components: {
    Icon,
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
     * Use it for button list
     */
    buttons: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
