<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div
      v-for="item in items"
      :key="item.id"
      class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
    >
      <div class="flex-shrink-0">
        <Avatar
          :src="item.imageUrl"
          :username="item.title"
          size="10"
          is-circle
        />
      </div>
      <div class="flex-1 min-w-0">
        <a
          href="#"
          class="focus:outline-none"
        >
          <span
            class="absolute inset-0"
            aria-hidden="true"
          />
          <Text
            :content="item.name"
            size="sm"
            color="gray-900"
            weight="medium"
          />
          <Text
            :content="item.role"
            size="sm"
            color="gray-500"
            custom-class="truncate"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * horizontal card with avatar, name and role
 */
import Avatar from "../../../atoms/Avatar/Avatar.vue";
import Text from "../../../atoms/Text/Text.vue";
export default {
  components: {
    Avatar,
    Text,
  },
  /**
   * list of items to show info in card
   */
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
