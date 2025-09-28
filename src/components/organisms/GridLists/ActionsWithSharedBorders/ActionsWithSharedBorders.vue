
<template>
  <div class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
    <div
      v-for="(action, actionIdx) in actions"
      :key="action.title"
      :class="[actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', actionIdx === 1 ? 'sm:rounded-tr-lg' : '', actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '', actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500']"
    >
      <div>
        <span :class="[action.iconBackground, 'rounded-lg inline-flex p-3 ring-4 ring-white']">
          <Icon
            :name="action.icon"
            size="6"
            :color="action.iconForeground"
            :hover-text-color="action.iconForeground"
            aria-hidden="true"
          />
        </span>
      </div>
      <div class="mt-8">
        <Link
          :content="action.title"
          size="lg"
          weight="medium"
          :url="action.href"
        >
          <span
            class="absolute inset-0"
            aria-hidden="true"
          />
        </Link>
        <Text
          :content="action.description"
          color="gray-500"
          size="sm"
          class="mt-2"
        />
      </div>
      <span
        class="cursor-pointer absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
        aria-hidden="true"
        @click="actionClicked(action)"
      >
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
/**
 *actions list with title, description, href link
 */
import Link from "../../../atoms/Link/Link.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
export default {
  components: {
    Link,
    Icon,
    Text,
  },
  props: {
    /**
     * actions array
     */
    actions: {
      type: Array,
      default: () => [],
    },
    actionClicked: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
