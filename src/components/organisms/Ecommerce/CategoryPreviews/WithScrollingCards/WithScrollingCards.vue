<template>
    <div class="bg-white">
        <div class="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
            <div class="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
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

            <div class="mt-4 flow-root">
                <div class="-my-2">
                    <div class="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                        <div class="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                            <a v-for="item in items" :key="item.name" :href="item.href"
                                 class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                                <span aria-hidden="true" class="absolute inset-0">
                                <Image :src="item.imageSrc" customClass="w-full h-full object-center object-cover" />
                                </span>
                                <span aria-hidden="true"
                                            class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"/>
                                <Text
                                    :content="item.name"
                                    color="white"
                                    weight="bold"
                                    size="xl"
                                    customClass="relative mt-auto text-center"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-6 px-4 sm:hidden">
                <Link
                    size="sm"
                    content="Browse all items"
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
        Text
    },
    props: ['items']
}
</script>
