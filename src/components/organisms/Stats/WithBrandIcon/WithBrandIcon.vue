<template>
  <div>
    <Text
      size="lg"
      weight="medium"
      color="gray-900"
      class="leading-6"
      :content="title"
    />
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="item in stats"
        :key="item.id"
        class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
      >
        <dt>
          <div class="absolute bg-primary-500 rounded-md p-3">
            <Icon :name="item.icon" size="6" color="white" />
          </div>
          <Text
            size="sm"
            weight="medium"
            color="gray-500"
            class="ml-16 truncate"
            :content="item.name"
          />
        </dt>
        <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
          <Text
            size="2xl"
            weight="semibold"
            color="gray-900"
            :content="item.stat"
          />
          <p
            :class="[
              item.changeType === 'increase'
                ? 'text-green-600'
                : 'text-red-600',
              'ml-2 flex items-baseline text-sm font-semibold',
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
          </p>
          <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
            <Link
              :url="'#'"
              :content="'View all'"
              color="primary-500"
              hover-color="primary-700"
              size="sm"
              weight="medium"
            />
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
 * - Use it to show stat list with brand icon
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
