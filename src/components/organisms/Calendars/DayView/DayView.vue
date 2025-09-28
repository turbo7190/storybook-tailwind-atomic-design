<template>
  <div class="flex h-full flex-col h-screen overflow-scroll">
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
        <Text size="sm" color="gray-500" class="mt-1" content="Saturday" />
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
            <Dropdown label="Day view" custom-class="ml-0" :options="options" />
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
    <div class="flex flex-auto overflow-hidden bg-white">
      <div ref="container" class="flex flex-auto flex-col overflow-auto">
        <div
          ref="containerNav"
          class="sticky top-0 z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 shadow ring-1 ring-black ring-opacity-5 md:hidden"
        >
          <button type="button" class="flex flex-col items-center pt-3 pb-1.5">
            <span>W</span>
            <Text
              size="base"
              weight="semibold"
              color="gray-900"
              content="19"
              class="mt-3 flex h-8 w-8 items-center justify-center rounded-full"
            />
          </button>
          <button type="button" class="flex flex-col items-center pt-3 pb-1.5">
            <span>T</span>
            <Text
              size="base"
              weight="semibold"
              color="gray-900"
              content="20"
              class="mt-3 flex h-8 w-8 items-center justify-center rounded-full"
            />
          </button>
          <button type="button" class="flex flex-col items-center pt-3 pb-1.5">
            <span>F</span>
            <Text
              size="base"
              weight="semibold"
              color="gray-900"
              content="21"
              class="mt-3 flex h-8 w-8 items-center justify-center rounded-full"
            />
          </button>
          <button type="button" class="flex flex-col items-center pt-3 pb-1.5">
            <span>S</span>
            <Text
              size="base"
              weight="semibold"
              color="gray-900"
              content="22"
              class="mt-3 flex h-8 w-8 items-center justify-center rounded-full"
            />
          </button>
          <button type="button" class="flex flex-col items-center pt-3 pb-1.5">
            <span>S</span>
            <Text
              size="base"
              weight="semibold"
              color="gray-900"
              content="23"
              class="mt-3 flex h-8 w-8 items-center justify-center rounded-full"
            />
          </button>
          <button type="button" class="flex flex-col items-center pt-3 pb-1.5">
            <span>M</span>
            <Text
              size="base"
              weight="semibold"
              color="gray-900"
              content="24"
              class="mt-3 flex h-8 w-8 items-center justify-center rounded-full"
            />
          </button>
          <button type="button" class="flex flex-col items-center pt-3 pb-1.5">
            <span>T</span>
            <Text
              size="base"
              weight="semibold"
              color="gray-900"
              content="25"
              class="mt-3 flex h-8 w-8 items-center justify-center rounded-full"
            />
          </button>
        </div>
        <div class="flex w-full flex-auto">
          <div class="w-14 flex-none bg-white ring-1 ring-gray-100" />
          <div class="grid flex-auto grid-cols-1 grid-rows-1">
            <!-- Horizontal lines -->
            <div
              class="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
              style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))"
            >
              <div ref="containerOffset" class="row-end-1 h-7"></div>
              <div v-for="time in times" :key="time">
                <Text
                  size="xs"
                  color="gray-400"
                  :content="time"
                  class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right leading-5"
                />
              </div>
            </div>

            <!-- Events -->
            <ol
              class="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
              style="
                grid-template-rows: 1.75rem repeat(288, minmax(0, 1fr)) auto;
              "
            >
              <li class="relative mt-px flex" style="grid-row: 74 / span 12">
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
              <li class="relative mt-px flex" style="grid-row: 92 / span 30">
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
                    color="blue-500"
                    content="7:30 AM"
                    class="group-hover:text-pink-700"
                  />
                </a>
              </li>
              <li class="relative mt-px flex" style="grid-row: 134 / span 18">
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
      <div
        class="hidden w-1/2 max-w-md flex-none border-l border-gray-100 py-10 px-8 md:block"
      >
        <div class="flex items-center text-center text-gray-900">
          <button
            type="button"
            class="-m-1.5 flex flex-none items-center justify-center p-1.5"
          >
            <Icon
              name="ChevronLeftIcon"
              size="5"
              color="gray-400"
              class="hover:text-gray-500"
            />
          </button>
          <Text weight="semibold" color="gray-900" content="January 2022" />
          <button
            type="button"
            class="-m-1.5 flex flex-none items-center justify-center p-1.5"
          >
            <Icon
              name="ChevronRightIcon"
              size="5"
              color="gray-400"
              class="hover:text-gray-500"
            />
          </button>
        </div>
        <div
          class="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-500"
        >
          <div v-for="(week, i) in weeks" :key="i">{{ week }}</div>
        </div>
        <div
          class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200"
        >
          <button
            v-for="(day, dayIdx) in days"
            :key="day.date"
            type="button"
            :class="[
              'py-1.5 hover:bg-gray-100 focus:z-10',
              day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
              (day.isSelected || day.isToday) && 'font-semibold',
              day.isSelected && 'text-white',
              !day.isSelected &&
                day.isCurrentMonth &&
                !day.isToday &&
                'text-gray-900',
              !day.isSelected &&
                !day.isCurrentMonth &&
                !day.isToday &&
                'text-gray-400',
              day.isToday && !day.isSelected && 'text-primary-600',
              dayIdx === 0 && 'rounded-tl-lg',
              dayIdx === 6 && 'rounded-tr-lg',
              dayIdx === days.length - 7 && 'rounded-bl-lg',
              dayIdx === days.length - 1 && 'rounded-br-lg',
            ]"
          >
            <time
              :datetime="day.date"
              :class="[
                'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                day.isSelected && day.isToday && 'bg-primary-600',
                day.isSelected && !day.isToday && 'bg-gray-900',
              ]"
            >
              {{ day.date.split("-").pop().replace(/^0/, "") }}
            </time>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import Dropdown from "../../../molecules/Dropdown/Dropdown/Dropdown.vue";
import Button from "../../../atoms/Button/Button.vue";
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Link from "../../../atoms/Link/Link.vue";

/**
 * - Use it to show day view
 */
export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Dropdown,
    Button,
    Text,
    Icon,
    Link,
  },
  props: {
    /**
     * use it to show days
     */
    days: {
      type: Array,
      default: () => [],
    },
    /**
     * use it to show options
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
      times: [
        "12AM",
        "1AM",
        "2AM",
        "3AM",
        "4AM",
        "5AM",
        "6AM",
        "7AM",
        "8AM",
        "9AM",
        "10AM",
        "11AM",
        "12PM",
        "1PM",
        "2PM",
        "3PM",
        "4PM",
        "5PM",
        "6PM",
        "7PM",
        "8PM",
        "9PM",
        "10PM",
        "11PM",
      ],
      weeks: ["M", "T", "W", "T", "F", "S", "S"],
      container,
      containerNav,
      containerOffset,
    };
  },
};
</script>
