<template>
  <div class="bg-gray-50">
    <div class="relative bg-primary-600">
      <!-- Overlapping background -->
      <div
        aria-hidden="true"
        class="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block"
      />
      <div
        class="
          relative
          max-w-2xl
          mx-auto
          pt-16
          px-4
          text-center
          sm:pt-32
          sm:px-6
          lg:max-w-7xl
          lg:px-8
        "
      >
        <Text
          size="4xl"
          weight="extrabold"
          color="white"
          class="sm:text-6xl block lg:inline tracking-tight"
          :content="title"
        />
        <Text
          size="xl"
          color="primary-100"
          class="mt-4"
          :content="description"
        />
      </div>
      <!-- Toggle -->
      <div class="relative mt-12 flex justify-center sm:mt-16">
        <div class="bg-primary-700 p-0.5 rounded-lg flex space-x-1">
          <Button
            v-for="(tab, i) in tabs"
            :key="i"
            :content="tab.label"
            :onClick="tab.action"
            :class="[
              'w-1/2 whitespace-nowrap text-black shadow-sm px-6',
              selectedTab.label !== tab.label
                ? 'bg-opacity-0 text-white border'
                : 'bg-white text-primary-700',
            ]"
          />
        </div>
      </div>

      <!-- Cards -->
      <div
        class="
          relative
          mt-8
          max-w-2xl
          mx-auto
          px-4
          pb-8
          sm:mt-12
          sm:px-6
          lg:max-w-7xl
          lg:px-8
          lg:pb-0
        "
      >
        <!-- Decorative background -->
        <div
          aria-hidden="true"
          class="
            hidden
            absolute
            top-4
            bottom-6
            left-8
            right-8
            inset-0
            bg-primary-700
            rounded-tl-lg rounded-tr-lg
            lg:block
          "
        />
        <div class="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
          <div
            v-for="plan in plans"
            :key="plan.title"
            :class="[
              plan.featured
                ? 'bg-white ring-2 ring-primary-700 shadow-md'
                : 'bg-primary-700 lg:bg-transparent',
              'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12',
            ]"
          >
            <div>
              <Text
                size="sm"
                weight="semibold"
                :color="plan.featured ? 'primary-600' : 'white'"
                class="uppercase tracking-wide"
                :content="plan.title"
              />
              <div
                class="
                  flex flex-col
                  items-start
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  lg:flex-col
                  lg:items-start
                "
              >
                <div class="mt-3 flex items-center">
                  <Text
                    size="4xl"
                    weight="extrabold"
                    :color="plan.featured ? 'primary-600' : 'white'"
                    class="tracking-tight"
                    :content="'$' + plan.priceMonthly"
                  />
                  <div class="ml-4">
                    <Text
                      size="sm"
                      :color="plan.featured ? 'gray-700' : 'white'"
                      content="USD / mo"
                    />
                    <Text
                      size="sm"
                      :color="plan.featured ? 'gray-500' : 'primary-200'"
                      :content="'Billed yearly ($' + plan.priceYearly + ')'"
                    />
                  </div>
                </div>
                <Button
                  :content="plan.title"
                  :variant="plan.featured ? 'primary' : 'secondary'"
                  :class="['w-full mt-6', !plan.featured && 'text-primary-600']"
                />
              </div>
            </div>
            <ul
              role="list"
              :class="[
                plan.featured
                  ? 'border-gray-200 divide-gray-200'
                  : 'border-primary-500 divide-primary-500 divide-opacity-75',
                'mt-7 border-t divide-y lg:border-t-0',
              ]"
            >
              <li
                v-for="mainFeature in plan.mainFeatures"
                :key="mainFeature.id"
                class="py-3 flex items-center"
              >
                <Icon
                  name="CheckIcon"
                  size="5"
                  :color="plan.featured ? 'primary-500' : 'primary-200'"
                />
                <Text
                  size="sm"
                  weight="medium"
                  :color="plan.featured ? 'gray-600' : 'white'"
                  class="ml-3"
                  :content="mainFeature.value"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature comparison (up to lg) -->
    <section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
      <div class="max-w-2xl mx-auto py-16 px-4 space-y-16 sm:px-6">
        <div
          v-for="(plan, mobilePlanIndex) in plans"
          :key="mobilePlanIndex"
          class="border-t border-gray-200"
        >
          <div
            :class="[
              plan.featured ? 'border-primary-600' : 'border-transparent',
              '-mt-px pt-6 border-t-2 sm:w-1/2',
            ]"
          >
            <Text
              size="sm"
              weight="bold"
              :color="plan.featured ? 'primary-600' : 'gray-900'"
              :content="plan.title"
            />
            <Text
              size="sm"
              color="gray-500"
              class="mt-2"
              :content="plan.description"
            />
          </div>
          <Text
            size="sm"
            weight="bold"
            color="gray-900"
            class="mt-10"
            content="Catered for business"
          />
          <div class="mt-6 relative">
            <div
              aria-hidden="true"
              class="hidden absolute inset-0 pointer-events-none sm:block"
            >
              <div
                :class="[
                  plan.featured ? 'shadow-md' : 'shadow',
                  'absolute right-0 w-1/2 h-full bg-white rounded-lg',
                ]"
              />
            </div>
            <div
              :class="[
                plan.featured
                  ? 'ring-2 ring-primary-600 shadow-md'
                  : 'ring-1 ring-black ring-opacity-5 shadow',
                'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none',
              ]"
            >
              <dl class="divide-y divide-gray-200">
                <div
                  v-for="feature in features"
                  :key="feature.title"
                  class="
                    py-3
                    flex
                    items-center
                    justify-between
                    sm:grid sm:grid-cols-2
                  "
                >
                  <dt>
                    <Text
                      size="sm"
                      weight="medium"
                      color="gray-600"
                      class="pr-4"
                      :content="feature.title"
                    />
                  </dt>
                  <dd
                    class="
                      flex
                      items-center
                      justify-end
                      sm:px-4
                      sm:justify-center
                    "
                  >
                    <Text
                      v-if="
                        typeof feature.tiers[mobilePlanIndex].value === 'string'
                      "
                      size="sm"
                      weight="medium"
                      :color="
                        feature.tiers[mobilePlanIndex].featured
                          ? 'primary-600'
                          : 'gray-900'
                      "
                      :content="feature.tiers[mobilePlanIndex].value"
                    />
                    <template v-else>
                      <Icon
                        name="CheckIcon"
                        v-if="feature.tiers[mobilePlanIndex].value === true"
                        size="5"
                        color="primary-600"
                        class="mx-auto"
                      />
                      <Icon
                        name="XMarkIcon"
                        v-else
                        size="5"
                        color="gray-400"
                        class="mx-auto"
                      />
                    </template>
                  </dd>
                </div>
              </dl>
            </div>
            <div
              aria-hidden="true"
              class="hidden absolute inset-0 pointer-events-none sm:block"
            >
              <div
                :class="[
                  plan.featured
                    ? 'ring-2 ring-primary-600'
                    : 'ring-1 ring-black ring-opacity-5',
                  'absolute right-0 w-1/2 h-full rounded-lg',
                ]"
              />
            </div>
          </div>
          <Text
            size="sm"
            weight="bold"
            color="gray-900"
            class="mt-10"
            content="Other Perks"
          />
          <div class="mt-6 relative">
            <div
              aria-hidden="true"
              class="hidden absolute inset-0 pointer-events-none sm:block"
            >
              <div
                :class="[
                  plan.featured ? 'shadow-md' : 'shadow',
                  'absolute right-0 w-1/2 h-full bg-white rounded-lg',
                ]"
              />
            </div>
            <div
              :class="[
                plan.featured
                  ? 'ring-2 ring-primary-600 shadow-md'
                  : 'ring-1 ring-black ring-opacity-5 shadow',
                'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none',
              ]"
            >
              <dl class="divide-y divide-gray-200">
                <div
                  v-for="perk in perks"
                  :key="perk.title"
                  class="py-3 flex justify-between sm:grid sm:grid-cols-2"
                >
                  <dt>
                    <Text
                      size="sm"
                      weight="medium"
                      color="gray-600"
                      class="pr-4"
                      :content="perk.title"
                    />
                  </dt>
                  <dd
                    class="
                      flex
                      items-center
                      justify-end
                      sm:px-4
                      sm:justify-center
                    "
                  >
                    <Text
                      v-if="
                        typeof perk.tiers[mobilePlanIndex].value === 'string'
                      "
                      size="sm"
                      weight="medium"
                      :color="
                        perk.tiers[mobilePlanIndex].featured
                          ? 'primary-600'
                          : 'gray-900'
                      "
                      :content="feature.tiers[mobilePlanIndex].value"
                    />
                    <template v-else>
                      <Icon
                        name="CheckIcon"
                        v-if="perk.tiers[mobilePlanIndex].value === true"
                        size="5"
                        color="primary-600"
                        class="mx-auto"
                      />
                      <Icon
                        name="XMarkIcon"
                        v-else
                        size="5"
                        color="gray-400"
                        class="mx-auto"
                      />
                    </template>
                  </dd>
                </div>
              </dl>
            </div>

            <!-- Fake card border -->
            <div
              aria-hidden="true"
              class="hidden absolute inset-0 pointer-events-none sm:block"
            >
              <div
                :class="[
                  plan.featured
                    ? 'ring-2 ring-primary-600'
                    : 'ring-1 ring-black ring-opacity-5',
                  'absolute right-0 w-1/2 h-full rounded-lg',
                ]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature comparison (lg+) -->
    <section aria-labelledby="comparison-heading" class="hidden lg:block">
      <div class="max-w-7xl mx-auto py-24 px-8">
        <div class="w-full border-t border-gray-200 flex items-stretch">
          <div class="-mt-px w-1/4 py-6 pr-4 flex items-end">
            <Text
              size="sm"
              weight="bold"
              color="gray-900"
              class="mt-auto"
              content="Catered for business"
            />
          </div>
          <div
            v-for="(plan, planIdx) in plans"
            :key="plan.title"
            aria-hidden="true"
            :class="[
              planIdx === plans.length - 1 ? '' : 'pr-4',
              '-mt-px pl-4 w-1/4',
            ]"
          >
            <div
              :class="[
                plan.featured ? 'border-primary-600' : 'border-transparent',
                'py-6 border-t-2',
              ]"
            >
              <Text
                size="sm"
                weight="bold"
                :color="plan.featured ? 'primary-600' : 'gray-900'"
                :content="plan.title"
              />
              <Text
                size="sm"
                color="gray-500"
                class="mt-2"
                :content="plan.description"
              />
            </div>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute inset-0 flex items-stretch pointer-events-none"
            aria-hidden="true"
          >
            <div class="w-1/4 pr-4" />
            <div class="w-1/4 px-4">
              <div class="w-full h-full bg-white rounded-lg shadow" />
            </div>
            <div class="w-1/4 px-4">
              <div class="w-full h-full bg-white rounded-lg shadow-md" />
            </div>
            <div class="w-1/4 pl-4">
              <div class="w-full h-full bg-white rounded-lg shadow" />
            </div>
          </div>

          <table class="relative w-full">
            <thead>
              <tr class="text-left">
                <th scope="col"></th>
                <th v-for="plan in plans" :key="plan.title" scope="col"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="feature in features" :key="feature.title">
                <th scope="row" class="w-1/4 py-3 pr-4 text-left">
                  <Text
                    size="sm"
                    weight="medium"
                    color="gray-600"
                    :content="feature.title"
                  />
                </th>
                <td
                  v-for="(tier, tierIdx) in feature.tiers"
                  :key="tier.title"
                  :class="[
                    tierIdx === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                    'relative w-1/4 py-0 text-center',
                  ]"
                >
                  <span class="relative w-full h-full py-3">
                    <Text
                      v-if="typeof tier.value === 'string'"
                      size="sm"
                      weight="medium"
                      :color="tier.featured ? 'primary-600' : 'gray-900'"
                      :content="tier.value"
                    />
                    <template v-else>
                      <Icon
                        name="CheckIcon"
                        v-if="tier.value === true"
                        size="5"
                        color="primary-600"
                        class="mx-auto"
                      />
                      <Icon
                        name="XMarkIcon"
                        v-else
                        size="5"
                        color="gray-400"
                        class="mx-auto"
                      />
                    </template>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Fake card borders -->
          <div
            class="absolute inset-0 flex items-stretch pointer-events-none"
            aria-hidden="true"
          >
            <div class="w-1/4 pr-4" />
            <div class="w-1/4 px-4">
              <div
                class="
                  w-full
                  h-full
                  rounded-lg
                  ring-1 ring-black ring-opacity-5
                "
              />
            </div>
            <div class="w-1/4 px-4">
              <div
                class="
                  w-full
                  h-full
                  rounded-lg
                  ring-2 ring-primary-600 ring-opacity-100
                "
              />
            </div>
            <div class="w-1/4 pl-4">
              <div
                class="
                  w-full
                  h-full
                  rounded-lg
                  ring-1 ring-black ring-opacity-5
                "
              />
            </div>
          </div>
        </div>

        <Text
          size="sm"
          weight="bold"
          color="gray-900"
          class="mt-10"
          content="Other perks"
        />

        <div class="mt-6 relative">
          <!-- Fake card backgrounds -->
          <div
            class="absolute inset-0 flex items-stretch pointer-events-none"
            aria-hidden="true"
          >
            <div class="w-1/4 pr-4" />
            <div class="w-1/4 px-4">
              <div class="w-full h-full bg-white rounded-lg shadow" />
            </div>
            <div class="w-1/4 px-4">
              <div class="w-full h-full bg-white rounded-lg shadow-md" />
            </div>
            <div class="w-1/4 pl-4">
              <div class="w-full h-full bg-white rounded-lg shadow" />
            </div>
          </div>

          <table class="relative w-full">
            <thead>
              <tr class="text-left">
                <th scope="col"></th>
                <th v-for="plan in plans" :key="plan.title" scope="col"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="perk in perks" :key="perk.title">
                <th scope="row" class="w-1/4 py-3 pr-4 text-left">
                  <Text
                    size="sm"
                    weight="medium"
                    color="gray-600"
                    :content="perk.title"
                  />
                </th>
                <td
                  v-for="(tier, tierIdx) in perk.tiers"
                  :key="tier.title"
                  :class="[
                    tierIdx === perk.tiers.length - 1 ? 'pl-4' : 'px-4',
                    'relative w-1/4 py-0 text-center',
                  ]"
                >
                  <span class="relative w-full h-full py-3">
                    <Icon
                      name="CheckIcon"
                      v-if="tier.value === true"
                      size="5"
                      color="primary-600"
                      class="mx-auto"
                    />
                    <Icon
                      name="XMarkIcon"
                      v-else
                      size="5"
                      color="gray-400"
                      class="mx-auto"
                    />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Fake card borders -->
          <div
            class="absolute inset-0 flex items-stretch pointer-events-none"
            aria-hidden="true"
          >
            <div class="w-1/4 pr-4" />
            <div class="w-1/4 px-4">
              <div
                class="
                  w-full
                  h-full
                  rounded-lg
                  ring-1 ring-black ring-opacity-5
                "
              />
            </div>
            <div class="w-1/4 px-4">
              <div
                class="
                  w-full
                  h-full
                  rounded-lg
                  ring-2 ring-primary-600 ring-opacity-100
                "
              />
            </div>
            <div class="w-1/4 pl-4">
              <div
                class="
                  w-full
                  h-full
                  rounded-lg
                  ring-1 ring-black ring-opacity-5
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
import Button from "../../../atoms/Button/Button.vue";
import Link from "../../../atoms/Link/Link.vue";
/**
 * - Use it to show three tiers pricing section on brand and feature comparison
 */
export default {
  components: {
    Icon,
    Text,
    Button,
    Link,
  },
  data() {
    return {
      selectedTab: this.tabs[0],
    };
  },
  props: {
    /**
     * use it to show section title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * use it to show section description
     */
    description: {
      type: String,
      default: "",
    },
    /**
     * use it for toggle
     */
    tabs: {
      type: Array,
      default: () => [],
    },
    /**
     * use it for features
     */
    features: {
      type: Array,
      default: () => [],
    },
    /**
     * use it for plans
     */
    plans: {
      type: Array,
      default: () => [],
    },
    /**
     * use it for perks
     */
    perks: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
