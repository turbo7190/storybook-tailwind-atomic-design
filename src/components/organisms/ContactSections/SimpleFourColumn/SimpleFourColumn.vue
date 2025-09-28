<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <Text
        :content="heading"
        weight="extrabold"
        color="gray-900"
        size="3xl"
        custom-class="sm:text-3xl"
      />
      <Text
        :content="subheading"
        weight="normal"
        color="gray-500"
        size="lg"
        custom-class="mt-6 max-w-3xl"
      />
      <div class="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(item,index) in items"
          :key="index"
        >
          <Text
            :content="item.heading"
            weight="medium"
            color="gray-900"
            size="lg"
          />
          <p class="mt-2 text-base text-gray-500">
            <span class="block">
              <Text
                :content="item.title"
                weight="normal"
                color="gray-500"
                size="base"
              />
            </span>
            <span class="block">
              <Text
                :content="item.subtitle"
                weight="normal"
                color="gray-500"
                size="base"
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * show contact details in form of four columns
 * pass a list of items with sublist
 */
import Text from "../../../atoms/Text/Text.vue";
export default {
  components: {
    Text,
  },
  props: {
    /**
     * heading
     */
    heading: {
      type: String,
      default: "",
    },
    /**
     * subheading
     */
    subheading: {
      type: String,
      default: "",
    },
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
