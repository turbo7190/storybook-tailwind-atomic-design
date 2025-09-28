<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <Text
        :content="heading"
        size="lg"
        weight="medium"
        color="gray-900"
        custom-class="leading-6"
      />
      <Text
        :content="subheading"
        size="sm"
        weight="normal"
        color="gray-500"
        custom-class="mt-1 max-w-2xl "
      />
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
      <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div
          v-for="item in list"
          :key="item.id"
          :class="`sm:col-span-${item.twoColumn ? '2' :'1'}`"
        >
          <Text
            :content="item.key"
            size="sm"
            weight="medium"
            color="gray-500"
          />
          <Text
            v-if="item.sublist && item.sublist.length === 0"
            :content="item.description"
            size="sm"
            weight="normal"
            color="gray-900"
            custom-class="mt-1"
          />
          <div
            v-else
            class="mt-1"
          >
            <ul
              role="list"
              class="border border-gray-200 rounded-md divide-y divide-gray-200"
            >
              <li
                v-for="listItem in item.sublist"
                :key="listItem.id"
                class="pl-3 pr-4 py-3 flex items-center justify-between"
              >
                <div class="w-0 flex-1 flex items-center">
                  <Icon
                    :name="listItem.icon"
                    size="5"
                    color="gray-400"
                    hover-text-color="gray-400"
                    custom-class="flex-shrink-0"
                  />
                  <Text
                    :content="listItem.text"
                    size="sm"
                    custom-class="ml-2 flex-1 w-0 truncate"
                  />
                </div>
                <div class="ml-4 flex-shrink-0">
                  <Link
                    :url="listItem.action.link"
                    weight="medium"
                    color="primary-600"
                    :content="listItem.action.label"
                    hover-color="primary-500"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
/**
 * Description list with key value pairs and sublist in 2 column layout
 */
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Link from "../../../atoms/Link/Link.vue";

export default {
  components: {
    Text,
    Icon,
    Link,
  },
  props: {
    /**
     * heading of list
     */
    heading: {
      type: String,
      default: "",
    },
    /**
     * subheading of list
     */
    subheading: {
      type: String,
      default: "",
    },
    /**
     * list of items from key value pairs to list
     */
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
