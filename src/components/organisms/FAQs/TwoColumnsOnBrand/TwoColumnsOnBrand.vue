<template>
  <div :class="`bg-${background}`">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <Text
        :content="heading"
        size="3xl"
        weight="extrabold"
        :color="textColor"
      />
      <div class="mt-6 border-t border-primary-300 border-opacity-25 pt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
          <div
            v-for="faq in faqs"
            :key="faq.id"
          >
            <dt>
              <Text
                :content="faq.question"
                size="lg"
                weight="medium"
                :color="textColor"
                custom-class="leading-6"
              />
            </dt>
            <dd class="mt-2">
              <Text
                :content="faq.answer"
                size="base"
                weight="normal"
                :color="textBrandColor"
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
 * FAQ section with two column layout and background color
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
    /**
     * background color according to brand
     */
    background: {
      type: String,
      default: "primary-700",
    },
    /**
     * text color for heading and questions
     */
    textColor: {
      type: String,
      default: "white",
    },
    /**
     * text color according to brand
     */
    textBrandColor: {
      type: String,
      default: "primary-200",
    },
  },
};
</script>
