<template>
  <footer class="bg-gray-800" aria-labelledby="footer-heading">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
        <div class="grid gap-8 xl:col-span-4">
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
        <div class="mt-12 xl:mt-0">
          <h3 class="text-sm font-semibold tracking-wider uppercase text-white">
            {{ landuageAndCurrencyList[0].title }} &amp;
            {{ landuageAndCurrencyList[1].title }}
          </h3>
          <form class="mt-4 sm:max-w-xs">
            <fieldset
              v-for="(item, index) in landuageAndCurrencyList"
              :key="item.title"
              :class="index > 0 ? 'mt-4' : ''"
              class="w-full"
            >
              <label for="language" class="sr-only">{{ item.title }}</label>
              <div class="relative">
                <select
                  id="language"
                  name="language"
                  class="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md py-2 pl-3 pr-10 text-base text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                >
                  <option v-for="list in item.subList" :key="list">
                    <Text
                      :content="list"
                      weight="normal"
                      color="gray-500"
                      size="base"
                    />
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center"
                >
                  <ChevronDownIcon
                    class="h-4 w-4 text-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <div
        class="border-t border-gray-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0"
      >
        <div>
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
        </div>
        <form class="mt-4 sm:flex sm:max-w-md lg:mt-0">
          <label for="email-address" class="sr-only">Email address</label>
          <input
            type="email"
            name="email-address"
            id="email-address"
            autocomplete="email"
            required=""
            class="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs"
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
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
import Text from "../../../atoms/Text/Text.vue";
import Link from "../../../atoms/Link/Link.vue";
import Icon from "../../../atoms/Icons/Icons.vue";

export default {
  components: {
    ChevronDownIcon,
    Text,
    Link,
    Icon,
  },
  props: {
    heading: {
      type: String,
      default: "",
    },
    landuageAndCurrencyList: {
      type: Array,
      default: () => [],
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
