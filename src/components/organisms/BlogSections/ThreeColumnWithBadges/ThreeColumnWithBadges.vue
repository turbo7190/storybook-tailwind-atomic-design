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
          {{ title }}
        </h2>
        <p class="mt-3 text-xl text-gray-500 sm:mt-4">{{ description }}</p>
      </div>
      <div
        class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"
      >
        <div v-for="post in posts" :key="post.title">
          <div>
            <a :href="post.category.href" class="inline-block">
              <span
                :class="[
                  post.category.color,
                  'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium',
                ]"
              >
                {{ post.category.name }}
              </span>
            </a>
          </div>
          <a :href="post.href" class="block mt-4">
            <p class="text-xl font-semibold text-gray-900">
              {{ post.title }}
            </p>
            <p class="mt-3 text-base text-gray-500">
              {{ post.description }}
            </p>
          </a>
          <div class="mt-6 flex items-center">
            <AvatarText
              :src="post.author.imageUrl"
              :title="post.author.name"
              :username="post.author.name"
              :subtitle="`${post.date} &middot; ${post.readingTime} read`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AvatarText from "../../../molecules/Avatar/AvatarText.vue";
/**
 * Use it to show blogs as three column cards with badges
 */
export default {
  components: { AvatarText },
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
     * Use it to show posts
     */
    posts: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
