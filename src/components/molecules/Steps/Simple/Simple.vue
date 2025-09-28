
<template>
  <nav aria-label="Progress">
    <ol
      role="list"
      class="space-y-4 md:flex md:space-y-0 md:space-x-8"
    >
      <li
        v-for="(step,index) in steps"
        :key="step.name"
        class="md:flex-1"
        @click="stepChanged(index)"
      >
        <a
          v-if="step.status === 'complete'"

          class="group pl-4 py-2 flex flex-col border-l-4 border-primary-600 hover:border-primary-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
        >
          <Text
            :content="step.id"
            size="xs"
            color="primary-600"
            weight="semibold"
            decoration="uppercase"
            custom-class="tracking-wide group-hover:text-primary-800"
          />
          <Text
            :content="step.name"
            size="sm"
            weight="medium"
          />
        </a>
        <a
          v-else-if="step.status === 'current'"
          class="pl-4 py-2 flex flex-col border-l-4 border-primary-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
          aria-current="step"
        >
          <Text
            :content="step.id"
            size="xs"
            color="primary-600"
            weight="semibold"
            decoration="uppercase"
            custom-class="tracking-wide"
          />
          <Text
            :content="step.name"
            size="sm"
            weight="medium"
          />
        </a>
        <a
          v-else
          class="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
        >
          <Text
            :content="step.id"
            size="xs"
            color="gray-500"
            weight="semibold"
            decoration="uppercase"
            custom-class="tracking-wide group-hover:text-gray-700"
          />
          <Text
            :content="step.name"
            size="xs"
            weight="medium"
          />
        </a>
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
