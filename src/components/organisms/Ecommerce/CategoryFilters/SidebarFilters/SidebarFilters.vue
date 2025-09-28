<template>
  <div class="h-screen overflow-scroll bg-white">
    <div>
      <!-- Mobile filter dialog -->
      <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog
          as="div"
          class="fixed inset-0 z-40 flex lg:hidden"
          @close="mobileFiltersOpen = false"
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
            <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <div
              class="relative flex flex-col w-full h-full max-w-xs py-4 pb-6 ml-auto overflow-y-auto bg-white shadow-xl"
            >
              <div class="flex items-center justify-between px-4">
                <Text
                  size="lg"
                  weight="medium"
                  color="gray-900"
                  content="Filters"
                />
                <Button
                  :leading="true"
                  type="button"
                  customClass="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 hover:text-gray-500"
                  @click="mobileFiltersOpen = false"
                >
                  <Text customClass="sr-only" content="Close menu" />
                  <Icon
                    name="XMarkIcon"
                    :size="6"
                    :ariaHidden="true"
                    color="gray-400"
                    hoverTextColor="gray-500"
                  />
                </Button>
              </div>

              <!-- Filters -->
              <form class="mt-4">
                <Disclosure
                  as="div"
                  v-for="section in filters"
                  :key="section.name"
                  class="pt-4 pb-4 border-t border-gray-200"
                  v-slot="{ open }"
                >
                  <fieldset>
                    <legend class="w-full px-2">
                      <DisclosureButton
                        class="flex items-center justify-between w-full p-2 text-gray-400 hover:text-gray-500"
                      >
                        <Text
                          size="sm"
                          weight="medium"
                          color="gray-900"
                          :content="section.name"
                        />
                        <div class="flex items-center ml-6 h-7">
                          <Icon
                            name="ChevronDownIcon"
                            color="gray-400"
                            hoverTextColor="gray-500"
                            :customClass="`transform ${
                              open ? '-rotate-180' : 'rotate-0'
                            }`"
                            :size="5"
                            ariaHidden="true"
                          />
                        </div>
                      </DisclosureButton>
                    </legend>
                    <DisclosurePanel class="px-4 pt-4 pb-2">
                      <div class="space-y-6">
                        <div
                          v-for="(option, optionIdx) in section.options"
                          :key="option.value"
                          class="flex items-center"
                        >
                          <CheckBox
                            :title="option.label"
                            :id="`${section.id}-${optionIdx}`"
                            :name="section.id"
                            :value="option.value"
                          />
                        </div>
                      </div>
                    </DisclosurePanel>
                  </fieldset>
                </Disclosure>
              </form>
            </div>
          </TransitionChild>
        </Dialog>
      </TransitionRoot>

      <main
        class="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <div class="pb-10 border-b border-gray-200">
          <div>
            <Text
              customClass="traking-tight"
              size="4xl"
              weight="extrabold"
              color="gray-900"
              content="New Arrivals"
            />
          </div>
          <Text
            customClass="mt-4"
            size="base"
            color="gray-500"
            content="Checkout out the latest release of Basic Tees, new and improved with four openings!"
          />
        </div>

        <div class="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside>
            <Text customClass="sr-only" content="Filters" />
            <Button
              :leading="true"
              type="button"
              customClass="inline-flex items-center lg:hidden"
              @click="mobileFiltersOpen = true"
            >
              <Text
                size="sm"
                weight="medium"
                color="gray-700"
                content="Filters"
              />
              <Icon
                name="PlusIcon"
                :size="5"
                ariaHidden="true"
                color="gray-400"
                hoverTextColor="gray-500"
              />
            </Button>

            <div class="hidden lg:block">
              <form class="space-y-10 divide-y divide-gray-200">
                <div
                  v-for="(section, sectionIdx) in filters"
                  :key="section.name"
                  :class="sectionIdx === 0 ? null : 'pt-10'"
                >
                  <fieldset>
                    <Text
                      size="sm"
                      weight="medium"
                      customClass="block"
                      color="gray-900"
                      :content="section.name"
                    />
                    <div class="pt-6 space-y-3">
                      <div
                        v-for="(option, optionIdx) in section.options"
                        :key="option.value"
                        class="flex items-center"
                      >
                        <CheckBox
                          :title="option.label"
                          :id="`${section.id}-${optionIdx}-mobile`"
                          :name="section.id"
                          :value="option.value"
                        />
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </aside>

          <!-- Product grid -->
          <div class="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
            <!-- Replace with your content -->
            <div
              class="border-4 border-gray-200 border-dashed rounded-lg h-96 lg:h-full"
            />
            <!-- /End replace -->
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
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import Text from "../../../../atoms/Text/Text.vue";
import Button from "../../../../atoms/Button/Button.vue";
import Icon from "../../../../atoms/Icons/Icons.vue";
import CheckBox from "../../../../molecules/Checkboxes/SimpleWithDescription/SimpleWithDescription.vue";

export default {
  components: {
    Dialog,
    DialogOverlay,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    TransitionChild,
    TransitionRoot,
    Text,
    Button,
    Icon,
    CheckBox,
  },
  props: {
    filters: {
      type: Array,
      default: () => [],
    },
    leading: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const mobileFiltersOpen = ref(false);

    return {
      mobileFiltersOpen,
    };
  },
};
</script>
