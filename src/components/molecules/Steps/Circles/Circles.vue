
<template>
  <nav aria-label="Progress">
    <ol
      role="list"
      class="flex items-center"
    >
      <li
        v-for="(step, stepIdx) in steps"
        :key="step.name"
        :class="[stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative']"
        @click="stepChanged(stepIdx)"
      >
        <template v-if="step.status === 'complete'">
          <div
            class="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div class="h-0.5 w-full bg-primary-600" />
          </div>
          <a
            class="relative w-8 h-8 flex items-center justify-center bg-primary-600 rounded-full hover:bg-primary-900"
          >
            <Icon
              name="CheckIcon"
              color="white"
              size="5"
              aria-hidden="true"
            />
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
        <template
          v-else-if="step.status === 'current'"
          condition="step.status === 'current'"
        >
          <div
            class="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div class="h-0.5 w-full bg-gray-200" />
          </div>
          <a
            class="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-primary-600 rounded-full"
            aria-current="step"
          >
            <span
              class="h-2.5 w-2.5 bg-primary-600 rounded-full"
              aria-hidden="true"
            />
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
        <template v-else>
          <div
            class="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div class="h-0.5 w-full bg-gray-200" />
          </div>
          <a
            class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400"
          >
            <span
              class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
              aria-hidden="true"
            />
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script>
import { ref } from "vue";
import Icon from "../../../atoms/Icons/Icons.vue";

export default {
  components: {
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
