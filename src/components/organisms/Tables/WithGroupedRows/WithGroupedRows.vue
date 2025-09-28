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
					<div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
						<table class="min-w-full">
							<thead class="bg-white">
							<tr>
								<th v-for="(item, id) in headers" :key="id" scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">{{item.label}}</th>
							</tr>
							</thead>
							<tbody class="bg-white">
							<template v-for="(item, i) in list" :key="i">
								<tr class="border-t border-gray-200">
									<th colspan="5" scope="colgroup" class="bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 sm:px-6">
										{{ item.name }}
									</th>
								</tr>
								<tr v-for="(person, personIdx) in item.people" :key="personIdx"
										:class="[personIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t']">
									<td v-for="(i, index) in headers" :key="index" class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{person && person[i.name]}}</td>
									<td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
										<Link content="Edit" color="primary-600" hoverColor="primary-900" size="sm" weight="medium"/>
									</td>
								</tr>
							</template>
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
 * - Use it to show a simple table with grouped rows
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
				Object.keys(this.list[0]?.people[0]).map(i => {
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
