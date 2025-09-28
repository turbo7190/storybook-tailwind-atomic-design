
<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8">
    <nav
      class="flex justify-center"
      aria-label="Progress"
    >
      <ol
        role="list"
        class="space-y-6"
      >
        <li
          v-for="(step,index) in steps"
          :key="step.id"
        >
          <a
            v-if="step.status === 'complete'"
            class="group"
            @click="stepChanged(index)"
          >
            <span class="flex items-start">
              <span class="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
                <Icon
                  name="CheckCircleIcon"
                  size="full"
                  color="primary-600"
                  hover-text-color="primary-800"
                  custom-class="group-hover:text-primary-800"
                />
                <!-- <CheckCircleIcon
                  class="h-full w-full text-primary-600 group-hover:text-primary-800"
                  aria-hidden="true"
                /> -->
              </span>
              <Text
                :content="step.name"
                size="sm"
                weight="medium"
                color="gray-500"
                custom-class="ml-3 group-hover:text-gray-900"
              />
              <!-- <span class="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">{{ step.name }}</span> -->
            </span>
          </a>
          <a
            v-else-if="step.status === 'current'"
            class="flex items-start"
            aria-current="step"
            @click="stepChanged(index)"
          >
            <span
              class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
              aria-hidden="true"
            >
              <span class="absolute h-4 w-4 rounded-full bg-primary-200" />
              <span class="relative block w-2 h-2 bg-primary-600 rounded-full" />
            </span>
            <!-- <span class="ml-3 text-sm font-medium text-primary-600">{{ step.name }}</span> -->
            <Text
              :content="step.name"
              size="sm"
              weight="medium"
              color="primary-600"
              custom-class="ml-3"
            />
          </a>
          <a
            v-else
            class="group"
            @click="stepChanged(index)"
          >
            <div class="flex items-start">
              <div
                class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                aria-hidden="true"
              >
                <div class="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400" />
              </div>
              <!-- <p class="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">{{ step.name }}</p> -->
              <Text
                :content="step.name"
                size="sm"
                weight="medium"
                color="gray-500"
                custom-class="ml-3 group-hover:text-gray-900"
              />
            </div>
          </a>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
import { ref } from "vue";

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
