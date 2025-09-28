<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Workflow"
        />
        <Text
          size="3xl"
          weight="extrabold"
          color="gray-900"
          class="mt-6 text-center"
          content="Sign in to your account"
        />
        <p class="flex items-center justify-center mt-2">
          <Text
            size="sm"
            color="gray-600"
            class="text-center mr-1"
            content="Or"
          />
          <Link
            size="sm"
            weight="medium"
            color="primary-600"
            class="hover:text-primary-500"
            content="start your 14-day free trial"
          />
        </p>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <TextInput
            type="email"
            placeholder="Email address"
            v-model="email"
            customClass="appearance-none rounded-none relative rounded-t-md rounded-b-none focus:z-10"
          />
          <TextInput
            type="password"
            placeholder="Password"
            v-model="password"
            customClass="appearance-none rounded-none relative rounded-b-md rounded-t-none focus:z-10"
          />
        </div>
        <div class="flex items-center justify-between">
          <Checkbox v-model="isRemember" description="Remember me" />
          <Link
            size="sm"
            weight="medium"
            color="primary-600"
            hoverColor="primary-500"
            content="Forgot your password?"
          />
        </div>
        <div>
          <Button
            iconName="LockClosedIcon"
            iconSize="5"
            leading
            content="Sign in"
            variant="primary"
            custom-class="w-full"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Text from "../../../../components/atoms/Text/Text.vue";
import Link from "../../../../components/atoms/Link/Link.vue";
import TextInput from "../../../../components/molecules/Inputs/Component/Component.vue";
import Button from "../../../../components/atoms/Button/Button.vue";
import Checkbox from "../../../../components/molecules/Checkboxes/ListWithDescription/ListWithDescription.vue";
/**
 * Use it to show simple signin and registration form with no labels
 */
export default {
  components: {
    TextInput,
    Button,
    Text,
    Link,
    Checkbox,
  },
  data() {
    return {
      /**
       * use it for email
       */
      email: null,
      /**
       * use it for password
       */
      password: null,
      /**
       * use it for remember checkbox
       */
      isRemember: false,
    };
  },
};
</script>
