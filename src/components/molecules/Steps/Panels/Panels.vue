
<template>
  <nav aria-label="Progress">
    <ol
      role="list"
      class="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0"
    >
      <li
        v-for="(step, stepIdx) in steps"
        :key="step.name"
        class="relative md:flex-1 md:flex"
        @click="stepChanged(stepIdx)"
      >
        <a
          v-if="step.status === 'complete'"
          class="group flex items-center w-full"
        >
          <span class="px-6 py-4 flex items-center">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary-600 rounded-full group-hover:bg-primary-800">
              <Icon
                name="CheckIcon"
                size="6"
                color="white"
                aria-hidden="true"
              />
            </span>
            <Text
              :content="step.name"
              size="sm"
              weight="medium"
              color="gray-900"
              class="ml-4"
            />
          </span>
        </a>
        <a
          v-else-if="step.status === 'current'"
          class="px-6 py-4 flex items-center text-sm font-medium"
          aria-current="step"
        >
          <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-primary-600 rounded-full">
            <Text
              :content="step.id"
              color="primary-600"
              size="sm"
              weight="medium"
            />
          </span>
          <Text
            :content="step.name"
            color="primary-600"
            size="sm"
            weight="medium"
            class="ml-4"
          />
        </a>
        <a
          v-else
          class="group flex items-center"
        >
          <span class="px-6 py-4 flex items-center">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
              <Text
                :content="step.id"
                color="gray-500"
                size="sm"
                weight="medium"
                custom-class="group-hover:text-gray-900"
              />
            </span>
            <Text
              :content="step.name"
              color="gray-500"
              size="sm"
              weight="medium"
              custom-class="ml-4 group-hover:text-gray-900"
            />
          </span>
        </a>
        <template v-if="stepIdx !== steps.length - 1">
          <!-- Arrow separator for lg screens and up -->
          <div
            class="hidden md:block absolute top-0 right-0 h-full w-5"
            aria-hidden="true"
          >
            <svg
              class="h-full w-full text-gray-300"
              viewBox="0 0 22 80"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 -2L20 40L0 82"
                vector-effect="non-scaling-stroke"
                stroke="currentcolor"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script>
import { ref } from "vue";
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";

export default {
  components: {
    Icon,
    Text,
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
