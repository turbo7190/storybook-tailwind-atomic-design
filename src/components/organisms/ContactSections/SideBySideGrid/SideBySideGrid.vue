<template>
  <div class="h-screen overflow-scroll bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="divide-y-2 divide-gray-200">
        <div
          v-for="(item,index) in items"
          :key="index"
          class="lg:grid lg:grid-cols-3 lg:gap-8"
          :class="`${index > 0 ?'mt-16 pt-16' :''}`"
        >
          <Text
            :content="item.heading"
            weight="extrabold"
            color="gray-900"
            size="2xl"
            custom-class="sm:text-3xl"
          />
          <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
            <div
              v-for="(listItem,listItemIdx) in item.list"
              :key="listItemIdx"
            >
              <Text
                :content="listItem.heading"
                weight="medium"
                color="gray-900"
                size="lg"
                custom-class="leading-6"
              />
              <dl class="mt-2 text-base text-gray-500">
                <div>
                  <dt class="sr-only">
                    contact detail
                  </dt>
                  <dd>
                    <Text
                      :content="listItem.title"
                      weight="normal"
                      color="gray-500"
                      size="base"
                      custom-class="mt-2"
                    />
                  </dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">
                    contact detail
                  </dt>
                  <dd>
                    <Text
                      :content="listItem.subtitle"
                      weight="normal"
                      color="gray-500"
                      size="base"
                    />
                  </dd>
                </div>
              </dl>
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
export default {
  components: {
    Text,
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

