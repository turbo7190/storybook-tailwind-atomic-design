<template>
  <ul
    role="list"
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
  >
    <li
      v-for="item in items"
      :key="item.id"
      class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <div class="w-full flex items-center justify-between p-6 space-x-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <Text
              :content="item.name"
              color="gray-900"
              size="sm"
              weight="medium"
              custom-class="truncate"
            />
            <Badge
              :label="item.role"
              bg-color="green-100"
              text-color="green-800"
              text-size="xs"
              px="2"
              py="0.5"
            />
            <!-- <span
              class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"
            >{{
              item.role
            }}</span> -->
          </div>
          <Text
            :content="item.title"
            color="gray-500"
            size="sm"
            custom-class="truncate mt-1"
          />
          <!-- <p class="mt-1 text-gray-500 text-sm truncate">
            {{ item.title }}
          </p> -->
        </div>
        <Avatar
          :src="item.imageUrl"
          :username="item.title"
          size="10"
          is-circle
          custom-class="flex-shrink-0 bg-gray-300"
        />
        <!-- <img
          class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
          :src="item.imageUrl"
          alt=""
        > -->
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="w-0 flex-1 flex">
            <Link
              leading
              :url="`mailto:${item.email}`"
              :content="leftActionButton.label"
              text-color="gray-700"
              hover-color="gray-500"
              weight="medium"
              size="sm"
              custom-class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4  border border-transparent rounded-bl-lg"
            >
              <Icon
                :name="leftActionButton.icon"
                size="5"
                color="gray-400"
                hover-text-color="gray-500"
                custom-class="mr-3"
              />
            </Link>
          </div>
          <div class="-ml-px w-0 flex-1 flex">
            <Link
              leading
              :url="`tel:${item.telephone}`"
              :content="rightActionButton.label"
              text-color="gray-700"
              hover-color="gray-500"
              weight="medium"
              size="sm"
              custom-class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4  border border-transparent rounded-bl-lg"
            >
              <Icon
                :name="rightActionButton.icon"
                size="5"
                color="gray-400"
                hover-text-color="gray-400"
                custom-class="mr-3"
              />
            </Link>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
/**
 * Contact card with Avatar and action
 * right and left action button to give text and icon to email and call buttons
 */
import Avatar from "../../../atoms/Avatar/Avatar.vue";
import Text from "../../../atoms/Text/Text.vue";
import Badge from "../../../molecules/Badge/Basic/Basic.vue";
import Link from "../../../atoms/Link/Link.vue";
import Icon from "../../../atoms/Icons/Icons.vue";

export default {
  components: {
    Avatar,
    Text,
    Badge,
    Link,
    Icon,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    leftActionButton: {
      type: Object,
      default: () => {},
    },
    rightActionButton: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
