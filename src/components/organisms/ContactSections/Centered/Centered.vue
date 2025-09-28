<template>
  <div
    class="h-screen overflow-scroll bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24"
  >
    <div class="relative max-w-xl mx-auto">
      <svg
        class="absolute left-full transform translate-x-1/2"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        />
      </svg>
      <svg
        class="absolute right-full bottom-0 transform -translate-x-1/2"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        />
      </svg>
      <div class="text-center">
        <Text
          :content="heading"
          size="3xl"
          weight="extrabold"
          color="gray-900"
          align="center"
          custom-class="tracking-tight sm:text-4xl"
        />
        <Text
          :content="subheading"
          size="lg"
          color="gray-500"
          align="center"
          custom-class="mt-4 leading-6"
        />
      </div>
      <div class="mt-12">
        <form class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <TextInput
            v-model="formObject.firstName"
            label="First Name"
            type="text"
            custom-class="py-3 sm:text-base"
          />
          <TextInput
            v-model="formObject.lastName"
            label="Last Name"
            type="text"
            custom-class="py-3 sm:text-base"
          />
          <div class="sm:col-span-2">
            <TextInput
              v-model="formObject.company"
              label="Company"
              type="text"
              custom-class="py-3 sm:text-base"
            />
          </div>
          <div class="sm:col-span-2">
            <TextInput
              v-model:value="formObject.email"
              label="Email"
              type="text"
              custom-class="py-3 sm:text-base"
            />
          </div>
          <div class="sm:col-span-2">
            <InputWithDropdown
              v-model:value="formObject.phoneNumber"
              v-model:option-value="formObject.phoneCountry"
              label="Phone Number"
              :options="countryList"
              placeholder="+1 (555) 987-6543"
            />
          </div>
          <div class="sm:col-span-2">
            <TextArea
              v-model:value="formObject.comments"
              label="Add your comment"
              placeholder="Type here"
            />
          </div>
          <div class="sm:col-span-2">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <Toggle v-model:value="formObject.agreementPolicy" />
              </div>
              <div class="ml-3">
                <p class="text-base text-gray-500">
                  By selecting this, you agree to the
                  {{ " " }}
                  <Link
                    content="Privacy Policy"
                    weight="medium"
                    color="gray-700"
                    size="base"
                    decoration="underline"
                    :url="privacyPolicyLinkUrl"
                  />
                  {{ " " }}
                  and
                  {{ " " }}
                  <Link
                    content="Cookie Policy"
                    weight="medium"
                    color="gray-700"
                    size="base"
                    decoration="underline"
                    :url="cookiesPolicyLinkUrl"
                  />
                </p>
              </div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <Button
              :content="buttonText"
              variant="primary"
              size="lg"
              @click="onSubmit(formObject)"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * - contact form with first name, last name, email, company name, phone number options
 * - link to privacy and cookie policy
 * - submit information option
 */
import { ref } from "vue";
import TextInput from "../../../molecules/Inputs/Component/Component.vue";
import TextArea from "../../../molecules/Textareas/Simple/Simple.vue";
import Toggle from "../../../molecules/Toggles/Simple/Simple.vue";
import Button from "../../../atoms/Button/Button.vue";
import Link from "../../../atoms/Link/Link.vue";
import Text from "../../../atoms/Text/Text.vue";
import InputWithDropdown from "../../../molecules/Inputs/InputWithInlineLeadingDropdown/InputWithInlineLeadingDropdown.vue";

export default {
  components: {
    TextInput,
    TextArea,
    Toggle,
    Text,
    Link,
    Button,
    InputWithDropdown,
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
    privacyPolicyLinkUrl: {
      type: String,
      default: "",
    },
    /**
     * cookies policy navigation url
     */
    cookiesPolicyLinkUrl: {
      type: String,
      default: "",
    },
    /**
     * to use as a filter
     */
    countryList: {
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
