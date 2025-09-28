<template>
  <div
    class="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"
  >
    <div class="max-w-max mx-auto">
      <main class="sm:flex">
        <p class="text-4xl font-extrabold text-primary-600 sm:text-5xl">404</p>
        <div class="sm:ml-6">
          <div class="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1
              class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
            >
              Page not found
            </h1>
            <p class="mt-1 text-base text-gray-500">
              Please check the URL in the address bar and try again.
            </p>
          </div>
          <div
            class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6"
          >
            <Primary label="Go back home" color="primary" />
            <Secondary label="Contact support" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Primary from "../../../../components/molecules/Button/Primary/Primary.vue";
import Secondary from "../../../../components/molecules/Button/Secondary/Secondary.vue";

export default {
  components: {
    Primary,
    Secondary,
  },
};
</script>
