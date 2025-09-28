<template>
	<div class="bg-white">
		<div class="flex flex-col border-b border-gray-200 lg:border-0">
			<nav aria-label="Offers" class="order-last lg:order-first">
				<div class="max-w-7xl mx-auto lg:px-8">
					<ul role="list" class="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
						<li v-for="item in items" :key="item.name" class="flex flex-col">
							<a :href="item.href"
								 class="relative flex-1 flex flex-col justify-center bg-white py-6 px-4 text-center focus:z-10">
								<Text
									:content="item.name"
									color="gray-500"
									size="sm"
								/>
								<Text
									:content="item.description"
									color="gray-900"
									weight="semibold"
								/>
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<div class="relative">
				<div aria-hidden="true" class="hidden absolute w-1/2 h-full bg-gray-100 lg:block"/>
				<div class="relative bg-gray-100 lg:bg-transparent">
					<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
						<div class="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
							<div class="lg:pr-16">
								<Text
									:content="heading"
									weight="extrabold"
									color="gray-900"
									size="4xl"
									customClass="tracking-tight sm:text-5xl xl:text-6xl"
								/>
								<Text
									:content="description"
									color="gray-600"
									size="xl"
									customClass="mt-4"
								/>
								<div class="mt-6">
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
					</div>
				</div>
				<div class="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
					<Image :src="imageSrc" customClass="w-full h-full object-center object-cover"/>
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
		Text
	},
	props: ['heading','description','linkText','imageSrc','items']
}
</script>
