<template>
  <div>
    <Text size="lg" weight="medium" color="gray-900" :content="title" />
    <Text
      size="sm"
      weight="base"
      color="gray-500"
      class="mt-1"
      :content="description"
    />
    <ul
      role="list"
      class="mt-6 border-t border-b border-gray-200 py-6 grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      <li v-for="(item, itemIdx) in items" :key="itemIdx" class="flow-root">
        <div
          class="relative -m-2 p-2 flex items-center space-x-4 rounded-xl hover:bg-gray-50 focus-within:ring-2 focus-within:ring-primary-500"
        >
          <div
            :class="[
              item.background,
              'flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg',
            ]"
          >
            <Icon :name="item.icon" size="6" color="white" />
          </div>
          <div>
            <Link
              color="gray-900"
              size="sm"
              weight="medium"
              :content="item.title + ' &rarr;'"
            />
            <Text
              size="sm"
              color="gray-500"
              :content="item.description"
              class="mt-1"
            />
          </div>
        </div>
      </li>
    </ul>
    <div class="mt-4 flex">
      <Link
        color="primary-600"
        :hoverColor="'primary-500'"
        size="sm"
        :weight="'medium'"
        :content="link + ' &rarr;'"
        :onClick="onClick"
      />
    </div>
  </div>
</template>

<script>
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Link from "../../../atoms/Link/Link.vue";
/**
 * - Use it to show an empty state with starting points
 */
export default {
  components: {
    Text,
    Icon,
    Link,
  },
  props: {
    /**
     * Use it for title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Use it for description
     */
    description: {
      type: String,
      default: "",
    },
    /**
     * Use it for link text
     */
    link: {
      type: String,
      default: "",
    },
    /**
     * Use it for link action
     */
    onClick: {
      type: Function,
      default: () => {},
    },
    /**
     * Use it for points
     */
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
