<template>
  <div class="flex h-full flex-col">
    <header
      class="relative z-20 flex flex-none items-center justify-between border-b border-gray-200 py-4 px-6"
    >
      <div>
        <Text
          size="lg"
          weight="semibold"
          color="gray-900"
          class="leading-6 sm:hidden"
          content="Jan 22, 2022"
        />
        <Text
          size="lg"
          weight="semibold"
          color="gray-900"
          class="leading-6 sm:inline hidden"
          content="January 22, 2022"
        />
      </div>
      <div class="flex items-center">
        <div class="flex items-center rounded-md shadow-sm md:items-stretch">
          <button
            type="button"
            class="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
          >
            <Icon
              name="ChevronLeftIcon"
              size="5"
              color="gray-400"
              class="hover:text-gray-500"
            />
          </button>
          <button
            type="button"
            class="hidden border-t border-b border-gray-300 bg-white px-3.5 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
          >
            <Text size="sm" weight="medium" color="gray-700" content="Today" />
          </button>
          <span class="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
          <button
            type="button"
            class="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
          >
            <Icon
              name="ChevronRightIcon"
              size="5"
              color="gray-400"
              class="hover:text-gray-500"
            />
          </button>
        </div>
        <div class="hidden md:ml-4 md:flex md:items-center">
          <Menu as="div" class="relative">
            <Dropdown
              label="Day view"
              custom-class="ml-0 z-50"
              :options="options"
            />
          </Menu>
          <div class="ml-6 h-6 w-px bg-gray-300" />
          <Button content="Add Event" custom-class="ml-6 rounded-md" />
        </div>
        <Menu as="div" class="relative ml-6 md:hidden">
          <MenuButton
            class="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500"
          >
            <Icon
              name="EllipsisVerticalIcon"
              size="5"
              color="gray-400"
              class="hover:text-gray-500"
            />
          </MenuButton>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <Link
                    size="sm"
                    :color="active ? 'gray-900' : 'gray-700'"
                    content="Create event"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
                  />
                </MenuItem>
              </div>
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <Link
                    size="sm"
                    :color="active ? 'gray-900' : 'gray-700'"
                    content="Go to today"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
                  />
                </MenuItem>
              </div>
              <div class="py-1">
                <MenuItem
                  v-for="option in options"
                  v-slot="{ active }"
                  :key="option"
                >
                  <Link
                    size="sm"
                    :color="active ? 'gray-900' : 'gray-700'"
                    :content="option"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
                  />
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </header>
    <div ref="container" class="flex flex-auto flex-col overflow-auto bg-white">
      <div
        style="width: 165%"
        class="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
      >
        <div
          ref="containerNav"
          class="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8"
        >
          <div
            class="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden"
          >
            <button type="button" class="flex flex-col items-center pt-2 pb-3">
              M
              <Text
                weight="semibold"
                color="gray-900"
                class="mt-1 flex h-8 w-8 items-center justify-center"
                content="10"
              />
            </button>
            <button type="button" class="flex flex-col items-center pt-2 pb-3">
              T
              <Text
                weight="semibold"
                color="gray-900"
                class="mt-1 flex h-8 w-8 items-center justify-center"
                content="11"
              />
            </button>
            <button type="button" class="flex flex-col items-center pt-2 pb-3">
              W
              <Text
                weight="semibold"
                color="white"
                class="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600"
                content="12"
              />
            </button>
            <button type="button" class="flex flex-col items-center pt-2 pb-3">
              T
              <Text
                weight="semibold"
                color="gray-900"
                class="mt-1 flex h-8 w-8 items-center justify-center"
                content="13"
              />
            </button>
            <button type="button" class="flex flex-col items-center pt-2 pb-3">
              F
              <Text
                weight="semibold"
                color="gray-900"
                class="mt-1 flex h-8 w-8 items-center justify-center"
                content="14"
              />
            </button>
            <button type="button" class="flex flex-col items-center pt-2 pb-3">
              S
              <Text
                weight="semibold"
                color="gray-900"
                class="mt-1 flex h-8 w-8 items-center justify-center"
                content="15"
              />
            </button>
            <button type="button" class="flex flex-col items-center pt-2 pb-3">
              S
              <Text
                weight="semibold"
                color="gray-900"
                class="mt-1 flex h-8 w-8 items-center justify-center"
                content="16"
              />
            </button>
          </div>

          <div
            class="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid"
          >
            <div class="col-end-1 w-14" />
            <div class="flex items-center justify-center py-3">
              <span class="flex"
                >Mon
                <Text
                  weight="semibold"
                  color="gray-900"
                  class="items-center justify-center ml-1"
                  content="10"
              /></span>
            </div>
            <div class="flex items-center justify-center py-3">
              <span class="flex"
                >Tue
                <Text
                  weight="semibold"
                  color="gray-900"
                  class="items-center justify-center ml-1"
                  content="11"
              /></span>
            </div>
            <div class="flex items-center justify-center py-3">
              <span class="flex items-center"
                >Wed
                <Text
                  weight="semibold"
                  color="white"
                  class="ml-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600"
                  content="12"
              /></span>
            </div>
            <div class="flex items-center justify-center py-3">
              <span class="flex"
                >Thu
                <Text
                  weight="semibold"
                  color="gray-900"
                  class="items-center justify-center ml-1"
                  content="13"
              /></span>
            </div>
            <div class="flex items-center justify-center py-3">
              <span class="flex"
                >Fri
                <Text
                  weight="semibold"
                  color="gray-900"
                  class="items-center justify-center ml-1"
                  content="14"
              /></span>
            </div>
            <div class="flex items-center justify-center py-3">
              <span class="flex"
                >Sat
                <Text
                  weight="semibold"
                  color="gray-900"
                  class="items-center justify-center ml-1"
                  content="15"
              /></span>
            </div>
            <div class="flex items-center justify-center py-3">
              <span class="flex"
                >Sun
                <Text
                  weight="semibold"
                  color="gray-900"
                  class="items-center justify-center ml-1"
                  content="16"
              /></span>
            </div>
          </div>
        </div>
        <div class="flex flex-auto">
          <div
            class="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100"
          />
          <div class="grid flex-auto grid-cols-1 grid-rows-1">
            <!-- Horizontal lines -->
            <div
              class="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
              style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))"
            >
              <div ref="containerOffset" class="row-end-1 h-7" />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="12AM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="1AM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="2AM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="3AM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="4AM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="5AM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="6AM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="7AM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="8AM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="9AM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="10AM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="11AM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="12PM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="1PM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="2PM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="3PM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="4PM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="5PM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="6PM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="7PM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="8PM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="9PM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="10PM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
              <div>
                <Text
                  size="xs"
                  color="gray-400"
                  content="11PM"
                  class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
              <div />
            </div>

            <!-- Vertical lines -->
            <div
              class="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7"
            >
              <div class="col-start-1 row-span-full" />
              <div class="col-start-2 row-span-full" />
              <div class="col-start-3 row-span-full" />
              <div class="col-start-4 row-span-full" />
              <div class="col-start-5 row-span-full" />
              <div class="col-start-6 row-span-full" />
              <div class="col-start-7 row-span-full" />
              <div class="col-start-8 row-span-full w-8" />
            </div>

            <!-- Events -->
            <ol
              class="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
              style="
                grid-template-rows: 1.75rem repeat(288, minmax(0, 1fr)) auto;
              "
            >
              <li
                class="relative mt-px flex sm:col-start-3"
                style="grid-row: 74 / span 12"
              >
                <a
                  href="#"
                  class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
                >
                  <Text
                    size="xs"
                    weight="semibold"
                    color="blue-700"
                    content="Breakfast"
                    class="order-1"
                  />
                  <Text
                    size="xs"
                    color="blue-500"
                    content="6:00 AM"
                    class="group-hover:text-blue-700"
                  />
                </a>
              </li>
              <li
                class="relative mt-px flex sm:col-start-3"
                style="grid-row: 92 / span 30"
              >
                <a
                  href="#"
                  class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
                >
                  <Text
                    size="xs"
                    weight="semibold"
                    color="pink-700"
                    content="Flight to Paris"
                    class="order-1"
                  />
                  <Text
                    size="xs"
                    color="pink-500"
                    content="John F. Kennedy International Airport"
                    class="order-1 group-hover:text-pink-700"
                  />
                  <Text
                    size="xs"
                    color="pink-500"
                    content="7:30 AM"
                    class="group-hover:text-pink-700"
                  />
                </a>
              </li>
              <li
                class="relative mt-px hidden sm:col-start-6 sm:flex"
                style="grid-row: 122 / span 24"
              >
                <a
                  href="#"
                  class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-primary-50 p-2 text-xs leading-5 hover:bg-primary-100"
                >
                  <Text
                    size="xs"
                    weight="semibold"
                    color="primary-700"
                    content="Flight to Paris"
                    class="order-1"
                  />
                  <Text
                    size="xs"
                    color="primary-500"
                    content="John F. Kennedy International Airport"
                    class="order-1 group-hover:text-primary-700"
                  />
                  <Text
                    size="xs"
                    color="primary-500"
                    content="7:30 AM"
                    class="group-hover:text-primary-700"
                  />
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Button from "../../../atoms/Button/Button.vue";
import Text from "../../../atoms/Text/Text.vue";
import Dropdown from "../../../molecules/Dropdown/Dropdown/Dropdown.vue";
import Link from "../../../atoms/Link/Link.vue";
/**
 * - Use it to show a week view
 */
export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Icon,
    Button,
    Text,
    Dropdown,
    Link,
  },
  props: {
    /**
     * use it for dropdown options
     */
    options: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const container = ref(null);
    const containerNav = ref(null);
    const containerOffset = ref(null);

    onMounted(() => {
      // Set the container scroll position based on the current time.
      const currentMinute = new Date().getHours() * 60;
      container.value.scrollTop =
        ((container.value.scrollHeight -
          containerNav.value.offsetHeight -
          containerOffset.value.offsetHeight) *
          currentMinute) /
        1440;
    });

    return {
      container,
      containerNav,
      containerOffset,
    };
  },
};
</script>
