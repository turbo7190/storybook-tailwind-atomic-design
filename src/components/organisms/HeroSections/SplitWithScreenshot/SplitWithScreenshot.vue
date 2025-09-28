<template>
  <div class="bg-white pb-8 sm:pb-12 lg:pb-12">
    <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
      <div
        class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24"
      >
        <div>
          <div>
            <img
              class="h-11 w-auto"
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Workflow"
            />
          </div>
          <div class="mt-20">
            <div>
              <a href="#" class="inline-flex space-x-4">
                <Badge
                  label="What's new"
                  bgColor="primary-50"
                  textSize="xs"
                  textColor="primary-600"
                  px="2.5"
                  py="1"
                  isRounded
                  class="font-semibold uppercase tracking-wide"
                />
                <Text
                  size="sm"
                  color="primary-600"
                  content="Just shipped version 0.1.0"
                  class="inline-flex items-center space-x-1"
                />
                <Icon
                  name="ChevronRightIcon"
                  size="5"
                  color="primary-600"
                  class="ml-2 mt-0.5"
                />
              </a>
            </div>
            <div class="mt-6 sm:max-w-xl">
              <Text
                size="4xl"
                weight="extrabold"
                color="gray-900"
                :content="title"
                class="sm:text-5xl tracking-tight"
              />
              <Text
                size="xl"
                weight="extrabold"
                color="gray-500"
                :content="description"
                class="mt-6 max-w-lg mx-auto sm:max-w-3xl"
              />
            </div>
            <form
              action="#"
              class="mt-12 sm:max-w-lg sm:w-full sm:flex space-x-2"
            >
              <TextInput
                placeholder="Enter your email"
                custom-class="text-base py-3 w-full"
              />
              <Button :content="btnText" />
            </form>
            <div class="mt-6">
              <div class="inline-flex items-center divide-x divide-gray-300">
                <div class="flex-shrink-0 flex pr-5">
                  <Icon name="StarIcon" size="5" color="yellow-400" />
                  <Icon name="StarIcon" size="5" color="yellow-400" />
                  <Icon name="StarIcon" size="5" color="yellow-400" />
                  <Icon name="StarIcon" size="5" color="yellow-400" />
                  <Icon name="StarIcon" size="5" color="yellow-400" />
                </div>
                <Text
                  size="sm"
                  color="gray-500"
                  :content="rateText"
                  class="min-w-0 flex-1 pl-5 py-1 sm:py-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
        <div
          class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
        >
          <div class="hidden sm:block">
            <div
              class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"
            />
            <svg
              class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
              width="404"
              height="392"
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="392"
                fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
              />
            </svg>
          </div>
          <div
            class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12"
          >
            <img
              class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
              :src="screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
import TextInput from "../../../molecules/Inputs/Component/Component.vue";
import Button from "../../../atoms/Button/Button.vue";
import Link from "../../../atoms/Link/Link.vue";
import Badge from "../../../molecules/Badge/Basic/Basic.vue";
/**
 * - Use it to show hero sections splitting with screenshot
 */
export default {
  components: {
    Icon,
    Text,
    Button,
    Badge,
    TextInput,
    Link,
  },
  props: {
    /**
     * Use it for section title
     */
    title: {
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
     * Use it for input placeholder
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Use it for button text
     */
    btnText: {
      type: String,
      default: "",
    },
    /**
     * Use it for rate text
     */
    rateText: {
      type: String,
      default: "",
    },
    /**
     * Use it for screenshot
     */
    screenshot: {
      type: String,
      default: "",
    },
  },
};
</script>
