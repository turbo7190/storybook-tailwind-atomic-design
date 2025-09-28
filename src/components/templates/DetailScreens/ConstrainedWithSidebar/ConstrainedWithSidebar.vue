<template>
  <div class="min-h-full flex h-screen overflow-scroll">
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
            class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800"
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
            <div class="flex-shrink-0 flex items-center px-4">
              <img
                class="h-8 w-auto"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt="Workflow"
              />
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2">
                <div class="space-y-1">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                    ]"
                    :aria-current="item.current ? 'page' : undefined"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-gray-300'
                          : 'text-gray-400 group-hover:text-gray-300',
                        'mr-4 flex-shrink-0 h-6 w-6',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </div>
                <div class="mt-10">
                  <p
                    class="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider"
                  >
                    Projects
                  </p>
                  <div class="mt-2 space-y-1">
                    <a
                      v-for="project in projects"
                      :key="project.id"
                      :href="project.href"
                      class="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 text-base font-medium rounded-md"
                    >
                      <span class="truncate">{{ project.name }}</span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:w-64 lg:fixed lg:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex-1 flex flex-col min-h-0">
        <div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
          <img
            class="h-8 w-auto"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
            alt="Workflow"
          />
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto bg-gray-800">
          <nav class="flex-1 px-2 py-4">
            <div class="space-y-1">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                ]"
                :aria-current="item.current ? 'page' : undefined"
              >
                <component
                  :is="item.icon"
                  :class="[
                    item.current
                      ? 'text-gray-300'
                      : 'text-gray-400 group-hover:text-gray-300',
                    'mr-3 flex-shrink-0 h-6 w-6',
                  ]"
                  aria-hidden="true"
                />
                {{ item.name }}
              </a>
            </div>
            <div class="mt-10">
              <p
                class="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider"
              >
                Projects
              </p>
              <div class="mt-2 space-y-1">
                <a
                  v-for="project in projects"
                  :key="project.id"
                  :href="project.href"
                  class="group flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700"
                >
                  <span class="truncate">
                    {{ project.name }}
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="lg:pl-64 flex flex-col w-0 flex-1">
      <div
        class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200"
      >
        <button
          type="button"
          class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 flex">
            <form class="w-full flex lg:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                >
                  <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  class="border-none block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center lg:ml-6">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Create
            </button>
          </div>
        </div>
      </div>

      <main class="flex-1">
        <div class="py-8 xl:py-10">
          <div
            class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3"
          >
            <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
              <div>
                <div>
                  <div
                    class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6"
                  >
                    <div>
                      <h1 class="text-2xl font-bold text-gray-900">
                        ARIA attribute misspelled
                      </h1>
                      <p class="mt-2 text-sm text-gray-500">
                        #400 opened by
                        {{ " " }}
                        <a href="#" class="font-medium text-gray-900"
                          >Hilary Mahy</a
                        >
                        {{ " " }}
                        in
                        {{ " " }}
                        <a href="#" class="font-medium text-gray-900"
                          >Customer Portal</a
                        >
                      </p>
                    </div>
                    <div class="mt-4 flex space-x-3 md:mt-0">
                      <button
                        type="button"
                        class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      >
                        <PencilIcon
                          class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>Edit</span>
                      </button>
                      <button
                        type="button"
                        class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      >
                        <BellIcon
                          class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>Subscribe</span>
                      </button>
                    </div>
                  </div>
                  <aside class="mt-8 xl:hidden">
                    <h2 class="sr-only">Details</h2>
                    <div class="space-y-5">
                      <div class="flex items-center space-x-2">
                        <LockOpenIcon
                          class="h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                        <span class="text-green-700 text-sm font-medium"
                          >Open Issue</span
                        >
                      </div>
                      <div class="flex items-center space-x-2">
                        <ChatBubbleLeftRightIcon
                          class="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span class="text-gray-900 text-sm font-medium"
                          >4 comments</span
                        >
                      </div>
                      <div class="flex items-center space-x-2">
                        <CalendarIcon
                          class="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span class="text-gray-900 text-sm font-medium"
                          >Created on
                          <time datetime="2020-12-02">Dec 2, 2020</time></span
                        >
                      </div>
                    </div>
                    <div
                      class="mt-6 border-t border-b border-gray-200 py-6 space-y-8"
                    >
                      <div>
                        <h2 class="text-sm font-medium text-gray-500">
                          Assignees
                        </h2>
                        <ul role="list" class="mt-3 space-y-3">
                          <li class="flex justify-start">
                            <a href="#" class="flex items-center space-x-3">
                              <div class="flex-shrink-0">
                                <img
                                  class="h-5 w-5 rounded-full"
                                  src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                  alt=""
                                />
                              </div>
                              <div class="text-sm font-medium text-gray-900">
                                Eduardo Benz
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h2 class="text-sm font-medium text-gray-500">Tags</h2>
                        <ul role="list" class="mt-2 leading-8">
                          <li class="inline">
                            <a
                              href="#"
                              class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                            >
                              <div
                                class="absolute flex-shrink-0 flex items-center justify-center"
                              >
                                <span
                                  class="h-1.5 w-1.5 rounded-full bg-rose-500"
                                  aria-hidden="true"
                                />
                              </div>
                              <div
                                class="ml-3.5 text-sm font-medium text-gray-900"
                              >
                                Bug
                              </div>
                            </a>
                            {{ " " }}
                          </li>
                          <li class="inline">
                            <a
                              href="#"
                              class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                            >
                              <div
                                class="absolute flex-shrink-0 flex items-center justify-center"
                              >
                                <span
                                  class="h-1.5 w-1.5 rounded-full bg-primary-500"
                                  aria-hidden="true"
                                />
                              </div>
                              <div
                                class="ml-3.5 text-sm font-medium text-gray-900"
                              >
                                Accessibility
                              </div>
                            </a>
                            {{ " " }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                  <div class="py-3 xl:pt-6 xl:pb-0">
                    <h2 class="sr-only">Description</h2>
                    <div class="prose max-w-none">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita, hic? Commodi cumque similique id tempora
                        molestiae deserunt at suscipit, dolor voluptatem,
                        numquam, harum consequatur laboriosam voluptas tempore
                        aut voluptatum alias?
                      </p>
                      <ul role="list">
                        <li>
                          Tempor ultrices proin nunc fames nunc ut auctor vitae
                          sed. Eget massa parturient vulputate fermentum id
                          facilisis nam pharetra. Aliquet leo tellus.
                        </li>
                        <li>
                          Turpis ac nunc adipiscing adipiscing metus tincidunt
                          senectus tellus.
                        </li>
                        <li>
                          Semper interdum porta sit tincidunt. Dui suspendisse
                          scelerisque amet metus eget sed. Ut tellus in sed
                          dignissim.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <section aria-labelledby="activity-title" class="mt-8 xl:mt-10">
                <div>
                  <div class="divide-y divide-gray-200">
                    <div class="pb-4">
                      <h2
                        id="activity-title"
                        class="text-lg font-medium text-gray-900"
                      >
                        Activity
                      </h2>
                    </div>
                    <WithMultipleItemTypes class="mt-4" />
                  </div>
                </div>
              </section>
            </div>
            <aside class="hidden xl:block xl:pl-8">
              <h2 class="sr-only">Details</h2>
              <div class="space-y-5">
                <div class="flex items-center space-x-2">
                  <LockOpenIcon
                    class="h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                  <span class="text-green-700 text-sm font-medium"
                    >Open Issue</span
                  >
                </div>
                <div class="flex items-center space-x-2">
                  <ChatBubbleLeftRightIcon
                    class="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span class="text-gray-900 text-sm font-medium"
                    >4 comments</span
                  >
                </div>
                <div class="flex items-center space-x-2">
                  <CalendarIcon
                    class="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span class="text-gray-900 text-sm font-medium"
                    >Created on
                    <time datetime="2020-12-02">Dec 2, 2020</time></span
                  >
                </div>
              </div>
              <div class="mt-6 border-t border-gray-200 py-6 space-y-8">
                <div>
                  <h2 class="text-sm font-medium text-gray-500">Assignees</h2>
                  <ul role="list" class="mt-3 space-y-3">
                    <li class="flex justify-start">
                      <a href="#" class="flex items-center space-x-3">
                        <div class="flex-shrink-0">
                          <img
                            class="h-5 w-5 rounded-full"
                            src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div class="text-sm font-medium text-gray-900">
                          Eduardo Benz
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="text-sm font-medium text-gray-500">Tags</h2>
                  <ul role="list" class="mt-2 leading-8">
                    <li class="inline">
                      <a
                        href="#"
                        class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                      >
                        <div
                          class="absolute flex-shrink-0 flex items-center justify-center"
                        >
                          <span
                            class="h-1.5 w-1.5 rounded-full bg-rose-500"
                            aria-hidden="true"
                          />
                        </div>
                        <div class="ml-3.5 text-sm font-medium text-gray-900">
                          Bug
                        </div>
                      </a>
                      {{ " " }}
                    </li>
                    <li class="inline">
                      <a
                        href="#"
                        class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                      >
                        <div
                          class="absolute flex-shrink-0 flex items-center justify-center"
                        >
                          <span
                            class="h-1.5 w-1.5 rounded-full bg-primary-500"
                            aria-hidden="true"
                          />
                        </div>
                        <div class="ml-3.5 text-sm font-medium text-gray-900">
                          Accessibility
                        </div>
                      </a>
                      {{ " " }}
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
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
import WithMultipleItemTypes from "../../../../components/organisms/Feeds/WithMultipleItemTypes/WithMultipleItemTypes.vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import {
  BellIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  LockOpenIcon,
  PencilIcon,
  MagnifyingGlassIcon,
  TagIcon,
  UserCircleIcon as UserCircleIconSolid,
} from "@heroicons/vue/24/solid";

export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    CalendarIcon,
    ChatBubbleLeftRightIcon,
    CheckCircleIcon,
    LockOpenIcon,
    Bars3Icon,
    PencilIcon,
    MagnifyingGlassIcon,
    TagIcon,
    UserCircleIconSolid,
    XMarkIcon,
    WithMultipleItemTypes,
  },
  props: ["navigation", "projects", "activity"],
  setup() {
    const sidebarOpen = ref(false);
    const selectedSize = ref(null);

    return {
      sidebarOpen,
      selectedSize,
    };
  },
};
</script>
