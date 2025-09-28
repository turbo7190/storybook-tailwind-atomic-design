<template>
  <div class="lg:flex lg:h-full lg:flex-col">
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
    <div
      class="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col"
    >
      <div
        class="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none"
      >
        <div v-for="(week, i) in weeks" :key="i" class="bg-white py-2">
          {{ week }}
        </div>
      </div>
      <div
        class="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto"
      >
        <div
          class="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px"
        >
          <div
            v-for="day in days"
            :key="day.date"
            :class="[
              day.isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-500',
              'relative py-2 px-3',
            ]"
          >
            <time
              :datetime="day.date"
              :class="
                day.isToday
                  ? 'flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 font-semibold text-white'
                  : undefined
              "
            >
              {{ day.date.split("-").pop().replace(/^0/, "") }}
            </time>
            <ol v-if="day.events.length > 0" class="mt-2">
              <li v-for="event in day.events.slice(0, 2)" :key="event.id">
                <a :href="event.href" class="group flex">
                  <Text
                    weight="medium"
                    color="gray-900"
                    class="flex-auto truncate group-hover:text-primary-600"
                    :content="event.name"
                  />
                </a>
              </li>
              <li v-if="day.events.length > 2" class="text-gray-500">
                + {{ day.events.length - 2 }} more
              </li>
            </ol>
          </div>
        </div>
        <div
          class="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden"
        >
          <button
            v-for="day in days"
            :key="day.date"
            type="button"
            :class="[
              day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
              (day.isSelected || day.isToday) && 'font-semibold',
              day.isSelected && 'text-white',
              !day.isSelected && day.isToday && 'text-primary-600',
              !day.isSelected &&
                day.isCurrentMonth &&
                !day.isToday &&
                'text-gray-900',
              !day.isSelected &&
                !day.isCurrentMonth &&
                !day.isToday &&
                'text-gray-500',
              'flex h-14 flex-col py-2 px-3 hover:bg-gray-100 focus:z-10',
            ]"
          >
            <time
              :datetime="day.date"
              :class="[
                day.isSelected &&
                  'flex h-6 w-6 items-center justify-center rounded-full',
                day.isSelected && day.isToday && 'bg-primary-600',
                day.isSelected && !day.isToday && 'bg-gray-900',
                'ml-auto',
              ]"
            >
              {{ day.date.split("-").pop().replace(/^0/, "") }}
            </time>
            <p class="sr-only">{{ day.events.length }} events</p>
            <div
              v-if="day.events.length > 0"
              class="-mx-0.5 mt-auto flex flex-wrap-reverse"
            >
              <div
                v-for="event in day.events"
                :key="event.id"
                class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="selectedDay.events.length > 0"
      class="py-10 px-4 sm:px-6 lg:hidden"
    >
      <ol
        class="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5"
      >
        <li
          v-for="event in selectedDay.events"
          :key="event.id"
          class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50"
        >
          <div class="flex-auto">
            <p class="font-semibold text-gray-900">{{ event.name }}</p>
            <time
              :datetime="event.datetime"
              class="mt-2 flex items-center text-gray-700"
            >
              <Icon name="ClockIcon" size="5" color="gray-400" />
              {{ event.time }}
            </time>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import Dropdown from "../../../molecules/Dropdown/Dropdown/Dropdown.vue";
import Button from "../../../atoms/Button/Button.vue";
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Link from "../../../atoms/Link/Link.vue";
/**
 * - Use it to show a month view
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
  data() {
    return {
      selectedDay: this.days.find((day) => day.isSelected),
      weeks: ["M", "T", "W", "T", "F", "S", "S"],
    };
  },
};
</script>
