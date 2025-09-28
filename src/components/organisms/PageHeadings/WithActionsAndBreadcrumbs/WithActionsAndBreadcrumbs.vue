<template>
  <div>
    <div v-if="breadcrumbs && breadcrumbs.length > 0">
      <nav class="sm:hidden" aria-label="Back">
        <a
          href="#"
          class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <Icon
            name="ChevronLeftIcon"
            size="5"
            color="gray-400"
            class="flex-shrink-0 -ml-1 mr-1"
          />
          Back
        </a>
      </nav>
      <breadcrumb iconName="HomeIcon" :items="breadcrumbs" />
    </div>
    <div class="mt-2 md:flex md:items-center md:justify-between">
      <div class="flex-1 min-w-0">
        <Text
          size="2xl"
          weight="bold"
          color="gray-900"
          customClass="sm:text-3xl sm:truncate"
          :content="title"
        />
        <div
          class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6"
          v-if="meta && meta.length > 0"
        >
          <div
            v-for="(item, i) in meta"
            :key="i"
            class="mt-2 flex items-center text-sm text-gray-500"
          >
            <Icon :name="item.icon" size="5" color="gray-400" class="mr-1.5" />
            {{ item.label }}
          </div>
        </div>
      </div>
      <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4 space-x-2">
        <Button
          v-for="(button, i) in buttons"
          :key="i"
          :content="button.label"
          :variant="button.type"
          :onClick="button.onClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  BriefcaseIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarIcon,
} from "@heroicons/vue/24/solid";
import White from "../../../molecules/Button/White/White.vue";
import Primary from "../../../molecules/Button/Primary/Primary.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Breadcrumb from "../../../molecules/Breadcrumbs/SimpleWithChevrons/SimpleWithChevrons.vue";
import Text from "../../../atoms/Text/Text.vue";
import Button from "../../../atoms/Button/Button.vue";
/**
 * - Use it to show page header with breadcrumbs, title, meta, and action buttons.
 */
export default {
  components: {
    Primary,
    White,
    ChevronLeftIcon,
    ChevronRightIcon,
    BriefcaseIcon,
    MapPinIcon,
    CurrencyDollarIcon,
    CalendarIcon,
    Icon,
    Breadcrumb,
    Text,
    Button,
  },
  props: {
    /**
     * Use it for breadcrumb
     */
    breadcrumbs: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it for meta
     */
    meta: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it for header title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Use it for buttons
     */
    buttons: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
