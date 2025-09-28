<template>
  <div class="h-full flex h-screen overflow-scroll">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none"
          >
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div class="flex-shrink-0 flex items-center px-4">
                <img
                  class="h-8 w-auto"
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                  alt="Workflow"
                />
              </div>
              <nav aria-label="Sidebar" class="mt-5">
                <div class="px-2 space-y-1">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                    ]"
                    :aria-current="item.current ? 'page' : undefined"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'mr-4 h-6 w-6',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </div>
                <hr class="border-t border-gray-200 my-5" aria-hidden="true" />
                <div class="px-2 space-y-1">
                  <a
                    v-for="item in secondaryNavigation"
                    :key="item.name"
                    :href="item.href"
                    class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <component
                      :is="item.icon"
                      class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </div>
              </nav>
            </div>
            <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" class="flex-shrink-0 group block">
                <div class="flex items-center">
                  <div>
                    <img
                      class="inline-block h-10 w-10 rounded-full"
                      :src="user.imageUrl"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p
                      class="text-base font-medium text-gray-700 group-hover:text-gray-900"
                    >
                      {{ user.name }}
                    </p>
                    <p
                      class="text-sm font-medium text-gray-500 group-hover:text-gray-700"
                    >
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100"
        >
          <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              <img
                class="h-8 w-auto"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt="Workflow"
              />
            </div>
            <nav class="mt-5 flex-1" aria-label="Sidebar">
              <div class="px-2 space-y-1">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[
                    item.current
                      ? 'bg-gray-200 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                >
                  <component
                    :is="item.icon"
                    :class="[
                      item.current
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6',
                    ]"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </a>
              </div>
              <hr class="border-t border-gray-200 my-5" aria-hidden="true" />
              <div class="flex-1 px-2 space-y-1">
                <a
                  v-for="item in secondaryNavigation"
                  :key="item.name"
                  :href="item.href"
                  class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <component
                    :is="item.icon"
                    class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </a>
              </div>
            </nav>
          </div>
          <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
            <a href="#" class="flex-shrink-0 w-full group block">
              <div class="flex items-center">
                <div>
                  <img
                    class="inline-block h-9 w-9 rounded-full"
                    :src="user.imageUrl"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p
                    class="text-sm font-medium text-gray-700 group-hover:text-gray-900"
                  >
                    {{ user.name }}
                  </p>
                  <p
                    class="text-xs font-medium text-gray-500 group-hover:text-gray-700"
                  >
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
      <div class="lg:hidden">
        <div
          class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5"
        >
          <div>
            <img
              class="h-8 w-auto"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
              alt="Workflow"
            />
          </div>
          <div>
            <button
              type="button"
              class="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
              @click="sidebarOpen = true"
            >
              <span class="sr-only">Open sidebar</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div class="flex-1 relative z-0 flex overflow-scroll">
        <main
          class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last"
        >
          <!-- Breadcrumb -->
          <nav
            class="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
            aria-label="Breadcrumb"
          >
            <a
              href="#"
              class="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
            >
              <ChevronLeftIcon
                class="-ml-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>Directory</span>
            </a>
          </nav>

          <article>
            <!-- Profile header -->
            <WithBannerImage :profile="profile" />

            <!-- Tabs -->
            <TabsWithUnderline class="mt-6 px-5" :tabs="tabs" />

            <!-- Description list -->
            <div class="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div
                  v-for="field in Object.keys(profile.fields)"
                  :key="field"
                  class="sm:col-span-1"
                >
                  <dt class="text-sm font-medium text-gray-500">
                    {{ field }}
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    {{ profile.fields[field] }}
                  </dd>
                </div>
                <div class="sm:col-span-2">
                  <dt class="text-sm font-medium text-gray-500">About</dt>
                  <dd
                    class="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
                    v-html="profile.about"
                  />
                </div>
              </dl>
            </div>

            <!-- Team member list -->
            <div class="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
              <h2 class="text-sm font-medium text-gray-500">Team members</h2>
              <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div
                  v-for="person in team"
                  :key="person.handle"
                  class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
                >
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="person.imageUrl"
                      alt=""
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <a href="#" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true" />
                      <p class="text-sm font-medium text-gray-900">
                        {{ person.name }}
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        {{ person.role }}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
        <aside
          class="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200"
        >
          <div class="px-6 pt-6 pb-4">
            <h2 class="text-lg font-medium text-gray-900">Directory</h2>
            <p class="mt-1 text-sm text-gray-600">
              Search directory of 3,018 employees
            </p>
            <form class="mt-6 flex space-x-4" action="#">
              <div class="flex-1 min-w-0">
                <label for="search" class="sr-only">Search</label>
                <div class="relative rounded-md shadow-sm">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <MagnifyingGlassIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    class="border-none focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Search"
                  />
                </div>
              </div>
              <button
                type="submit"
                class="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                <FunnelIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                <span class="sr-only">Search</span>
              </button>
            </form>
          </div>
          <!-- Directory list -->
          <nav class="flex-1 min-h-0 overflow-y-auto" aria-label="Directory">
            <div
              v-for="letter in Object.keys(directory)"
              :key="letter"
              class="relative"
            >
              <div
                class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
              >
                <h3>{{ letter }}</h3>
              </div>
              <ul role="list" class="relative z-0 divide-y divide-gray-200">
                <li v-for="person in directory[letter]" :key="person.id">
                  <div
                    class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
                  >
                    <div class="flex-shrink-0">
                      <img
                        class="h-10 w-10 rounded-full"
                        :src="person.imageUrl"
                        alt=""
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <a href="#" class="focus:outline-none">
                        <!-- Extend touch target to entire panel -->
                        <span class="absolute inset-0" aria-hidden="true" />
                        <p class="text-sm font-medium text-gray-900">
                          {{ person.name }}
                        </p>
                        <p class="text-sm text-gray-500 truncate">
                          {{ person.role }}
                        </p>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import {
  ChevronLeftIcon,
  FunnelIcon,
  EnvelopeIcon,
  PhoneIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/solid";
import WithBannerImage from "../../../../components/organisms/PageHeadings/WithBannerImage/WithBannerImage.vue";
import TabsWithUnderline from "../../../../components/molecules/Tabs/TabsWithUnderline/TabsWithUnderline.vue";

export default {
  components: {
    TabsWithUnderline,
    WithBannerImage,
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    ChevronLeftIcon,
    FunnelIcon,
    EnvelopeIcon,
    Bars3Icon,
    PhoneIcon,
    MagnifyingGlassIcon,
    XMarkIcon,
  },
  props: [
    "user",
    "navigation",
    "secondaryNavigation",
    "tabs",
    "profile",
    "directory",
    "team",
  ],
  setup() {
    const sidebarOpen = ref(false);
    return {
      sidebarOpen,
    };
  },
};
</script>
