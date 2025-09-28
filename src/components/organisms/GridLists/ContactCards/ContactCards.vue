
<template>
  <ul
    role="list"
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  >
    <li
      v-for="item in items"
      :key="item.id"
      class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <div class="flex-1 flex flex-col p-8">
        <Avatar
          :src="item.imageUrl"
          :username="item.title"
          size="32"
          is-circle
          custom-class="flex-shrink-0 mx-auto"
          class="mx-auto"
        />
        <Text
          :content="item.name"
          color="gray-900"
          size="sm"
          weight="medium"
          class="mt-6"
        />
        <dl class="mt-1 flex-grow flex flex-col justify-between">
          <dt class="sr-only">
            Title
          </dt>
          <Text
            :content="item.title"
            color="gray-500"
            size="sm"
          />
          <dt class="sr-only">
            Role
          </dt>
          <dd class="mt-3">
            <Badge
              :label="item.role"
              bg-color="green-100"
              text-color="green-800"
              text-size="xs"
              px="2"
              py="1"
            />
          </dd>
        </dl>
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
                hover-text-color="gray-400"
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
