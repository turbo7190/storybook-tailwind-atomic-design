<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
      <div class="relative rounded-lg overflow-hidden lg:h-96">
        <div class="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            customClass="w-full h-full object-center object-cover"
          />
        </div>
        <div aria-hidden="true" class="relative w-full h-96 lg:hidden" />
        <div aria-hidden="true" class="relative w-full h-32 lg:hidden" />
        <div
          class="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-6 rounded-bl-lg rounded-br-lg backdrop-filter backdrop-blur sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:items-start"
        >
          <div>
            <Text
              content="Workspace Collection"
              weight="bold"
              color="white"
              size="xl"
            />
            <Text
              content="Upgrade your desk with objects that keep you organized and clear-minded."
              color="gray-300"
              size="sm"
              customClass="mt-1"
            />
          </div>

          <Link
            size="medium"
            content="View the collection"
            customClass="mt-6 flex-shrink-0 flex bg-white bg-opacity-0 py-3 px-4 border border-white border-opacity-25 rounded-md items-center justify-center text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Image from "../../../../atoms/Image/Image.vue";
import Link from "../../../../atoms/Link/Link.vue";
import Text from "../../../../atoms/Text/Text.vue";

export default {
  components: {
    Image,
    Link,
    Text,
  },
};
</script>
