
<template>
  <nav aria-label="Progress">
    <ol
      role="list"
      class="space-y-4 md:flex md:space-y-0 md:space-x-8"
    >
      <li
        v-for="(step,index) in steps"
        :key="step.id"
        class="md:flex-1"
        @click="stepChanged(index)"
      >
        <div
          v-if="step.status === 'complete'"
          :class="`border-${completeBorderColor} hover:border-${completeBorderHoverColor}`"
          class="group pl-4 py-2 flex flex-col border-l-4 md:pl-0 md:pb-4 md:pt-0 md:border-l-0 md:border-b-4"
        >
          <!-- <Text
            :content="step.id"
            size="xs"
            :color="completeBorderColor"
            weight="semibold"
            decoration="uppercase"
            :custom-class="`tracking-wide group-hover:text-${completeBorderHoverColor}`"
          /> -->
          <Text
            :content="step.name"
            size="sm"
            weight="medium"
          />
        </div>
        <div
          v-else-if="step.status === 'current'"
          :class="`border-${currentBorderColor} hover:border-${currentBorderHoverColor}`"
          class="pl-4 py-2 flex flex-col border-l-4 md:pl-0 md:pb-4 md:pt-0 md:border-l-0 md:border-b-4"
          aria-current="step"
        >
          <!-- <Text
            :content="step.id"
            size="xs"
            :color="currentBorderColor"
            weight="semibold"
            decoration="uppercase"
            custom-class="tracking-wide"
          /> -->
          <Text
            :content="step.name"
            size="sm"
            weight="semibold"
            :color="currentBorderColor"
          />
        </div>
        <div
          v-else
          class="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pb-4 md:pt-0 md:border-l-0 md:border-b-4"
        >
          <!-- <Text
            :content="step.id"
            size="xs"
            color="gray-500"
            weight="semibold"
            decoration="uppercase"
            custom-class="tracking-wide group-hover:text-gray-700"
          /> -->
          <Text
            :content="step.name"
            size="sm"
            weight="medium"
          />
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
import { ref } from "vue";
import Text from "../../../atoms/Text/Text.vue";

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
    completeBorderColor: {
      type: String,
      default: "gray-200",
    },
    completeBorderHoverColor: {
      type: String,
      default: "gray-300",
    },
    currentBorderColor: {
      type: String,
      default: "primary-600",
    },
    currentBorderHoverColor: {
      type: String,
      default: "primary-600",
    },
  },
  setup(props) {
    const steps = ref(props.items);
    const nextClicked = () => {
      let currentStepIndex = getCurrentStepIndex();
      stepChanged(currentStepIndex + 1);
    };
    const previousClicked = () => {
      let currentStepIndex = getCurrentStepIndex();
      stepChanged(currentStepIndex - 1);
    };
    const setCurrentStepStatus = (index) => {
      steps.value[index].status = "current";
      props.stepClicked(steps.value, index);
    };
    const getCurrentStepIndex = () => {
      return steps.value.findIndex((e) => e.status === "current");
    };
    const stepChanged = (index) => {
      const currentStepIndex = getCurrentStepIndex();
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
      nextClicked,
      previousClicked,
    };
  },
};
</script>
