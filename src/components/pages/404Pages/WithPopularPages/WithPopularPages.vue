<template>
  <div class="bg-white h-screen overflow-scroll">
    <main class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex-shrink-0 pt-16">
        <img
          class="mx-auto h-12 w-auto"
          src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Workflow"
        />
      </div>
      <div class="max-w-xl mx-auto py-16 sm:py-24">
        <div class="text-center">
          <p
            class="text-sm font-semibold text-primary-600 uppercase tracking-wide"
          >
            404 error
          </p>
          <h1
            class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
          >
            This page does not exist.
          </h1>
          <p class="mt-2 text-lg text-gray-500">
            The page you are looking for could not be found.
          </p>
        </div>
        <div class="mt-12">
          <h2
            class="text-sm font-semibold text-gray-500 tracking-wide uppercase"
          >
            Popular pages
          </h2>
          <ul
            role="list"
            class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
          >
            <li
              v-for="(link, linkIdx) in links"
              :key="linkIdx"
              class="relative py-6 flex items-start space-x-4"
            >
              <div class="flex-shrink-0">
                <span
                  class="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-50"
                >
                  <component
                    :is="link.icon"
                    class="h-6 w-6 text-primary-700"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-medium text-gray-900">
                  <span
                    class="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                  >
                    <a href="#" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true" />
                      {{ link.title }}
                    </a>
                  </span>
                </h3>
                <p class="text-base text-gray-500">{{ link.description }}</p>
              </div>
              <div class="flex-shrink-0 self-center">
                <ChevronRightIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </li>
          </ul>
          <div class="mt-8">
            <TextLink
              content="Go back home &rarr;"
              decoration="no-underline"
              color="primary-600"
            />
          </div>
        </div>
      </div>
    </main>
    <footer class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="border-t border-gray-200 py-12 text-center md:flex md:justify-between"
      >
        <p class="text-base text-gray-400">
          &copy; Workflow, Inc. All rights reserved.
        </p>
        <div class="mt-6 flex justify-center space-x-8 md:mt-0">
          <a
            v-for="(item, itemIdx) in social"
            :key="itemIdx"
            :href="item.href"
            class="inline-flex text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">{{ item.name }}</span>
            <Icon
              :is="item.icon"
              width="6"
              height="6"
              aria-hidden="true"
              color="gray-500"
            />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import TextLink from "../../../../components/atoms/Link/Link.vue";
import Icon from "../../../../components/atoms/Icons/Icons.vue";

export default {
  components: {
    ChevronRightIcon,
    TextLink,
    Icon,
  },
  props: ["links", "social"],
};
</script>
