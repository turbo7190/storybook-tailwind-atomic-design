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
		<div class="-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0">
			<table class="min-w-full divide-y divide-gray-300">
				<thead>
				<tr>
					<th v-for="(item, id) in headers" :key="id" scope="col" :class="[id === 0 ? 'text-left': 'text-right', 'py-3.5 text-sm font-semibold text-gray-900 pl-4 pr-3 sm:pl-6 md:pl-0']">{{item.label}}</th>
				</tr>
				</thead>
				<tbody>
				<tr v-for="(item, id) in list" :key="id" class="border-b border-gray-200">
					<td v-for="(i, index) in headers" :key="i" class="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 md:pl-0 text-sm font-medium text-gray-500" :class="[index === 0 ? 'text-left': 'text-right']">{{item && item[i.name]}}</td>
				</tr>
				</tbody>
				<tfoot>
				<tr v-for="(summary, id) in summaries" :key="id">
					<th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-6 text-right text-sm sm:table-cell md:pl-0" :class="[summary.name === 'Total' ? 'font-semibold text-black' : 'font-normal text-gray-500']">{{summary.name}}</th>
					<th scope="row" class="pl-4 pr-0 pt-6 text-left text-sm sm:hidden" :class="[summary.name === 'Total' ? 'font-semibold text-black' : 'font-normal text-gray-500']">{{summary.name}}</th>
					<td class="pl-3 pr-3 pt-6 text-right text-sm sm:pr-3" :class="[summary.name === 'Total' ? 'font-semibold text-black' : 'font-normal text-gray-500']">{{summary.value}}</td>
				</tr>
				</tfoot>
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
 * - Use it to show a simple table with summary rows
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
				return [...items]
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
		 * Use it for summary rows
		 */
		summaries: {
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

