<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <Text
            :content="heading"
            size="3xl"
            weight="extrabold"
            color="gray-900"
          />
          <!-- <h2 class="text-3xl font-extrabold text-gray-900">
            Frequently asked questions
          </h2> -->
          <p class="mt-4 text-lg text-gray-500">
            <!-- <Text
              :content="supportingText"
              size="lg"
              weight="normal"
              color="gray-500"
            /> -->
          {{ supportingText }}
            <Link
              :content="supportLink && supportLink.label"
              :url="supportLink && supportLink.url"
              color="primary-600"
              hover-color="primary-500"
              weight="medium"
            />
          </p>
        </div>
        <div class="mt-12 lg:mt-0 lg:col-span-2">
          <dl class="space-y-12">
            <div v-for="faq in faqs" :key="faq.question">
              <Text
                :content="faq.question"
                size="lg"
                weight="normal"
                color="gray-900"
                custom-class="leading-6"
              />
              <Text
                :content="faq.answer"
                size="base"
                weight="normal"
                color="gray-500"
                custom-class="mt-2"
              />
              <!-- <dt class="text-lg leading-6 font-medium text-gray-900">
                {{ faq.question }}
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                {{ faq.answer }}
              </dd> -->
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Text from "../../../atoms/Text/Text.vue";
import Link from "../../../atoms/Link/Link.vue";

export default {
  components: {
    Text,
    Link,
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
     * supporting text of section
     */
    supportingText: {
      type: String,
      default: "",
    },
    /**
     * support team link
     */
    supportLink: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
