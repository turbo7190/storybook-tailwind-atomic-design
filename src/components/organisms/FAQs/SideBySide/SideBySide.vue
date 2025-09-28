<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
      <Text
        :content="heading"
        size="3xl"
        weight="extrabold"
        color="gray-900"
      />
      <div class="mt-8">
        <dl class="divide-y divide-gray-200">
          <div
            v-for="faq in faqs"
            :key="faq.id"
            class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
          >
            <dt class="md:col-span-5">
              <Text
                :content="faq.question"
                size="base"
                weight="medium"
                color="gray-900"
              />
            </dt>
            <dd class="mt-2 md:mt-0 md:col-span-7">
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
