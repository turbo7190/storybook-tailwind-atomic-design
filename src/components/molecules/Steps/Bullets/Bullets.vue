
<template>
  <nav
    class="flex items-center justify-center"
    aria-label="Progress"
  >
    <Text
      size="sm"
      weight="medium"
      :content="` Step ${steps.findIndex((step) => step.status === 'current') + 1 } of ${ steps.length }`"
    />
    <ol
      role="list"
      class="ml-8 flex items-center space-x-5 "
    >
      <li
        v-for="(step,index) in steps"
        :key="step.id"
        class="cursor-pointer"
      >
        <div
          :class="[step.status==='current'?'relative flex items-center justify-center':'block w-2.5 h-2.5 rounded-full',step.status === 'complete' ? 'bg-primary-600 hover:bg-primary-900':'',step.status !== 'complete' && step.status !== 'current' ? 'bg-gray-200 hover:bg-gray-400':'']"
          @click="stepChanged(index)"
        >
          <template v-if="step.status==='current'">
            <span
              class="absolute w-5 h-5 p-px flex"
              aria-hidden="true"
            >
              <span class="w-full h-full rounded-full bg-primary-200" />
            </span>
            <span
              class="relative block w-2.5 h-2.5 bg-primary-600 rounded-full"
              aria-hidden="true"
            />
          </template>

          <span class="sr-only">{{ step.name }}</span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
/**
 * stepper with ability to change step
 */
import Text from "../../../atoms/Text/Text.vue";
import { ref } from "vue";

export default {
  components: {
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
