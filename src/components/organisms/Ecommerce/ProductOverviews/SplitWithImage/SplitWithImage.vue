<template>
	<div class="bg-white">
		<div
			class="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
			<!-- Product details -->
			<div class="lg:max-w-lg lg:self-end">
				<nav aria-label="Breadcrumb">
					<ol role="list" class="flex items-center space-x-2">
						<li v-for="(breadcrumb, breadcrumbIdx) in product.breadcrumbs" :key="breadcrumb.id">
							<div class="flex items-center text-sm">
								<Link :url="breadcrumb.href" weight="medium" color="gray-500" hoverColor="gray-900"
									:content="breadcrumb.name" />
								<svg v-if="breadcrumbIdx !== product.breadcrumbs.length - 1" viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true"
									class="flex-shrink-0 w-5 h-5 ml-2 text-gray-300">
									<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
								</svg>
							</div>
						</li>
					</ol>
				</nav>

				<div class="mt-4">
					<Text size="3xl" weight="extrabold" customClass="tracking-tight sm:text-4xl" color="gray-900"
						:content="product.name" />
				</div>

				<section aria-labelledby="information-heading" class="mt-4">
					<Text id="information-heading" customClass="sr-only" content="Product information" />
					<div class="flex items-center">
						<Text size="lg" color="gray-900" customClass="sm:text-xl" :content="product.price" />
						<div class="pl-4 ml-4 border-l border-gray-300">
							<Text customClass="sr-only" content="Reviews" />
							<div class="flex items-center">
								<div>
									<div class="flex items-center">
										<Icon name="StarIcon" v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
											:customClass="`${reviews.average > rating ? 'text-yellow-400' : 'text-gray-300'} 'h-5 w-5 flex-shrink-0'`"
											:ariaHidden="true" />
									</div>
									<Text customClass="r-only" :content="`${reviews.average} out of 5 stars`" />
								</div>
								<Text customClass="ml-2" size="sm" color="gray-500"
									:content="`${reviews.totalCount} reviews`" />
							</div>
						</div>
					</div>

					<div class="mt-4 space-y-6">
						<Text size="base" color="gray-500" :content="product.description" />
					</div>

					<div class="flex items-center mt-6">
						<Icon name="CheckIcon" customClass="flex-shrink" :size="5" color="green-500"
							:ariaHidden="true" />
						<Text customClass="ml-2" size="sm" color="gray-500" content="In stock and ready to ship" />
					</div>
				</section>
			</div>

			<!-- Product image -->
			<div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
				<div class="overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
					<Image :src="product.imageSrc" :alt="product.imageAlt" customClass="object-cover object-center"
						width="full" height="full" />
				</div>
			</div>

			<!-- Product form -->
			<div class="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
				<section aria-labelledby="options-heading">
					<Text id="options-heading" customClass="sr-only" content="Product options" />

					<form>
						<div class="sm:flex sm:justify-between">
							<!-- Size selector -->
							<Cards :items="sizeCards" label="Size" />
						</div>
						<div class="mt-4">
							<Link :leading="true" url="#" size="sm" color="gray-500" hoverColor="gray-700"
								customClass="inline-flex group">
							<Text content="What size should I buy?" />
							<Icon name="QuestionMarkCircleIcon" :size="5" customClass="flex-shrink-0 ml-2 group-hover:text-gray-500" color="gray-400" :ariaHidden="true" />
							</Link>
						</div>
						<div class="mt-10">
							<Button type="submit"
								class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-primary-600 border border-transparent rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500"
								label="Add to bag" />
						</div>
						<div class="mt-6 text-center">
							<Link :leading="true" url="#" customClass="inline-flex text-base group" weight="medium">
							<Icon name="ShieldCheckIcon" customClass="flex-shrink-0 mr-2 group-hover:text-gray-500" :size="6" color="gray-400" :ariaHidden="true" />
							<Text color="gray-500" customClass="hover:text-gray-700" content="Lifetime Guarantee" />
							</Link>
						</div>
					</form>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
import Text from '../../../../atoms/Text/Text.vue'
import Link from '../../../../atoms/Link/Link.vue'
import Image from '../../../../atoms/Image/Image.vue'
import Icon from '../../../../atoms/Icons/Icons.vue'
import Button from '../../../../molecules/Button/Primary/Primary.vue'
import Cards from '../../../../molecules/RadioGroup/Cards/Cards.vue'

export default {
	components: {
		Text,
		Link,
		Image,
		Icon,
		Button,
		Cards
	},
	props: {
		product: {
			type: Object,
			default: () => {}
		},
		reviews: {
			type: Object,
			default: () => {}
		},
		selectedSize: {
			type: Object,
			default: () => {}
		},
		sizeCards: {
			type: Array,
			default: () => []
		}
	},

}
</script>
