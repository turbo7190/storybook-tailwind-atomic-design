<template>
  <div>
    <Text
      size="lg"
      weight="medium"
      color="gray-900"
      class="leading-6"
      :content="title"
    />
    <dl
      class="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x"
    >
      <div v-for="item in stats" :key="item.name" class="px-4 py-5 sm:p-6">
        <Text
          size="base"
          weight="normal"
          color="gray-900"
          :content="item.name"
        />
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div class="flex items-baseline">
            <Text
              size="2xl"
              weight="semibold"
              color="primary-600"
              :content="item.stat"
            />
            <Text
              size="sm"
              weight="medium"
              color="gray-500"
              class="ml-2"
              :content="'from ' + item.previousStat"
            />
          </div>
          <div
            :class="[
              item.changeType === 'increase'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800',
              'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0',
            ]"
          >
            <Icon
              :name="
                item.changeType === 'increase' ? 'ArrowUpIcon' : 'ArrowDownIcon'
              "
              size="5"
              :color="item.changeType === 'increase' ? 'green-500' : 'red-500'"
              class="self-center flex-shrink-0"
            />
            {{ item.change }}
          </div>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Link from "../../../atoms/Link/Link.vue";
/**
 * - Use it to show stat list with shared border
 */
export default {
  components: {
    Text,
    Icon,
    Link,
  },
  props: {
    /**
     * Use it to show title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Use it for stats list
     */
    stats: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
