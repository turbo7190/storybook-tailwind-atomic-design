<template>
  <footer class="bg-gray-800" aria-labelledby="footer-heading">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid gap-8 xl:col-span-2">
          <div class="md:grid md:gap-8">
            <div class="md:grid md:grid-cols-4 md:gap-8">
              <div
                v-for="list in items"
                :key="list.heading"
                class="mt-12 md:mt-0"
              >
                <Text
                  :content="list.heading"
                  weight="medium"
                  color="gray-400"
                  size="lg"
                />
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in list.sublist" :key="item.title">
                    <Link
                      size="medium"
                      color="white"
                      :hoverColor="'white'"
                      :url="item.href"
                      :content="item.title"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 xl:mt-0">
          <Text
            :content="'Subscribe to our newsletter'"
            weight="normal"
            color="gray-400"
            size="lg"
            custom-class="mt-6 max-w-3xl"
          />
          <Text
            :content="'The latest news, articles, and resources, sent to your inbox weekly.'"
            weight="normal"
            color="gray-300"
            size="base"
            class="mt-2"
          />
          <form class="mt-4 sm:flex sm:max-w-md">
            <label for="email-address" class="sr-only">Email address</label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autocomplete="email"
              required=""
              class="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
              placeholder="Enter your email"
            />
            <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                class="w-full bg-primary-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between"
      >
        <div class="flex space-x-6 md:order-2">
          <a
            v-for="item in logos"
            :key="item.name"
            :href="item.href"
            class="text-gray-400 hover:text-gray-300"
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
        <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
          &copy; 2020 Workflow, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent, h } from "vue";
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
    logos: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
