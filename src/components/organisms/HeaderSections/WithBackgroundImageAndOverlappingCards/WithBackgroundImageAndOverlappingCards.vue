<template>
  <div class="bg-white h-screen overflow-scroll">
    <!-- Header -->
    <div class="relative pb-32 bg-gray-800">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" :src="bgImage" alt="" />
        <div
          class="absolute inset-0 bg-gray-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div
        class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
      >
        <Text
          size="4xl"
          weight="extrabold"
          color="white"
          class="tracking-tight text-white sm:text-5xl lg:text-6xl"
          :content="title"
        />
        <Text
          size="xl"
          color="primary-100"
          class="mt-6 max-w-3xl"
          :content="description"
        />
      </div>
    </div>

    <!-- Overlapping cards -->
    <section
      class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div
        class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8"
      >
        <div
          v-for="card in cards"
          :key="card.name"
          class="flex flex-col bg-white rounded-2xl shadow-xl"
        >
          <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
            <div
              class="absolute top-0 p-5 inline-block bg-primary-600 rounded-xl shadow-lg transform -translate-y-1/2"
            >
              <Icon :name="card.icon" size="6" color="white" isOutline />
            </div>
            <Text
              size="xl"
              weight="medium"
              color="gray-900"
              :content="card.name"
            />
            <Text
              size="base"
              color="gray-500"
              :content="card.description"
              class="mt-4"
            />
          </div>
          <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
            <Link
              :url="card.href"
              size="base"
              weight="medium"
              color="primary-700"
              hoverColor="primary-600"
              :content="'Contact us &rarr;'"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Link from "../../../atoms/Link/Link.vue";
/**
 * - Use it to show a header section with background image and overlapping cards
 */
export default {
  components: {
    Text,
    Icon,
    Link,
  },
  props: {
    /**
     * Use it to show title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Use it to show description
     */
    description: {
      type: String,
      default: "",
    },
    /**
     * Use it for background image
     */
    bgImage: {
      type: String,
      default: "",
    },
    /**
     * Use it to show overlapping cards
     */
    cards: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
