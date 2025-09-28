<template>
  <div>
    <div class="flex items-center">
      <Text
        weight="semibold"
        color="gray-900"
        class="flex-auto"
        :content="month"
      />
      <button
        type="button"
        class="-my-1.5 flex flex-none items-center justify-center p-1.5"
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
        class="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5"
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
      class="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500"
    >
      <div v-for="(week, i) in weeks" :key="i">{{ week }}</div>
    </div>
    <div class="mt-2 grid grid-cols-7 text-sm">
      <div
        v-for="(day, dayIdx) in days"
        :key="day.date"
        :class="[dayIdx > 6 && 'border-t border-gray-200', 'py-2']"
      >
        <button
          type="button"
          :class="[
            day.isSelected && 'text-white',
            !day.isSelected && day.isToday && 'text-primary-600',
            !day.isSelected &&
              !day.isToday &&
              day.isCurrentMonth &&
              'text-gray-900',
            !day.isSelected &&
              !day.isToday &&
              !day.isCurrentMonth &&
              'text-gray-400',
            day.isSelected && day.isToday && 'bg-primary-600',
            day.isSelected && !day.isToday && 'bg-gray-900',
            !day.isSelected && 'hover:bg-gray-200',
            (day.isSelected || day.isToday) && 'font-semibold',
            'mx-auto flex h-8 w-8 items-center justify-center rounded-full',
          ]"
        >
          <time :datetime="day.date">{{
            day.date.split("-").pop().replace(/^0/, "")
          }}</time>
        </button>
      </div>
    </div>
    <section class="mt-12">
      <Text
        weight="semibold"
        color="gray-900"
        content="Schedule for January 21, 2022"
      />
      <ol class="mt-4 space-y-1 text-sm leading-6 text-gray-500">
        <li
          v-for="meeting in meetings"
          :key="meeting.id"
          class="group flex items-center space-x-4 rounded-xl py-2 px-4 focus-within:bg-gray-100 hover:bg-gray-100"
        >
          <AvatarText
            :src="meeting.imageUrl"
            :username="meeting.name"
            :title="meeting.name"
            :subtitle="`${meeting.start} - ${meeting.end}`"
            :custom-class="'flex flex-1'"
          />
          <Menu
            as="div"
            class="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
          >
            <div>
              <MenuButton
                class="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600"
              >
                <Icon
                  name="EllipsisVerticalIcon"
                  size="6"
                  color="gray-500"
                  class="hover:text-gray-600"
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
                class="focus:outline-none absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Edit</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Cancel</a
                    >
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import AvatarText from "../../../molecules/Avatar/AvatarText.vue";
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
/**
 * - Use it to show a borderless stacked calendar
 */
export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    AvatarText,
    Text,
    Icon,
  },
  data() {
    return {
      weeks: ["M", "T", "W", "T", "F", "S", "S"],
    };
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
    month: {
      type: String,
      default: "",
    },
    meetings: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
