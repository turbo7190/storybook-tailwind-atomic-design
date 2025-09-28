<template>
    <div class="bg-white h-screen overflow-scroll">
        <div class="max-w-7xl mx-auto py-24 sm:py-32 sm:px-2 lg:px-4">
            <div class="max-w-2xl mx-auto px-4 lg:max-w-none">
                <div class="max-w-3xl">
                    <h2 class="font-semibold text-gray-500" v-if="heading">{{heading}}</h2>
                    <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl" v-if="title">{{title}}</p>
                    <p class="mt-4 text-gray-500" v-if="desc">{{desc}}</p>
                </div>

                <div class="space-y-16 pt-10 mt-10 border-t border-gray-200 sm:pt-16 sm:mt-16">
                    <div v-for="feature in features" :key="feature.name"
                         class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">
                        <div class="mt-6 lg:mt-0 lg:col-span-5 xl:col-span-4">
                            <h3 class="text-lg font-medium text-gray-900">{{ feature.name }}</h3>
                            <p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
                        </div>
                        <div class="flex-auto lg:col-span-7 xl:col-span-8">
                            <div class="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                                <img :src="feature.imageSrc" :alt="feature.imageAlt"
                                     class="object-center object-cover"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WithWideImages",
        props: {
            title: {
                type: String,
                default: null
            },
            heading: {
                type: String,
                default: null
            },
            desc: {
                type: String,
                default: null
            },
            features: {
                type: Array,
                default: null
            }
        },
        data() {
            return {
            };
        },
        mounted() {
        },
    };
</script>
