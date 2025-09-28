<template>
  <div class="space-y-6 h-screen overflow-scroll pb-10">
    <div
      v-for="section in sections"
      :key="section.id"
      class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6"
    >
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <Text
            :content="section.name"
            size="lg"
            weight="medium"
            color="gray-900"
            custom-class="leading-6"
          />
          <Text
            :content="section.description"
            size="sm"
            weight="normal"
            color="gray-500"
            custom-class="mt-1 max-w-2xl"
          />
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form :id="`form-${section.name}`" class="space-y-6">
            <div class="grid grid-cols-6 gap-6">
              <template v-for="field in section.fields">
                <div
                  v-if="
                    field.type === 'RadioGroup' ||
                    field.type === 'CheckboxesWithDescription'
                  "
                  :key="field.id"
                  class="col-span-6 mt-6"
                >
                  <template v-if="field.type === 'RadioGroup'">
                    <RadioGroup
                      v-model:selected-item="
                        formObject[section.formModel][field.model]
                      "
                      :label="field.label"
                      :description="field.description"
                      :items="field.items"
                    />
                  </template>
                  <template
                    v-else-if="field.type === 'CheckboxesWithDescription'"
                  >
                    <Text
                      :content="field.label"
                      size="base"
                      weight="medium"
                      color="gray-900"
                    />
                    <div class="mt-4">
                      <div class="max-w-lg">
                        <CheckboxesWithDescription
                          v-model:selected="
                            formObject[section.formModel][field.model]
                          "
                          :items="field.items"
                        />
                      </div>
                    </div>
                  </template>
                </div>
                <div
                  v-else
                  :key="field.id"
                  :class="`col-span-${field.col} sm:col-span-${field.smCol} lg:col-span-${field.lgCol}`"
                >
                  <template v-if="field.type === 'InputAddOn'">
                    <!-- <div class="grid grid-cols-3 gap-6"> -->
                    <div class="col-span-3 sm:col-span-2">
                      <InputAddon
                        v-model:value="
                          formObject[section.formModel][field.model]
                        "
                        :label="field.label"
                        :add-on="field.addOn"
                        custom-class="w-full"
                      />
                      <!-- </div> -->
                    </div>
                  </template>
                  <template v-else-if="field.type === 'Input'">
                    <TextInput
                      :id="field.id"
                      v-model:value="formObject[section.formModel][field.model]"
                      :label="field.label"
                      type="text"
                      :placeholder="field.placeholder"
                    />
                  </template>
                  <template v-else-if="field.type === 'TextArea'">
                    <Text
                      :content="field.label"
                      size="sm"
                      color="gray-700"
                      weight="medium"
                      custom-class="block"
                    />
                    <TextArea
                      v-model:value="formObject[section.formModel][field.model]"
                      :placeholder="field.placeholder"
                      custom-class="mr-1"
                    />
                    <Text
                      :content="field.helpText"
                      size="sm"
                      color="gray-500"
                      weight="normal"
                      custom-class="mt-2"
                    />
                  </template>
                  <template v-else-if="field.type === 'UploadImage'">
                    <Text
                      :content="field.label"
                      size="sm"
                      color="gray-700"
                      weight="medium"
                      custom-class="block"
                    />
                    <div class="mt-1 flex items-center">
                      <span
                        class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                      >
                        <svg
                          class="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </span>
                      <button
                        type="button"
                        class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        Change
                      </button>
                    </div>
                  </template>
                  <template v-else-if="field.type === 'FileDragAndDrop'">
                    <Text
                      :content="field.label"
                      size="sm"
                      color="gray-700"
                      weight="medium"
                      custom-class="block"
                    />
                    <div
                      class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                    >
                      <div class="space-y-1 text-center">
                        <svg
                          class="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div class="flex text-sm text-gray-600">
                          <label
                            for="file-upload"
                            class="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              class="sr-only"
                            />
                          </label>
                          <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="field.type === 'Select'">
                    <Select
                      v-model:selected-item="
                        formObject[section.formModel][field.model]
                      "
                      :label="field.label"
                      :placeholder="field.placeholder"
                      :items="field.items"
                    />
                  </template>
                </div>
              </template>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <Button
        :content="cancelButtonText"
        variant="secondary"
        size="md"
        custom-class="mr-3"
        @click="cancelAction()"
      />
      <Button
        :content="submitButtonText"
        variant="primary"
        size="md"
        @click="saveAction(formObject)"
      />
    </div>
  </div>
</template>
<script>
/**
 * Dynamic Form
 * Options for Select, RadioGroup, Checkbox List, Input, TextArea, InputWithAddOn
 * col,smCol,lgCol at field level to give layout cols or width on screen
 */
import { ref } from "vue";
import InputAddon from "../../../molecules/Inputs/InputWithAddOn/InputWithAddOn.vue";
import TextInput from "../../../molecules/Inputs/Component/Component.vue";
import TextArea from "../../../molecules/Textareas/Simple/Simple.vue";
import RadioGroup from "../../../molecules/RadioGroup/Simple/Simple.vue";
import CheckboxesWithDescription from "../../../molecules/Checkboxes/ListWithDescription/ListWithDescription.vue";
import Button from "../../../atoms/Button/Button.vue";
import Text from "../../../atoms/Text/Text.vue";
import Select from "../../../molecules/Selects/SimpleNative/SimpleNative.vue";

export default {
  components: {
    InputAddon,
    TextInput,
    TextArea,
    Select,
    RadioGroup,
    CheckboxesWithDescription,
    Button,
    Text,
  },
  props: {
    /**
     * array of form sections with fields
     */
    sections: {
      type: Array,
      default: () => [],
    },
    /**
     * text for submit button
     */
    submitButtonText: {
      type: String,
      default: "Save",
    },
    /**
     * text for cancel button
     */
    cancelButtonText: {
      type: String,
      default: "Cancel",
    },
    /**
     * submit button action
     */
    saveAction: {
      type: Function,
      default: () => {},
    },
    /**
     * cancel button action
     */
    cancelAction: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    const formObject = ref({});
    props.sections.forEach((el) => {
      formObject.value[el.formModel] = {};
    });
    return {
      formObject,
    };
  },
};
</script>
