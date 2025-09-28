<template>
  <div class="relative bg-white">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
    </div>
    <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
      <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
        <div class="max-w-lg mx-auto">
          <Text
            :content="heading"
            size="2xl"
            weight="extrabold"
            color="gray-900"
            custom-class="tracking-tight sm:text-3xl"
          />
          <Text
            :content="subheading"
            size="lg"
            color="gray-500"
            custom-class="mt-3 leading-6"
          />
          <dl class="mt-8 text-base text-gray-500">
            <div>
              <dt class="sr-only">
                Postal address
              </dt>
              <dd>
                <Text
                  :content="addressLine1"
                  size="base"
                  weight="normal"
                  color="gray-500"
                />
                <Text
                  :content="addressLine2"
                  size="base"
                  weight="normal"
                  color="gray-500"
                />
              </dd>
            </div>
            <div class="mt-6">
              <dt class="sr-only">
                Phone number
              </dt>
              <dd class="flex">
                <Icon
                  name="PhoneIcon"
                  size="6"
                  is-outline
                  color="gray-400"
                  custom-class="flex-shrink-0"
                />
                <Text
                  :content="phoneNumber"
                  size="base"
                  weight="normal"
                  color="gray-500"
                  custom-class="ml-3"
                />
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">
                Email
              </dt>
              <dd class="flex">
                <Icon
                  name="EnvelopeIcon"
                  size="6"
                  is-outline
                  color="gray-400"
                  custom-class="flex-shrink-0"
                />
                <Text
                  :content="email"
                  size="base"
                  weight="normal"
                  color="gray-500"
                  custom-class="ml-3"
                />
              </dd>
            </div>
          </dl>
          <p class="mt-6">
            <Text
              content="Looking for careers?"
              size="base"
              color="gray-500"
            />
            {{ ' ' }}
            <!-- <a
              href="#"
              class="font-medium text-gray-700 underline"
            >View all job openings</a>. -->
            <Link
              weight="medium"
              color="gray-700"
              size="base"
              :url="careerLinkUrl"
              content="View all job openings"
              custom-class="underline"
            />
          </p>
        </div>
      </div>
      <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
        <div class="max-w-lg mx-auto lg:max-w-none">
          <form
            action="#"
            method="POST"
            class="grid grid-cols-1 gap-y-6"
          >
            <TextInput
              v-model="formObject.fullName"
              placeholder="Full Name"
              type="text"
              custom-class="py-3 sm:text-base"
            />
            <TextInput
              v-model="formObject.email"
              placeholder="Email"
              type="email"
              custom-class="py-3 sm:text-base"
            />
            <TextInput
              v-model="formObject.phoneNumber"
              placeholder="Phone"
              type="text"
              custom-class="py-3 sm:text-base"
            />
            <TextArea
              v-model:value="formObject.message"
              label="Message"
              placeholder="Type here"
            />
            <Button
              :content="buttonText"
              variant="primary"
              size="md"
              @click="onSubmit(formObject)"
            />
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
import Button from "../../../atoms/Button/Button.vue";
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Link from "../../../atoms/Link/Link.vue";

export default {
  components: {
    TextArea,
    TextInput,
    Text,
    Icon,
    Button,
    Link,
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
     * career link navigation
     */
    careerLinkUrl: {
      type: String,
      default: "",
    },
    /**
     * email of company
     */
    email: {
      type: String,
      default: "",
    },
    /**
     * phone number of company
     */
    phoneNumber: {
      type: String,
      default: "",
    },
    /**
     * addres of company
     */
    addressLine1: {
      type: String,
      default: "",
    },
    /**
     * address of company
     */
    addressLine2: {
      type: String,
      default: "",
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
