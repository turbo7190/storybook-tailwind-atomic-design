<template>
  <div class="bg-white">
    <header>
      <CenterHeader
        :solutions="solutions"
        :recentPosts="recentPosts"
        :callsToAction="callsToAction"
        :resources="resources"
      />
    </header>
    <main>
      <div>
        <!-- Hero card -->
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div class="absolute inset-0">
                <img class="h-full w-full object-cover" :src="image" alt="" />
                <div
                  class="absolute inset-0 bg-primary-700 mix-blend-multiply"
                />
              </div>
              <div
                class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"
              >
                <h1 class="text-center tracking-tight">
                  <Text
                    size="4xl"
                    weight="extrabold"
                    color="white"
                    :content="title"
                    class="sm:text-5xl lg:text-6xl"
                  />
                  <Text
                    size="4xl"
                    color="primary-200"
                    :content="subtitle"
                    class="sm:text-5xl lg:text-6xl"
                  />
                </h1>
                <Text
                  size="xl"
                  color="primary-200"
                  :content="description"
                  class="mt-6 max-w-lg mx-auto text-center sm:max-w-3xl"
                />
                <div
                  class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
                >
                  <div
                    class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"
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
            </div>
          </div>
        </div>

        <!-- Logo cloud -->
        <logo-cloud :items="cloudItems" class="bg-gray-100" />
      </div>

      <!-- More main page content here... -->
      <slot></slot>
    </main>
  </div>
</template>

<script>
import CenterHeader from "../../Headers/CenteredWithBottomBorder/CenteredWithBottomBorder.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
import Button from "../../../atoms/Button/Button.vue";
import LogoCloud from "../../LogoClouds/Simple/Simple.vue";
/**
 * - Use it to show hero sections with card with background image
 */
export default {
  components: {
    CenterHeader,
    Icon,
    Text,
    Button,
    LogoCloud,
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
     * Use it for section buttons
     */
    cloudItems: {
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
