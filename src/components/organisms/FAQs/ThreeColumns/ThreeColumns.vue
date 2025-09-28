
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <Text
        :content="heading"
        align="center"
        size="3xl"
        weight="extrabold"
        color="gray-900"
      />
      <div class="mt-12">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
          <div
            v-for="faq in faqs"
            :key="faq.id"
          >
            <dt>
              <Text
                :content="faq.question"
                size="lg"
                weight="medium"
                color="gray-900"
                custom-class="leading-6"
              />
            </dt>
            <dd class="mt-2">
              <Text
                :content="faq.answer"
                size="base"
                weight="normal"
                color="gray-500"
              />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * FAQ section with three column layout
 */
import Text from "../../../atoms/Text/Text.vue";
export default {
  components: {
    Text,
  },
  props: {
    /**
     * faq list
     */
    faqs: {
      type: Array,
      default: () => [],
    },
    /**
     * heading of section
     */
    heading: {
      type: String,
      default: "",
    },
  },
};
</script>
