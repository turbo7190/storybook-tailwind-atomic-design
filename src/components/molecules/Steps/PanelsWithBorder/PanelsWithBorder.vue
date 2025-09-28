
<template>
  <div class="lg:border-t lg:border-b lg:border-gray-200">
    <nav
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-label="Progress"
    >
      <ol
        role="list"
        class="rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none"
      >
        <li
          v-for="(step, stepIdx) in steps"
          :key="step.id"
          class="relative overflow-hidden lg:flex-1"
          @click="stepChanged(stepIdx)"
        >
          <div :class="[stepIdx === 0 ? 'border-b-0 rounded-t-md' : '', stepIdx === steps.length - 1 ? 'border-t-0 rounded-b-md' : '', 'border border-gray-200 overflow-hidden lg:border-0']">
            <a
              v-if="step.status === 'complete'"
              class="group"
            >
              <span
                class="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                aria-hidden="true"
              />
              <span :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-start text-sm font-medium']">
                <span class="flex-shrink-0">
                  <span class="w-10 h-10 flex items-center justify-center bg-primary-600 rounded-full">
                    <!-- <CheckIcon
                      class="w-6 h-6 text-white"
                      aria-hidden="true"
                    /> -->
                    <Icon
                      name="CheckIcon"
                      size="6"
                      color="white"
                      aria-hidden="true"
                    />
                  </span>
                </span>
                <span class="mt-0.5 ml-4 min-w-0 flex flex-col">
                  <Text
                    :content="step.name"
                    size="xs"
                    weight="semibold"
                    decoration="uppercase"
                    custom-class="tracking-wide"
                  />
                  <Text
                    :content="step.description"
                    color="gray-500"
                    size="sm"
                    weight="medium"
                  />
                  <!-- <span class="text-xs font-semibold tracking-wide uppercase">{{ step.name }}</span>
                  <span class="text-sm font-medium text-gray-500">{{ step.description }}</span> -->
                </span>
              </span>
            </a>
            <a
              v-else-if="step.status === 'current'"
              aria-current="step"
            >
              <span
                class="absolute top-0 left-0 w-1 h-full bg-primary-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                aria-hidden="true"
              />
              <span :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-start']">
                <span class="flex-shrink-0">
                  <span class="w-10 h-10 flex items-center justify-center border-2 border-primary-600 rounded-full">
                    <Text
                      color="primary-600"
                      weight="medium"
                      size="sm"
                      :content="step.id"
                    />
                  </span>
                </span>
                <span class="mt-0.5 ml-4 min-w-0 flex flex-col">
                  <Text
                    :content="step.name"
                    color="primary-600"
                    size="xs"
                    weight="semibold"
                    decoration="uppercase"
                    custom-class="tracking-wide"
                  />
                  <Text
                    :content="step.description"
                    color="gray-500"
                    size="sm"
                    weight="medium"
                  />
                </span>
              </span>
            </a>
            <a
              v-else
              class="group"
            >
              <span
                class="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                aria-hidden="true"
              />
              <span :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-start text-sm font-medium']">
                <span class="flex-shrink-0">
                  <span class="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
                    <Text
                      :content="step.id"
                      color="gray-500"
                      size="sm"
                      weight="medium"
                    />
                  </span>
                </span>
                <span class="mt-0.5 ml-4 min-w-0 flex flex-col">
                  <Text
                    :content="step.name"
                    size="xs"
                    weight="semibold"
                    decoration="uppercase"
                    custom-class="tracking-wide"
                    color="gray-500"
                  />
                  <Text
                    :content="step.description"
                    color="gray-500"
                    size="sm"
                    weight="medium"
                  />
                </span>
              </span>
            </a>
            <template v-if="stepIdx !== 0">
              <!-- Separator -->
              <div
                class="hidden absolute top-0 left-0 w-3 inset-0 lg:block"
                aria-hidden="true"
              >
                <svg
                  class="h-full w-full text-gray-300"
                  viewBox="0 0 12 82"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.5 0V31L10.5 41L0.5 51V82"
                    stroke="currentcolor"
                    vector-effect="non-scaling-stroke"
                  />
                </svg>
              </div>
            </template>
          </div>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";

export default {
  components: {
    Text,
    Icon,
  },
  props: {
    /**
     * steps array
     */
    items: {
      type: Array,
      default: () => [],
    },
    /**
     * action called on changing a step with updated steps array and current step info
     */
    stepClicked: {
      type: Function,
      default: () => {},
    },
    /**
     * when set to true allows to traverse steps only in sequence
     */
    dependancy: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const steps = ref(props.items);
    const setCurrentStepStatus = (index) => {
      steps.value[index].status = "current";
      props.stepClicked(steps.value, steps.value[index]);
    };
    const stepChanged = (index) => {
      const currentStepIndex = steps.value.findIndex(
        (e) => e.status === "current"
      );
      if (currentStepIndex >= 0) {
        if (
          !props.dependancy ||
          (props.dependancy &&
            (currentStepIndex + 1 === index ||
              steps.value[index].status === "complete" ||
              (index > 0 && steps.value[index - 1].status === "complete")))
        ) {
          steps.value[currentStepIndex].status = "complete";
          setCurrentStepStatus(index);
        }
      } else {
        let currentIndex = props.dependancy ? 0 : index;
        setCurrentStepStatus(currentIndex);
      }
    };

    return {
      steps,
      stepChanged,
    };
  },
};
</script>
