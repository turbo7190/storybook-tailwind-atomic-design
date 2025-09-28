<template>
  <div class="h-screen overflow-scroll">
    <Disclosure
      as="div"
      class="relative bg-sky-700 pb-32 overflow-hidden"
      v-slot="{ open }"
    >
      <nav
        :class="[
          open ? 'bg-sky-900' : 'bg-transparent',
          'relative z-10 border-b border-teal-500 border-opacity-25 lg:bg-transparent lg:border-none',
        ]"
      >
        <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div
            class="relative h-16 flex items-center justify-between lg:border-b lg:border-sky-800"
          >
            <div class="px-2 flex items-center lg:px-0">
              <div class="flex-shrink-0">
                <img
                  class="block h-8 w-auto"
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                  alt="Workflow"
                />
              </div>
              <div class="hidden lg:block lg:ml-6 lg:space-x-4">
                <div class="flex">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-black bg-opacity-25'
                        : 'hover:bg-sky-800',
                      'rounded-md py-2 px-3 text-sm font-medium text-white',
                    ]"
                    >{{ item.name }}</a
                  >
                </div>
              </div>
            </div>
            <div class="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
              <div class="max-w-lg w-full lg:max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <div class="relative text-sky-100 focus-within:text-gray-400">
                  <div
                    class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
                  >
                    <MagnifyingGlassIcon
                      class="flex-shrink-0 h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search"
                    name="search"
                    class="block w-full bg-sky-700 bg-opacity-50 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 placeholder-sky-100 focus:outline-none focus:bg-white focus:ring-white focus:border-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div class="flex lg:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton
                class="p-2 rounded-md inline-flex items-center justify-center text-sky-200 hover:text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span class="sr-only">Open main menu</span>
                <Bars3Icon
                  v-if="!open"
                  class="block flex-shrink-0 h-6 w-6"
                  aria-hidden="true"
                />
                <XMarkIcon
                  v-else
                  class="block flex-shrink-0 h-6 w-6"
                  aria-hidden="true"
                />
              </DisclosureButton>
            </div>
            <div class="hidden lg:block lg:ml-4">
              <div class="flex items-center">
                <button
                  type="button"
                  class="flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:outline-none focus:bg-sky-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-900 focus:ring-white"
                >
                  <span class="sr-only">View notifications</span>
                  <BellIcon class="h-6 w-6" aria-hidden="true" />
                </button>

                <!-- Profile dropdown -->
                <Menu as="div" class="relative flex-shrink-0 ml-4">
                  <div>
                    <MenuButton
                      class="rounded-full flex text-sm text-white focus:outline-none focus:bg-sky-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-900 focus:ring-white"
                    >
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="rounded-full h-8 w-8"
                        :src="user.imageUrl"
                        alt=""
                      />
                    </MenuButton>
                  </div>
                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <MenuItems
                      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <MenuItem
                        v-for="item in userNavigation"
                        :key="item.name"
                        v-slot="{ active }"
                      >
                        <a
                          :href="item.href"
                          :class="[
                            active ? 'bg-gray-100' : '',
                            'block py-2 px-4 text-sm text-gray-700',
                          ]"
                          >{{ item.name }}</a
                        >
                      </MenuItem>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel class="bg-sky-900 lg:hidden">
          <div class="pt-2 pb-3 px-2 space-y-1">
            <DisclosureButton
              v-for="item in navigation"
              :key="item.name"
              as="a"
              :href="item.href"
              :class="[
                item.current ? 'bg-black bg-opacity-25' : 'hover:bg-sky-800',
                'block rounded-md py-2 px-3 text-base font-medium text-white',
              ]"
              >{{ item.name }}</DisclosureButton
            >
          </div>
          <div class="pt-4 pb-3 border-t border-sky-800">
            <div class="flex items-center px-4">
              <div class="flex-shrink-0">
                <img
                  class="rounded-full h-10 w-10"
                  :src="user.imageUrl"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-white">
                  {{ user.name }}
                </div>
                <div class="text-sm font-medium text-sky-200">
                  {{ user.email }}
                </div>
              </div>
              <button
                type="button"
                class="ml-auto flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:outline-none focus:bg-sky-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-900 focus:ring-white"
              >
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-3 px-2">
              <DisclosureButton
                v-for="item in userNavigation"
                :key="item.name"
                as="a"
                :href="item.href"
                class="block rounded-md py-2 px-3 text-base font-medium text-sky-200 hover:text-white hover:bg-sky-800"
                >{{ item.name }}</DisclosureButton
              >
            </div>
          </div>
        </DisclosurePanel>
      </nav>
      <div
        aria-hidden="true"
        :class="[
          open ? 'bottom-0' : 'inset-y-0',
          'absolute inset-x-0 left-1/2 transform -translate-x-1/2 w-full overflow-hidden lg:inset-y-0',
        ]"
      >
        <div class="absolute inset-0 flex">
          <div class="h-full w-1/2" style="background-color: #0a527b" />
          <div class="h-full w-1/2" style="background-color: #065d8c" />
        </div>
        <div class="relative flex justify-center">
          <svg
            class="flex-shrink-0"
            width="1750"
            height="308"
            viewBox="0 0 1750 308"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M284.161 308H1465.84L875.001 182.413 284.161 308z"
              fill="#0369a1"
            />
            <path d="M1465.84 308L16.816 0H1750v308h-284.16z" fill="#065d8c" />
            <path d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#0a527b" />
            <path
              d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z"
              fill="#0a4f76"
            />
          </svg>
        </div>
      </div>
      <header class="relative py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-white">Settings</h1>
        </div>
      </header>
    </Disclosure>

    <main class="relative -mt-32">
      <div class="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <TwoColumnCardsWithSidebar />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from "@headlessui/vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
import { BellIcon, Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import TwoColumnCardsWithSidebar from "../../../../components/organisms/FormLayouts/TwoColumnCardsWithSidebar/TwoColumnCardsWithSidebar.vue";

export default {
  components: {
    TwoColumnCardsWithSidebar,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Switch,
    SwitchDescription,
    SwitchGroup,
    SwitchLabel,
    BellIcon,
    Bars3Icon,
    MagnifyingGlassIcon,
    XMarkIcon,
  },
  props: ["user", "navigation", "subNavigation", "userNavigation"],
  setup() {
    const availableToHire = ref(true);
    const privateAccount = ref(false);
    const allowCommenting = ref(true);
    const allowMentions = ref(true);

    return {
      availableToHire,
      privateAccount,
      allowCommenting,
      allowMentions,
    };
  },
};
</script>
