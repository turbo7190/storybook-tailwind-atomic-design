<template>
  <div class="min-h-full">
    <!-- Navbar -->
    <SimpleWithMenuButtonOnLeft />

    <!-- Page heading -->
    <header class="bg-gray-50 py-8">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between"
      >
        <WithMetaAction :is-meta="true" :is-breadcrumb="true" />
      </div>
    </header>

    <main class="pt-8 pb-16">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="px-4 sm:px-0">
          <h2 class="text-lg font-medium text-gray-900">Candidates</h2>

          <!-- Tabs -->
          <TabsWithUnderlineAndBadges :tabs="tabs" />
        </div>

        <!-- Stacked list -->
        <TwoColumnWithAvatar />

        <!-- Pagination -->
        <CenteredPageNumbers />
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
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  EnvelopeIcon,
  PencilIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/solid";
import { BellIcon, Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import SimpleWithMenuButtonOnLeft from "../../../../components/organisms/Navbars/SimpleWithMenuButtonOnLeft/SimpleWithMenuButtonOnLeft.vue";
import WithMetaAction from "../../../../components/organisms/PageHeadings/WithActionsAndBreadcrumbs/WithActionsAndBreadcrumbs.vue";
import TabsWithUnderlineAndBadges from "../../../../components/molecules/Tabs/TabsWithUnderlineAndBadges/TabsWithUnderlineAndBadges.vue";
import TwoColumnWithAvatar from "../../../../components/organisms/StackedLists/TwoColumnWithAvatar/TwoColumnWithAvatar.vue";
import CenteredPageNumbers from "../../../../components/organisms/Paginations/CenteredPageNumbers/CenteredPageNumbers.vue";

export default {
  components: {
    CenteredPageNumbers,
    TwoColumnWithAvatar,
    TabsWithUnderlineAndBadges,
    SimpleWithMenuButtonOnLeft,
    WithMetaAction,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ArrowLeftIcon,
    ArrowRightIcon,
    BellIcon,
    BriefcaseIcon,
    CalendarIcon,
    CheckCircleIcon,
    CheckIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    CurrencyDollarIcon,
    LinkIcon,
    MapPinIcon,
    EnvelopeIcon,
    Bars3Icon,
    PencilIcon,
    MagnifyingGlassIcon,
    XMarkIcon,
  },
  props: [
    "user",
    "navigation",
    "userNavigation",
    "tabs",
    "candidates",
    "publishingOptions",
  ],
  data() {
    return {
      selected: ref(this.publishingOptions[0]),
    };
  },
};
</script>
