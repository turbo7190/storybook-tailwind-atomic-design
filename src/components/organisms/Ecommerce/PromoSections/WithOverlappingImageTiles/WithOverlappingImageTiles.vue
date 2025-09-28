<template>
  <div class="relative bg-white">
    <!-- Background image and overlap -->
    <div aria-hidden="true" class="hidden absolute inset-0 sm:flex sm:flex-col">
      <div class="flex-1 relative w-full bg-gray-800">
        <div class="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
            class="w-full h-full object-center object-cover"
          />
        </div>
        <div class="absolute inset-0 bg-gray-900 opacity-50" />
      </div>
      <div class="w-full bg-white h-32 md:h-40 lg:h-48" />
    </div>

    <div
      class="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8"
    >
      <!-- Background image and overlap -->
      <div aria-hidden="true" class="absolute inset-0 flex flex-col sm:hidden">
        <div class="flex-1 relative w-full bg-gray-800">
          <div class="absolute inset-0 overflow-hidden">
            <Image
              :src="imageSrc"
              customClass="w-full h-full object-center object-cover"
            />
          </div>
          <div class="absolute inset-0 bg-gray-900 opacity-50" />
        </div>
        <div class="w-full bg-white h-48" />
      </div>
      <div class="relative py-32">
        <Text
          :content="heading"
          color="white"
          weight="extrabold"
          size="4xl"
          customClass="tracking-tight sm:text-5xl md:text-6xl"
        />
        <div class="mt-4 sm:mt-6">
          <Link
            size="medium"
            color="white"
            hoverBg="primary-700"
            customClass="inline-block bg-primary-600 border border-transparent py-3 px-8 rounded-md"
            :content="linkText"
          />
        </div>
      </div>
    </div>

    <section
      aria-labelledby="collection-heading"
      class="-mt-96 relative sm:mt-0"
    >
      <h2 id="collection-heading" class="sr-only">Collections</h2>
      <div
        class="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8"
      >
        <div
          v-for="item in items"
          :key="item.name"
          class="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5"
        >
          <div>
            <div
              aria-hidden="true"
              class="absolute inset-0 rounded-lg overflow-hidden"
            >
              <div
                class="absolute inset-0 overflow-hidden group-hover:opacity-75"
              >
                <Image
                  :src="item.imageSrc"
                  :alt="item.imageAlt"
                  customClass="w-full h-full object-center object-cover"
                />
              </div>
              <div
                class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
              />
            </div>
            <div class="absolute inset-0 rounded-lg p-6 flex items-end">
              <div>
                <Text
                  :content="item.description"
                  color="white"
                  size="sm"
                  aria-hidden="true"
                />
                <h3 class="mt-1 font-semibold text-white">
                  <Link weight="semibold" :content="item.name" />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  props: ["heading", "linkText", "imageSrc", "items"],
};
</script>
