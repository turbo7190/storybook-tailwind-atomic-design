
<template>
  <nav aria-label="Progress">
    <ol
      role="list"
      class="overflow-hidden"
    >
      <li
        v-for="(step, stepIdx) in steps"
        :key="step.name"
        :class="[stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative']"
        @click="stepChanged(stepIdx)"
      >
        <template v-if="step.status === 'complete'">
          <div
            v-if="stepIdx !== steps.length - 1"
            class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-primary-600"
            aria-hidden="true"
          />
          <a
            class="relative flex items-start group"
          >
            <span class="h-9 flex items-center">
              <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-primary-600 rounded-full group-hover:bg-primary-800">
                <!-- <CheckIcon
                  class="w-5 h-5 text-white"
                  aria-hidden="true"
                /> -->
                <Icon
                  name="CheckIcon"
                  size="5"
                  color="white"
                />
              </span>
            </span>
            <span class="ml-4 min-w-0 flex flex-col">
              <Text
                :content="step.name"
                size="xs"
                weight="semibold"
                decoration="uppercase"
                custom-class="tracking-wide"
              />
              <Text
                :content="step.description"
                size="sm"
                weight="medium"
                color="gray-500"
              />
              <!-- <span class="text-xs font-semibold tracking-wide uppercase">{{ step.name }}</span>
              <span class="text-sm text-gray-500">{{ step.description }}</span> -->
            </span>
          </a>
        </template>
        <template
          v-else-if="step.status === 'current'"
          condition="step.status === 'current'"
        >
          <div
            v-if="stepIdx !== steps.length - 1"
            class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
            aria-hidden="true"
          />
          <a
            class="relative flex items-start group"
            aria-current="step"
          >
            <span
              class="h-9 flex items-center"
              aria-hidden="true"
            >
              <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-primary-600 rounded-full">
                <span class="h-2.5 w-2.5 bg-primary-600 rounded-full" />
              </span>
            </span>
            <span class="ml-4 min-w-0 flex flex-col">
              <Text
                :content="step.name"
                size="xs"
                weight="semibold"
                decoration="uppercase"
                custom-class="tracking-wide"
                color="primary-600"
              />
              <Text
                :content="step.description"
                size="sm"
                weight="medium"
                color="gray-500"
              />
              <!-- <span class="text-xs font-semibold tracking-wide uppercase text-primary-600">{{ step.name }}</span>
              <span class="text-sm text-gray-500">{{ step.description }}</span> -->
            </span>
          </a>
        </template>
        <template v-else>
          <div
            v-if="stepIdx !== steps.length - 1"
            class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
            aria-hidden="true"
          />
          <a
            class="relative flex items-start group"
          >
            <span
              class="h-9 flex items-center"
              aria-hidden="true"
            >
              <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
              </span>
            </span>
            <span class="ml-4 min-w-0 flex flex-col">
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
                size="sm"
                weight="medium"
                color="gray-500"
              />
              <!-- <span class="text-xs font-semibold tracking-wide uppercase text-gray-500">{{ step.name }}</span>
              <span class="text-sm text-gray-500">{{ step.description }}</span> -->
            </span>
          </a>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script>
import { ref } from "vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";

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
