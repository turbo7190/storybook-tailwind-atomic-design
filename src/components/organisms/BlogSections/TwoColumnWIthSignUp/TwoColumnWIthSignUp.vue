<template>
  <div
    class="
      h-screen
      overflow-scroll
      bg-white
      pt-16
      pb-20
      px-4
      sm:px-6
      lg:pt-24 lg:pb-28 lg:px-8
    "
  >
    <div
      class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"
    >
      <div>
        <h2
          class="
            text-3xl
            tracking-tight
            font-extrabold
            text-gray-900
            sm:text-4xl
          "
        >
          {{title}}
        </h2>
        <div
          class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center"
        >
          <p class="text-xl text-gray-500">
            {{description}}
          </p>
          <form class="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
            <TextInput placeholder="Enter your email" />
            <div
              class="
                mt-2
                flex-shrink-0
                w-full
                flex
                rounded-md
                shadow-sm
                sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex
              "
            >
              <Button :content="btnText" variant="primary" />
            </div>
          </form>
        </div>
      </div>
      <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
        <div v-for="post in posts" :key="post.title">
          <p class="text-sm text-gray-500">
            <time :datetime="post.datetime">{{ post.date }}</time>
          </p>
          <a href="#" class="mt-2 block">
            <p class="text-xl font-semibold text-gray-900">
              {{ post.title }}
            </p>
            <p class="mt-3 text-base text-gray-500">
              {{ post.description }}
            </p>
          </a>
          <div class="mt-3">
            <TextLink
              content="Read full story"
              decoration="no-underline"
              color="primary-600"
              weight="semibold"
              size="base"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "../../../molecules/Inputs/Component/Component.vue";
import Button from "../../../atoms/Button/Button.vue";
import TextLink from "../../../atoms/Link/Link.vue";

/**
 * Use it to show banner as 2 columns with signup
 */
export default {
  components: {
    TextInput,
    Button,
    TextLink,
  },
	props: {
    /**
     * Use it to show blog title
     */
    title: {
      type: String,
    },
    /**
     * Use it to show blog description
     */
    description: {
      type: String,
    },
		/**
     * Use it for button
     */
    btnText: {
      type: String,
    },
    /**
     * Use it to show posts
     */
    posts: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
