<template>
  <footer class="bg-white" aria-labelledby="footer-heading">
    <Text
      :content="heading"
      weight="extrabold"
      color="gray-900"
      size="3xl"
      custom-class="sm:text-3xl"
    />
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <img
            class="h-10"
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80"
            alt="Company name"
          />
          <p class="text-gray-500 text-base"></p>
          <div class="flex space-x-6">
            <a
              v-for="item in logos"
              :key="item.name"
              :href="item.href"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">{{ item.name }}</span>
              <Icon
                :name="item.icon"
                class="h-6 w-6"
                aria-hidden="true"
                color="gray-400"
              />
            </a>
          </div>
        </div>
        <div class="mt-12 grid gap-8 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-4 md:gap-8">
            <div
              v-for="list in items"
              :key="list.heading"
              class="mt-12 md:mt-0"
            >
              <Text
                :content="list.heading"
                weight="medium"
                color="gray-900"
                size="lg"
              />
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in list.sublist" :key="item.title">
                  <Link
                    size="medium"
                    color="gray-500"
                    :hoverColor="'gray-900'"
                    :url="item.href"
                    :content="item.title"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-200 pt-8">
        <p class="text-base text-gray-400 xl:text-center">
          &copy; 2020 Workflow, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import Text from "../../../atoms/Text/Text.vue";
import Link from "../../../atoms/Link/Link.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
export default {
  components: {
    Text,
    Link,
    Icon,
  },
  props: {
    heading: {
      type: String,
      default: "",
    },
    items: {
      type: Array,
      default: () => [],
    },
    logos: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
