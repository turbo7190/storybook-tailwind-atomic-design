<template>
  <div class="relative bg-gray-50">
    <CenterHeader
      :solutions="solutions"
      :recentPosts="recentPosts"
      :callsToAction="callsToAction"
      :resources="resources"
    />
    <main class="lg:relative">
      <div
        class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left"
      >
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 class="tracking-tight">
            <Text
              size="5xl"
              weight="extrabold"
              color="gray-900"
              :content="title"
            />
            <Text
              size="5xl"
              weight="extrabold"
              color="primary-600"
              :content="subtitle"
            />
          </h1>
          <Text
            size="xl"
            color="gray-500"
            :content="description"
            class="mt-6 max-w-lg mx-auto sm:max-w-3xl"
          />
          <div
            class="mt-10 sm:flex sm:justify-center lg:justify-start space-x-2"
          >
            <Button
              v-for="button in buttons"
              :key="button.label"
              :content="button.label"
              :variant="button.type"
              size="lg"
            />
          </div>
        </div>
      </div>
      <div
        class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
      >
        <img
          class="absolute inset-0 w-full h-full object-cover"
          :src="image"
          alt=""
        />
      </div>
    </main>
  </div>
</template>

<script>
import CenterHeader from "../../Headers/CenteredWithBottomBorder/CenteredWithBottomBorder.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
import Button from "../../../atoms/Button/Button.vue";
/**
 * - Use it to show hero sections splitting with nav bar
 */
export default {
  components: {
    CenterHeader,
    Icon,
    Text,
    Button,
  },
  props: {
    /**
     * Use it for solutions
     */
    solutions: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it for callsToAction
     */
    callsToAction: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it for resources
     */
    resources: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it for recentPosts
     */
    recentPosts: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it for section title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Use it for section subtitle
     */
    subtitle: {
      type: String,
      default: "",
    },
    /**
     * Use it for section description
     */
    description: {
      type: String,
      default: "",
    },
    /**
     * Use it for section buttons
     */
    buttons: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it for section background image
     */
    image: {
      type: String,
      default: "",
    },
  },
};
</script>
