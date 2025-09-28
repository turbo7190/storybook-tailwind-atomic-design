<template>
  <div class="relative bg-primary-600">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="pr-16 sm:text-center sm:px-16">
        <p class="font-medium text-white">
          <span class="inline">{{ content }}</span>
          <span class="block sm:ml-2 sm:inline-block">
            <CommonLink
              content="Learn more &rarr;"
              decoration="underline"
              color="white"
              weight="bold"
            />
          </span>
        </p>
      </div>
      <div
        class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start"
      >
        <button
          type="button"
          class="flex p-2 rounded-md hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <Icon name="XMarkIcon" size="6" color="white" isOutline />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";
import CommonLink from "../../../atoms/Link/Link.vue";

export default {
  components: {
    CommonLink,
    Icon,
  },
  props: {
    /**
     * Use for showing banner content
     */
    content: {
      type: String,
    },
    /**
     * Use for link text
     */
    linkText: {
      type: String,
    },
    /**
     * Use for button action
     */
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
