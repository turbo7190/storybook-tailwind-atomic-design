<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <Text :content="heading" color="gray-900" size="lg" />
      <div
        class="mt-6 pb-10 border-t border-b border-gray-200 divide-y divide-gray-200 space-y-10"
      >
        <div
          v-for="item in items"
          :key="item.id"
          class="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
        >
          <div
            class="lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start"
          >
            <div class="flex items-center xl:col-span-1">
              <div class="flex items-center">
                <Icon
                  name="StarIcon"
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  :class="[
                    item.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                    'h-5 w-5 flex-shrink-0',
                  ]"
                  aria-hidden="true"
                />
              </div>
              <p class="ml-3 text-sm text-gray-700">
                {{ item.rating }}<span class="sr-only"> out of 5 stars</span>
              </p>
            </div>

            <div class="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
              <Text :content="item.title" color="gray-900" size="sm" />
              <div
                class="mt-3 space-y-6 text-sm text-gray-500"
                v-html="item.content"
              />
            </div>
          </div>

          <div
            class="mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3"
          >
            <Text :content="item.author" color="gray-900" />
            <Time
              :content="item.date"
              :datetime="item.datetime"
              color="gray-500"
              customClass="ml-4 border-l border-gray-200 pl-4 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// StarIcon now referenced as string in Icon component
import Text from "../../../../atoms/Text/Text.vue";
import Time from "../../../../atoms/Time/Time.vue";
import Icon from "../../../../atoms/Icons/Icons.vue";
export default {
  components: {
    Text,
    Time,
    Icon,
  },
  props: ["heading", "items"],
};
</script>
