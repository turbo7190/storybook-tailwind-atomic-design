<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <Text
          content="Shop by Category"
          color="gray-900"
          weight="extrabold"
          size="2xl"
          customClass="tracking-tight"
        />
        <Link
          size="sm"
          content="Browse all categories"
          weight="semibold"
          color="primary-600"
          hoverColor="primary-500"
          customClass="hidden sm:block"
        />
      </div>

      <div
        class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8"
      >
        <div
          class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2"
        >
          <Image
            src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
            customClass="object-center object-cover group-hover:opacity-75 sm:w-full sm:h-full"
          />
          <div
            aria-hidden="true"
            class="bg-gradient-to-b from-transparent to-black opacity-50"
          />
          <div class="p-6 flex items-end">
            <div>
              <h3 class="font-semibold text-white">
                <Link content="New Arrivals" weight="semibold" />
              </h3>
              <Text
                content="Shop now"
                color="white"
                size="sm"
                customClass="mt-1"
              />
            </div>
          </div>
        </div>
        <div
          class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
            customClass="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div
            aria-hidden="true"
            class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
          />
          <div class="p-6 flex items-end sm:absolute sm:inset-0">
            <div>
              <h3 class="font-semibold text-white">
                <Link content="Accessories" weight="semibold" />
              </h3>
              <Text
                content="Shop now"
                color="white"
                size="sm"
                customClass="mt-1"
              />
            </div>
          </div>
        </div>
        <div
          class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
            customClass="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div
            aria-hidden="true"
            class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
          />
          <div class="p-6 flex items-end sm:absolute sm:inset-0">
            <div>
              <h3 class="font-semibold text-white">
                <Link content="Workspace" weight="semibold" />
              </h3>
              <Text
                content="Shop now"
                color="white"
                size="sm"
                customClass="mt-1"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 sm:hidden">
        <Link
          size="sm"
          content="Browse all categories"
          weight="semibold"
          color="primary-600"
          hoverColor="primary-500"
          customClass="block"
        />
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
