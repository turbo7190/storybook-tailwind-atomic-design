<template>
  <Popover class="relative bg-white">
    <div
      class="absolute inset-0 shadow z-30 pointer-events-none"
      aria-hidden="true"
    />
    <div class="relative z-20">
      <div
        class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10"
      >
        <div>
          <a href="#" class="flex">
            <img
              class="h-8 w-auto sm:h-10"
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt=""
            />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="bg-white rounded-md p-2 inline-flex items-center justify-center hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          >
            <Icon name="Bars3Icon" size="6" color="gray-400" />
          </PopoverButton>
        </div>
        <div
          class="hidden md:flex-1 md:flex md:items-center md:justify-between"
        >
          <PopoverGroup as="nav" class="flex space-x-10">
            <Popover v-slot="{ open }">
              <PopoverButton
                class="group bg-white rounded-md inline-flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <Text
                  size="base"
                  weight="medium"
                  :color="open ? 'gray-900' : 'gray-500'"
                  content="Solutions"
                  customClass="hover:text-gray-900"
                />
                <Icon
                  name="ChevronDownIcon"
                  :color="open ? 'gray-600' : 'gray-400'"
                  class="ml-2 h-5 w-5 group-hover:text-gray-500"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <PopoverPanel
                  class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white"
                >
                  <div
                    class="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16"
                  >
                    <a
                      v-for="item in solutions"
                      :key="item.name"
                      :href="item.href"
                      class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50"
                    >
                      <div class="flex md:h-full lg:flex-col">
                        <div class="flex-shrink-0">
                          <span
                            class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 sm:h-12 sm:w-12"
                          >
                            <Icon :name="item.icon" size="6" color="white" />
                          </span>
                        </div>
                        <div
                          class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4"
                        >
                          <div>
                            <Text
                              color="gray-900"
                              weight="medium"
                              :content="item.name"
                            />
                            <Text
                              size="sm"
                              color="gray-500"
                              :content="item.description"
                              class="mt-1"
                            />
                          </div>
                          <Text
                            color="primary-600"
                            weight="medium"
                            size="sm"
                            content="Learn more &rarr;"
                            class="mt-2"
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="bg-gray-50">
                    <div
                      class="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8"
                    >
                      <div
                        v-for="item in callsToAction"
                        :key="item.name"
                        class="flow-root"
                      >
                        <a
                          :href="item.href"
                          class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-100"
                        >
                          <Icon :name="item.icon" size="6" color="gray-400" />
                          <Text
                            color="gray-900"
                            :content="item.name"
                            class="ml-3"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <Link
              size="base"
              weight="medium"
              color="gray-500"
              hoverColor="gray-900"
              content="Pricing"
            />
            <Link
              size="base"
              weight="medium"
              color="gray-500"
              hoverColor="gray-900"
              content="Docs"
            />
            <Popover v-slot="{ open }">
              <PopoverButton
                class="group bg-white rounded-md inline-flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <Text
                  size="base"
                  weight="medium"
                  :color="open ? 'gray-900' : 'gray-500'"
                  content="More"
                  customClass="hover:text-gray-900"
                />
                <Icon
                  name="ChevronDownIcon"
                  :color="open ? 'gray-600' : 'gray-400'"
                  class="ml-2 h-5 w-5 group-hover:text-gray-500"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <PopoverPanel
                  class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg"
                >
                  <div class="absolute inset-0 flex">
                    <div class="bg-white w-1/2" />
                    <div class="bg-gray-50 w-1/2" />
                  </div>
                  <div
                    class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2"
                  >
                    <nav
                      class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                    >
                      <div>
                        <Text
                          size="sm"
                          weight="medium"
                          color="gray-500"
                          content="Company"
                          customClass="tracking-wide uppercase"
                        />
                        <ul role="list" class="mt-5 space-y-6">
                          <li
                            v-for="item in company"
                            :key="item.name"
                            class="flow-root"
                          >
                            <a
                              :href="item.href"
                              class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <Icon
                                :name="item.icon"
                                size="6"
                                color="gray-400"
                                class="flex-shrink-0"
                              />
                              <Text
                                size="base"
                                weight="medium"
                                color="gray-900"
                                :content="item.name"
                                class="ml-4"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <Text
                          size="sm"
                          weight="medium"
                          color="gray-500"
                          content="Resources"
                          customClass="tracking-wide uppercase"
                        />
                        <ul role="list" class="mt-5 space-y-6">
                          <li
                            v-for="item in resources"
                            :key="item.name"
                            class="flow-root"
                          >
                            <a
                              :href="item.href"
                              class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <Icon
                                :name="item.icon"
                                size="6"
                                color="gray-400"
                                class="flex-shrink-0"
                              />
                              <Text
                                size="base"
                                weight="medium"
                                color="gray-900"
                                :content="item.name"
                                class="ml-4"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <div
                      class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12"
                    >
                      <div>
                        <h3
                          class="text-sm font-medium tracking-wide text-gray-500 uppercase"
                        >
                          From the blog
                        </h3>
                        <ul role="list" class="mt-6 space-y-6">
                          <li
                            v-for="post in blogPosts"
                            :key="post.id"
                            class="flow-root"
                          >
                            <a
                              :href="post.href"
                              class="-m-3 p-3 flex rounded-lg hover:bg-gray-100"
                            >
                              <div class="hidden sm:block flex-shrink-0">
                                <img
                                  class="w-32 h-20 object-cover rounded-md"
                                  :src="post.imageUrl"
                                  alt=""
                                />
                              </div>
                              <div class="w-0 flex-1 sm:ml-8">
                                <Text
                                  size="base"
                                  weight="medium"
                                  color="gray-900"
                                  :content="post.name"
                                  class="truncate"
                                />
                                <Text
                                  size="sm"
                                  color="gray-500"
                                  :content="post.preview"
                                  class="mt-1"
                                />
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-6">
                        <Link
                          size="sm"
                          weight="medium"
                          color="primary-600"
                          hoverColor="primary-500"
                          content="View all posts &rarr;"
                        />
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
          <div class="flex items-center md:ml-12">
            <Button
              content="Sign in"
              variant="secondary"
              custom-class="border-none text-base"
            />
            <Button
              content="Sign up"
              variant="primary"
              custom-class="text-base ml-2"
            />
          </div>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-6 px-5 sm:pb-8">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                >
                  <Icon name="XMarkIcon" size="6" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6 sm:mt-8">
              <nav>
                <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                  <a
                    v-for="item in solutions"
                    :key="item.name"
                    :href="item.href"
                    class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50"
                  >
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 sm:h-12 sm:w-12"
                    >
                      <Icon :name="item.icon" color="white" size="6" />
                    </div>
                    <Text
                      weight="medium"
                      color="gray-900"
                      class="ml-4"
                      :content="item.name"
                    />
                  </a>
                </div>
                <div class="mt-8">
                  <Link
                    size="base"
                    weight="medium"
                    color="primary-600"
                    hoverColor="primary-500"
                    content="View all products &rarr;"
                  />
                </div>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4">
              <Link
                size="base"
                weight="medium"
                color="gray-900"
                hoverColor="gray-700"
                content="Pricing"
              />
              <Link
                size="base"
                weight="medium"
                color="gray-900"
                hoverColor="gray-700"
                content="Docs"
              />
              <Link
                size="base"
                weight="medium"
                color="gray-900"
                hoverColor="gray-700"
                content="Company"
              />
              <Link
                size="base"
                weight="medium"
                color="gray-900"
                hoverColor="gray-700"
                content="Resources"
              />
              <Link
                size="base"
                weight="medium"
                color="gray-900"
                hoverColor="gray-700"
                content="Blog"
              />
              <Link
                size="base"
                weight="medium"
                color="gray-900"
                hoverColor="gray-700"
                content="Contat Sales"
              />
            </div>
            <div class="mt-6">
              <Button variant="primary" content="Sign up" class="w-full" />
              <p class="mt-6 flex items-center justify-center">
                <Text
                  content="Existing customer?"
                  weight="medium"
                  color="gray-500"
                />
                <Link
                  size="base"
                  weight="medium"
                  color="primary-600"
                  hoverColor="primary-500"
                  content="Sign in"
                  class="ml-1"
                />
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Button from "../../../atoms/Button/Button.vue";
import Text from "../../../atoms/Text/Text.vue";
import Link from "../../../atoms/Link/Link.vue";
/**
 * - Use it to show header with full width flyouts
 */
export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Icon,
    Button,
    Text,
    Link,
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
     * Use it for blogPosts
     */
    blogPosts: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it for company
     */
    company: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
