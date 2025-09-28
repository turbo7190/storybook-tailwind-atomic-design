<template>
	<div class="px-4 sm:px-6 lg:px-8">
		<div class="sm:flex sm:items-center">
			<div class="sm:flex-auto">
				<Text size="xl" weight="semibold" color="gray-900" :content="title"/>
				<Text size="sm" color="gray-700" :content="description" class="mt-2"/>
			</div>
			<div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
				<Button :content="btnText" variant="primary" :onClick="onClick"/>
			</div>
		</div>
		<div class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
			<table class="min-w-full divide-y divide-gray-300">
				<thead class="bg-gray-50">
				<tr>
					<th v-for="(i, id) in headers" :key="id" scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" :class="(i.label === 'Title' || i.label === 'Email') && 'hidden sm:table-cell'">{{i.label}}</th>
				</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 bg-white">
				<tr v-for="(item, i) in list" :key="i">
					<td v-for="(i, index) in headers" :key="index" class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6" :class="(i.label === 'Title' || i.label === 'Email') && 'hidden sm:table-cell'">{{item && item[i.name]}}</td>
					<td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
						<Link content="Edit" color="primary-600" hoverColor="primary-900" size="sm" weight="medium"/>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>


<script>
import Button from '../../../atoms/Button/Button.vue'
import Link from '../../../atoms/Link/Link.vue'
import Text from '../../../atoms/Text/Text.vue'
import {computed} from 'vue'
import { capitalize } from 'lodash-es'
/**
 * - Use it to show a simple table with hidden column on mobile
 */
export default {
	components: {
		Button, Link, Text
	},
	data() {
		return {
			/**
			 * Generate dynamic headers according to list item
			 */
			headers: computed(() => {
				let items = [];
				Object.keys(this.list[0]).map(i => {
					let str = i.split(/(?=[A-Z])/);
					str = str.join(' ');
					items.push({name: i, label: capitalize(str)})
				})
				return [...items, {name: 'action', label: ''}]
			})
		}
	},
	props: {
		/**
		 * Use it for table list
		 */
		list: {
			type: Array,
			default: () => []
		},
		/**
		 * Use it for table title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * Use it for table description
		 */
		description: {
			type: String,
			default: ''
		},
		/**
		 * Use it for button text
		 */
		btnText: {
			type: String,
			default: ''
		},
		/**
		 * Use it for button action
		 */
		onClick: {
			type: Function,
			default: () => {}
		}
	}
}
</script>

