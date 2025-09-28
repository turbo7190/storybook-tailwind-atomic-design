<template>
  <div class="w-full flex justify-end items-end">
    <a @click="() => isCollapsed = !isCollapsed">
      <Icon :name="!isCollapsed ? 'ChevronDownIcon' : 'ChevronUpIcon'" size="6" color="gray-400"/>
    </a>
  </div>
  <div class="w-full py-2 border-l border-gray-300 pl-2" v-for="property in data" :key="property.title">
    <div class="flex items-center justify-between">
      <Text color="gray-600" :content="property.label"/>
      <div v-if="!property.children" class="w-10 h-6 flex items-center rounded-full p-1 duration-300 cursor-pointer" :class="{'bg-green-400': property.isShow, 'bg-gray-300' : !property.isShow}" :area-checked="property.isShow.toString()" @click="onToggle(property)">
        <div class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300" :class="{'translate-x-4': property.isShow}"/>
      </div>
      <a @click="() => onCollapsed(property)" v-if="property.children">
        <Icon :name="!property.isCollapsed ? 'ChevronDownIcon' : 'ChevronUpIcon'" size="6" color="gray-400"/>
      </a>
    </div>

    <div v-if="!isCollapsed && !property.isCollapsed">
      <div class="ml-6 py-2 border-l border-gray-300 pl-2" v-for="subPro in property.children" :key="subPro.title">
        <div class="flex items-center justify-between">
          <Text color="gray-600" :content="subPro.label"/>
          <div v-if="!subPro.children" class="w-10 h-6 flex items-center rounded-full p-1 duration-300 cursor-pointer" :class="{'bg-green-400': subPro.isShow, 'bg-gray-300' : !subPro.isShow}" :area-checked="subPro.isShow.toString()" @click="onToggle(property, subPro)">
            <div class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300" :class="{'translate-x-4': subPro.isShow}"/>
          </div>
          <a @click="() => onCollapsed(property)" v-if="subPro.children">
            <Icon :name="!subPro.isCollapsed ? 'ChevronDownIcon' : 'ChevronUpIcon'" size="6" color="gray-400"/>
          </a>
        </div>
        <div v-if="!isCollapsed && !subPro.isCollapsed">
          <div class="ml-6 py-2 border-l border-gray-300 pl-2" v-for="ssubPro in subPro.children" :key="ssubPro.title">
            <div class="flex items-center justify-between">
              <Text color="gray-600" :content="ssubPro.label"/>
              <div v-if="!ssubPro.children" class="w-10 h-6 flex items-center rounded-full p-1 duration-300 cursor-pointer" :class="{'bg-green-400': ssubPro.isShow, 'bg-gray-300' : !ssubPro.isShow}" :area-checked="ssubPro.isShow.toString()" @click="onToggle(property, subPro, ssubPro)">
                <div class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300" :class="{'translate-x-4': ssubPro.isShow}"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../../../atoms/Icons/Icons.vue'
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show multiple toggles in tree structure
 */
export default {
  props: {
    /**
     * tree data
     */
    data: {
      type: Array,
      default: () => []
    },
    /**
     * toggle action
     */
    onToggle: {
      type: Function,
      default: () => {}
    },
     /**
     * collapse action
     */
    onCollapsed: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    Icon, Text
  },
  data() {
    return {
      isCollapsed: false,
    }
  }
};
</script>