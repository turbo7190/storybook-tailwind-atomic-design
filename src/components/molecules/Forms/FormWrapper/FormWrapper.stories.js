import Component from "./FormWrapper.vue";
import TextInput from "../../Inputs/Component/Component.vue";
import SimpleTextarea from "../../Textareas/Simple/Simple.vue";
import SimpleSelect from "../../Selects/SimpleNative/SimpleNative.vue";

export default {
  title: "Components/Molecules/Forms",
  component: Component,
  argTypes: {
    label: {
      type: "string",
      description: "label",
    },
    helpText: {
      type: "string",
      description: "help text",
    },
    required: {
      type: "boolean",
      description: "required",
    },
    error: {
      type: "string",
      description: "error message",
    },
    inputId: {
      type: "string",
      description: "input id",
    },
  },
  parameters: {
    componentSubtitle:
      "Display a form wrapper with existing project components",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithTextInput = (args) => ({
  components: { Component, TextInput },
  setup() {
    return { args };
  },
  template: `
    <component v-bind="args">
      <text-input 
        :id="args.inputId"
        type="text"
        placeholder="Enter your first name"
        :value="''"
      />
    </component>
  `,
});
WithTextInput.args = {
  label: "First Name",
  helpText: "Enter your first name",
  required: true,
  inputId: "first-name",
};

export const WithEmailInput = (args) => ({
  components: { Component, TextInput },
  setup() {
    return { args };
  },
  template: `
    <component v-bind="args">
      <text-input 
        :id="args.inputId"
        type="email"
        placeholder="Enter your email"
        :value="''"
      />
    </component>
  `,
});
WithEmailInput.args = {
  label: "Email Address",
  helpText: "We will never share your email",
  required: true,
  inputId: "email",
};

export const WithTextarea = (args) => ({
  components: { Component, SimpleTextarea },
  setup() {
    return { args };
  },
  template: `
    <component v-bind="args">
      <simple-textarea 
        :label="''"
        placeholder="Enter your message"
        :value="''"
      />
    </component>
  `,
});
WithTextarea.args = {
  label: "Message",
  helpText: "Tell us about your project",
  required: false,
  inputId: "message",
};

export const WithError = (args) => ({
  components: { Component, TextInput },
  setup() {
    return { args };
  },
  template: `
    <component v-bind="args">
      <text-input 
        :id="args.inputId"
        type="password"
        placeholder="Enter your password"
        :value="''"
        :is-error="true"
      />
    </component>
  `,
});
WithError.args = {
  label: "Password",
  helpText: "Must be at least 8 characters",
  required: true,
  error: "Password must be at least 8 characters long",
  inputId: "password",
};

export const WithSelect = (args) => ({
  components: { Component, SimpleSelect },
  setup() {
    return { args };
  },
  template: `
    <component v-bind="args">
      <simple-select 
        :label="''"
        placeholder="Select a country"
        :items="['United States', 'Canada', 'United Kingdom', 'Germany', 'France']"
        :is-simple-list="true"
        :selected="''"
      />
    </component>
  `,
});
WithSelect.args = {
  label: "Country",
  helpText: "Select your country",
  required: true,
  inputId: "country",
};

export const CompleteForm = (args) => ({
  components: { Component, TextInput, SimpleTextarea, SimpleSelect },
  setup() {
    return { args };
  },
  template: `
    <form class="max-w-md mx-auto space-y-6">
      <component label="First Name" helpText="Enter your first name" required="true" inputId="first-name">
        <text-input 
          id="first-name"
          type="text"
          placeholder="Enter your first name"
          :value="''"
        />
      </component>
      
      <component label="Last Name" helpText="Enter your last name" required="true" inputId="last-name">
        <text-input 
          id="last-name"
          type="text"
          placeholder="Enter your last name"
          :value="''"
        />
      </component>
      
      <component label="Email Address" helpText="We will never share your email" required="true" inputId="email">
        <text-input 
          id="email"
          type="email"
          placeholder="Enter your email"
          :value="''"
        />
      </component>
      
      <component label="Country" helpText="Select your country" required="true" inputId="country">
        <simple-select 
          :label="''"
          placeholder="Select a country"
          :items="['United States', 'Canada', 'United Kingdom', 'Germany', 'France']"
          :is-simple-list="true"
          :selected="''"
        />
      </component>
      
      <component label="Message" helpText="Tell us about your project" inputId="message">
        <simple-textarea 
          :label="''"
          placeholder="Enter your message"
          :value="''"
        />
      </component>
      
      <div class="flex justify-end">
        <button 
          type="submit"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Submit
        </button>
      </div>
    </form>
  `,
});
