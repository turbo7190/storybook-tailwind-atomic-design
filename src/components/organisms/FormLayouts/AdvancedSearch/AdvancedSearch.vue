
<template>
	<div v-if="isShow" class="absolute rounded-md shadow-sm bg-white border border-gray-200 right-0 px-4 py-4 overflow-y-scroll" style="min-width: 450px; max-height: 500px;">
		<div class="flex justify-between items-center mb-2">
			<Text weight="bold" color="black" content="Advanced Search"/>
			<a class="cursor-pointer" @click="onClose"><Icon name="XMarkIcon" size="5" color="black"/></a>
		</div>

		<div v-for="item in fields" :key="item && item.title">
			<div class="flex justify-between items-center mb-0.5">
				<Text size="sm" color="black" :content="item && item.title"/>
				<div class="flex justify-center items-center">
					<CustomInput customClass="shadow block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 p-2 mr-1" :class="get(item, 'type') === 'string' ? 'w-56' : 'w-24'" @input="(e) => handleInput(e, item)" :type="get(item, 'type') === 'string' ? 'text' : 'number'" v-if="checkPermissionOfInput(item)"/>
					<select
						v-if="!get(item, '$ref')"
						class="mx-1 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
						:class="(get(item, 'type') === 'enum' || get(item, 'type') === 'array') ? 'w-56' : 'w-28'"
						@change="(e) => handleInput(e, item, null, null, get(item, 'type') !== 'enum')"
					>
						<option
							v-for="option in getOptions(item)"
							:key="option"
							:value="option"
						>
							{{ option }}
						</option>
					</select>
					<CustomInput customClass="shadow block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 p-2 mr-1" :class="get(item, 'type') === 'string' ? 'w-56' : 'w-24'" @input="(e) => handleInput(e, item, null, null, false, true)" :type="'number'" v-if="checkPermissionOfExtraInput(item)"/>
				</div>
			</div>
			<div v-for="subitem in item.children" :key="subitem && subitem.title" class="ml-3 border-l pl-2 border-gray-300">
				<div class="flex justify-between items-center pb-0.5">
					<Text size="sm" color="black" :content="subitem && subitem.title"/>
					<div class="flex justify-center items-center">
						<CustomInput customClass="shadow block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 p-2 mr-1" :class="get(subitem, 'type') === 'string' ? 'w-56' : 'w-24'" @input="(e) => handleInput(e, item, subitem)" :type="get(subitem, 'type') === 'string' ? 'text' : 'number'" v-if="checkPermissionOfInput(subitem)"/>
						<select
							v-if="!get(subitem, '$ref')"
							class="ml-1 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
							:class="(get(subitem, 'type') === 'enum' || get(subitem, 'type') === 'array') ? 'w-56' : 'w-28'"
							@change="(e) => handleInput(e, item, subitem, null, get(item, 'type') !== 'enum')"
						>
							<option
								v-for="option in getOptions(subitem)"
								:key="option"
								:value="option"
							>
								{{ option }}
							</option>
						</select>
						<CustomInput customClass="shadow block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 p-2 mr-1" :class="get(subitem, 'type') === 'string' ? 'w-56' : 'w-24'" @input="(e) => handleInput(e, item, subitem, null, false, true)" :type="'number'" v-if="checkPermissionOfExtraInput(subitem)"/>
					</div>
				</div>
				<div v-for="ssubitem in subitem.children" :key="ssubitem && ssubitem.title" class="ml-6 border-l pl-2 border-gray-300">
					<div class="flex justify-between items-center pb-0.5">
						<Text size="sm" color="black" :content="ssubitem && ssubitem.title"/>
						<div class="flex justify-center items-center">
							<CustomInput customClass="shadow block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 p-2 mr-1" :class="get(ssubitem, 'type') === 'string' ? 'w-56' : 'w-24'" @input="(e) => handleInput(e, item, subitem, ssubitem)" :type="get(ssubitem, 'type') === 'string' ? 'text' : 'number'" v-if="checkPermissionOfInput(ssubitem)"/>
							<select
								v-if="!get(ssubitem, '$ref')"
								class="ml-1 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
								:class="(get(ssubitem, 'type') === 'enum' || get(ssubitem, 'type') === 'array') ? 'w-56' : 'w-28'"
								@change="(e) => handleInput(e, item, subitem, ssubitem, get(item, 'type') !== 'enum')"
							>
								<option
									v-for="option in getOptions(ssubitem)"
									:key="option"
									:value="option"
								>
									{{ option }}
								</option>
							</select>
							<CustomInput customClass="shadow block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 p-2 mr-1" :class="get(item, 'type') === 'string' ? 'w-56' : 'w-24'" @input="(e) => handleInput(e, item, subitem, ssubitem, false, true)" :type="'number'" v-if="checkPermissionOfExtraInput(item)"/>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="flex justify-end items-end">
			<button type="button" class="bg-primary-600 px-3 py-1.5 mt-2 rounded-md text-white font-semibold text-sm" @click="() => onSearch(filterList)">Search</button>
		</div>
	</div>
</template>

<script>
import {get} from 'lodash-es'
import CustomInput from '../../../molecules/Inputs/Component/Component.vue'
import Text from '../../../atoms/Text/Text.vue'
import Icon from '../../../atoms/Icons/Icons.vue'
import Button from '../../../atoms/Button/Button.vue'
/**
 * - Use it to search items by each properties and filter option
 */
export default {
	components: {
		CustomInput, Text, Icon, Button
	},
	props: {
		/**
		 * use it for fields
		 */
		fields: {
			type: Array,
			default: () => []
		},
		/**
		 * use it for schema properties
		 */
		schema: {
			type: Object,
			default: () => []
		},
		/**
		 * use it for button action
		 */
		onSearch: {
			type: Function,
			default: () => {}
		},
		/**
		 * use it whether or not show form
		 */
		isShow: {
			type: Boolean,
			default: true
		},
		/**
		 * use it for close action
		 */
		onClose: {
			type: Function,
			default: () => {}
		}
	},
	data() {
		return {
			idOptions: ['', 'EQUAL', 'NOT', 'IN', 'NOT IN', 'LT', 'LTE', 'GT', 'GTE'],
			stringOptions: ['', 'EQUAL', 'NOT', 'IN', 'NOT IN', 'LT', 'LTE', 'GT', 'GTE', 'CONTAINS', 'NOT CONTAINS', 'STARTS WITH', 'NOT STARTS WITH', 'ENDS WITH', 'NOT ENDS WITH'],
			arrayOptions: ['', 'EVERY', 'SOME', 'NONE'],
			numberOptions: ['', '<', '<=', '>', '>=', '=', '!='],
			booleanOptions: ['true', 'false'],
			get,
			filterList: {}
		}
	},
	methods: {
		getOptions(item) {
			if (item) {
				if (item.title === 'id' && item.type === 'string') {
					return this.idOptions
				} else if (item.type === 'string') {
					return this.stringOptions
				} else if (item.type === 'array') {
					return this.arrayOptions
				} else if (item.type === 'number' || item.type === 'integer') {
					return this.numberOptions
				} else if (item.type === 'boolean') {
					return this.booleanOptions
				} else if (item.type === 'enum') {
					return ['', ...item.enum]
				}
			} else {
				return []
			}
		},
		checkPermissionOfInput(item) {
			return item?.type === 'string' || item?.type === 'integer' || item?.type === 'number'
		},
		checkPermissionOfExtraInput(item) {
			return item?.type === 'integer' || item?.type === 'number'
		},
		handleInput(e, item, subitem, ssubitem, isOption, isSecond) {
			if (item && !subitem && !ssubitem) {
				let obj = {...this.filterList[item.title]} || {};
				if (isOption) {
					obj._type = e.target.value
				} else {
					if (isSecond) {
						obj._value_2 = e.target.value
					} else {
						obj._value = e.target.value
					}
				}
				this.filterList[item.title] = obj
			} else if (item && subitem && !ssubitem) {
				let obj = {...this.filterList[item.title]} || {};
				let subobj = {...obj[subitem.title]} || {};
				if (isOption) {
					subobj._type = e.target.value
				} else {
					if (isSecond) {
						subobj._value_2 = e.target.value
					} else {
						subobj._value = e.target.value
					}
				}
				obj[subitem.title] = subobj;
				this.filterList[item.title] = obj;
			} else if (item && subitem && ssubitem) {
				let obj = {...this.filterList[item.title]} || {};
				let subobj = {...obj[subitem.title]} || {};
				let ssubobj = {...subobj[ssubitem.title]} || {};
				if (isOption) {
					ssubobj._type = e.target.value
				} else {
					if (isSecond) {
						ssubobj._value_2 = e.target.value
					} else {
						ssubobj._value = e.target.value
					}
				}
				subobj[ssubitem.title] = ssubobj;
				obj[subitem.title] = subobj;
				this.filterList[item.title] = obj;
			}
		}
	}

}
</script>
