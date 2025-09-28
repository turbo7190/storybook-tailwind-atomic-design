<template>
  <nav
    class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0"
  >
    <div class="-mt-px w-0 flex-1 flex">
      <a
        href="#"
        class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center hover:text-gray-700 hover:border-gray-300"
      >
        <Icon name="ArrowLeftIcon" size="5" color="gray-400" class="mr-3" />
        <Text size="sm" color="gray-500" weight="medium" content="Previous" />
      </a>
    </div>
    <div class="hidden md:-mt-px md:flex">
      <component
        :is="typeof page === 'number' ? 'a' : 'div'"
        href="#"
        aria-current="page"
        v-for="(page, i) in pages"
        :key="i"
        :class="
          page === currentPage
            ? 'border-primary-500 text-primary-600'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        "
        class="border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        >{{ page }}</component
      >
    </div>
    <div class="-mt-px w-0 flex-1 flex justify-end">
      <a
        href="#"
        class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center hover:text-gray-700 hover:border-gray-300"
      >
        <Text size="sm" color="gray-500" weight="medium" content="Next" />
        <Icon name="ArrowRightIcon" size="5" color="gray-400" class="ml-3" />
      </a>
    </div>
  </nav>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";
import Button from "../../../atoms/Button/Button.vue";
import Text from "../../../atoms/Text/Text.vue";
/**
 * - Use it to show pagenation with centered page numbers
 */
export default {
  components: {
    Icon,
    Button,
    Text,
  },
  props: {
    /**
     * Use it for current page index
     */
    currentPage: {
      type: Number,
      default: 0,
    },
    /**
     * Use it for pages list
     */
    pages: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
