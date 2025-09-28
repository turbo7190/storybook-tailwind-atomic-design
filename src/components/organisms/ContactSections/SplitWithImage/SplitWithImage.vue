<template>
  <div class="h-screen overflow-scroll relative bg-white">
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover lg:absolute lg:h-full"
          :src="imgSrc"
          alt=""
        >
      </div>
    </div>
    <div class="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
      <div class="lg:pr-8">
        <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
          <Text
            :content="heading"
            size="3xl"
            weight="extrabold"
            custom-class="tracking-tight sm:text-4xl"
          />
          <Text
            :content="subheading"
            size="lg"
            color="gray-500"
            custom-class="mt-4 sm:mt-3"
          />
          <form
            class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <TextInput
              v-model="formObject.firstName"
              label="First Name"
              type="text"
            />
            <TextInput
              v-model="formObject.lastName"
              label="Last Name"
              type="text"
            />
            <div class="sm:col-span-2">
              <TextInput
                v-model="formObject.email"
                label="email"
                type="email"
              />
            </div>
            <div class="sm:col-span-2">
              <TextInput
                v-model="formObject.company"
                label="Company"
                type="text"
              />
            </div>
            <div class="sm:col-span-2">
              <TextInput
                v-model="formObject.phoneNumber"
                label="Phone"
                type="text"
                hint="Optional"
              />
            </div>
            <div class="sm:col-span-2">
              <TextArea
                v-model:value="formObject.helpMessage"
                label="How can we help you?"
                placeholder="Type here"
              />
            </div>
            <RadioGroup
              v-model:selected-item="formObject.expectedBudget"
              description="Expected budget"
              :items="radioGroupOptions"
            />
            <div class="sm:col-span-2">
              <TextInput
                v-model="formObject.hearAboutUs"
                label="How did you hear about us?"
                type="text"
              />
            </div>
            <div class="text-right sm:col-span-2">
              <Button
                :content="buttonText"
                variant="primary"
                size="md"
                @click="onSubmit(formObject)"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * - contact form with first name, last name, email, company name, phone number options
 * - with side image
 * - submit information option
 */
import { ref } from "vue";
import TextInput from "../../../molecules/Inputs/Component/Component.vue";
import TextArea from "../../../molecules/Textareas/Simple/Simple.vue";
import RadioGroup from "../../../molecules/RadioGroup/Simple/Simple.vue";
import Button from "../../../atoms/Button/Button.vue";
import Text from "../../../atoms/Text/Text.vue";

export default {
  components: {
    TextArea,
    TextInput,
    RadioGroup,
    Button,
    Text,
  },
  props: {
    /**
     * to display a heading
     */
    heading: {
      type: String,
      default: "",
    },
    /**
     * to display a subheading
     */
    subheading: {
      type: String,
      default: "",
    },
    /**
     * submit button text
     */
    buttonText: {
      type: String,
      default: "",
    },
    /**
     * privacy policy navigation url
     */
    imgSrc: {
      type: String,
      default: "",
    },
    /**
     * to use as a filter
     */
    radioGroupOptions: {
      type: Array,
      default: () => [],
    },
    /**
     * to use as a filter
     */
    onSubmit: {
      type: Function,
      default: () => {},
    },
  },
  setup() {
    const formObject = ref({});

    return {
      formObject,
    };
  },
};
</script>
