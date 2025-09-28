<template>
  <div>
    <header
      class="relative z-20 flex flex-none items-center justify-between border-b border-gray-200 py-4 px-6"
    >
      <div>
        <Text
          size="lg"
          weight="semibold"
          color="gray-900"
          class="leading-6"
          content="2022"
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
    <div class="bg-white">
      <div
        class="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-16 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-3 xl:px-8 2xl:grid-cols-4"
      >
        <section v-for="month in months" :key="month.name" class="text-center">
          <Text weight="semibold" color="gray-900" :content="month.name" />
          <div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
            <div v-for="(week, i) in weeks" :key="i" class="bg-white py-2">
              {{ week }}
            </div>
          </div>
          <div
            class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200"
          >
            <button
              v-for="(day, dayIdx) in month.days"
              :key="day.date"
              type="button"
              :class="[
                day.isCurrentMonth
                  ? 'bg-white text-gray-900'
                  : 'bg-gray-50 text-gray-400',
                dayIdx === 0 && 'rounded-tl-lg',
                dayIdx === 6 && 'rounded-tr-lg',
                dayIdx === month.days.length - 7 && 'rounded-bl-lg',
                dayIdx === month.days.length - 1 && 'rounded-br-lg',
                'py-1.5 hover:bg-gray-100 focus:z-10',
              ]"
            >
              <time
                :datetime="day.date"
                :class="[
                  day.isToday && 'bg-primary-600 font-semibold text-white',
                  'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                ]"
              >
                {{ day.date.split("-").pop().replace(/^0/, "") }}
              </time>
            </button>
          </div>
        </section>
      </div>
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
 * - Use it to show year view
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
     * use it to show months
     */
    months: {
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
      weeks: ["M", "T", "W", "T", "F", "S", "S"],
    };
  },
};
</script>
