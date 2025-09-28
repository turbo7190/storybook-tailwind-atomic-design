<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
        <div
          v-for="(item,index) in items"
          :key="index"
          :class="`${index > 0 ?'mt-12 sm:mt-16 md:mt-0' :''}`"
        >
          <Text
            :content="item.title"
            weight="extrabold"
            color="gray-900"
            size="2xl"
            custom-class="sm:text-3xl"
          />
          <div class="mt-3">
            <Text
              :content="item.description"
              weight="normal"
              color="gray-500"
              size="lg"
            />
          </div>
          <div class="mt-9">
            <div
              v-for="(listItem,listItemIdx) in item.list"
              :key="listItemIdx"
              class="flex"
              :class="`${listItemIdx > 0 ?'mt-6' :''}`"
            >
              <div class="flex-shrink-0">
                <Icon
                  :name="listItem.icon"
                  color="gray-400"
                  size="6"
                  is-outline
                />
              </div>
              <div class="ml-3">
                <Text
                  :content="listItem.line"
                  weight="normal"
                  color="gray-500"
                  size="base"
                />
                <Text
                  v-if="listItem.subline"
                  :content="listItem.subline"
                  weight="normal"
                  color="gray-500"
                  size="base"
                  custom-class="mt-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * show contact details in form of grid
 * pass a list of items with sublist
 */
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";

export default {
  components: {
    Text,
    Icon,
  },
  props: {
    /**
     * list of contact details
     */
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
