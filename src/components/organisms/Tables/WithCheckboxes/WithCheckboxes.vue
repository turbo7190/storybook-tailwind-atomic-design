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
		<div class="mt-8 flex flex-col">
			<div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
					<div class="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
						<div v-if="selectedItems.length > 0"
								 class="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
							<Button :content="'Bulk edit'" :variant="'secondary'" size="md"/>
							<Button :content="'Delete all'" :variant="'secondary'" size="md"/>
						</div>
						<table class="min-w-full table-fixed divide-y divide-gray-300">
							<thead class="bg-gray-50">
							<tr>
								<th scope="col" class="relative w-12 px-6 sm:w-16 sm:px-8">
									<input type="checkbox"
												 class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 sm:left-6"
												 :checked="indeterminate || selectedItems.length === list.length"
												 :indeterminate="indeterminate"
												 @change="selectedItems = $event.target.checked ? list.map((p) => p.email) : []"/>
								</th>
								<th v-for="(item, id) in headers" :key="id" scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">{{item.label}}</th>
							</tr>
							</thead>
							<tbody class="divide-y divide-gray-200 bg-white">
							<tr v-for="(item, i) in list" :key="i">
								<td class="relative w-12 px-6 sm:w-16 sm:px-8">
									<div v-if="selectedItems.includes(item.email)" class="absolute inset-y-0 left-0 w-0.5 bg-primary-600"></div>
									<input type="checkbox"
												 class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 sm:left-6"
												 :value="item.email" v-model="selectedItems"/>
								</td>
								<td v-for="(i, index) in headers" :key="index" class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{item && item[i.name]}}</td>
								<td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right sm:pr-6">
									<Link content="Edit" color="primary-600" hoverColor="primary-900" size="sm" weight="medium"/>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
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
 * - Use it to show a simple table with checkboxes
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
			}),
			selectedItems: [],
			indeterminate: this.selectedItems?.length < this.list?.length && this.selectedItems?.length > 0
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
