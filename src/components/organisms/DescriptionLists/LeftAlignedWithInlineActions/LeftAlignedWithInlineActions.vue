<template>
  <div>
    <div>
      <Text
        :content="heading"
        size="lg"
        weight="medium"
        color="gray-900"
        custom-class="leading-6"
      />
      <Text
        :content="subheading"
        size="sm"
        weight="normal"
        color="gray-500"
        custom-class="mt-1 max-w-2xl "
      />
    </div>
    <div class="mt-5 border-t border-gray-200">
      <dl class="divide-y divide-gray-200">
        <div
          v-for="item in list"
          :key="item.id"
          class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"
        >
          <dt class="text-sm font-medium text-gray-500">
            <Text
              :content="item.key"
              size="sm"
              weight="medium"
              color="gray-500"
            />
          </dt>
          <dd
            v-if="item.sublist && item.sublist.length === 0"
            class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
          >
            <Text
              :content="item.description"
              size="sm"
              weight="normal"
              color="gray-900"
              custom-class="flex-grow"
            />
            <!-- <span class="flex-grow">Margot Foster</span> -->
            <span class="ml-4 flex-shrink-0">
              <Button
                size="md"
                custom-class="bg-white rounded-md font-medium text-primary-600 hover:text-primary-500"
                :content="item.action"
                @click="actionClicked(item.action,item)"
              />
              <!-- <button
                type="button"
                class="bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >Update</button> -->
            </span>
          </dd>
          <dd
            v-else
            class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
          >
            <ul
              role="list"
              class="border border-gray-200 rounded-md divide-y divide-gray-200"
            >
              <li
                v-for="listItem in item.sublist"
                :key="listItem.id"
                class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
              >
                <div class="w-0 flex-1 flex items-center">
                  <Icon
                    :name="listItem.icon"
                    size="5"
                    color="gray-400"
                    hover-text-color="gray-400"
                    custom-class="flex-shrink-0"
                  />
                  <Text
                    :content="listItem.text"
                    size="sm"
                    custom-class="ml-2 flex-1 w-0 truncate"
                  />
                </div>
                <div class="ml-4 flex-shrink-0 flex space-x-4 divide-x divide-gray-300">
                  <Button
                    v-for="(actionItem,actionIdx) in listItem.actions"
                    :key="`action-${actionIdx}`"
                    size="md"
                    custom-class="bg-white rounded-md font-medium text-primary-600 hover:text-primary-500"
                    :content="actionItem"
                    @click="actionClicked(actionItem,listItem)"
                  />
                  <!-- <button
                    type="button"
                    class="bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Update
                  </button>
                  <span
                    class="text-gray-300"
                    aria-hidden="true"
                  >|</span>
                  <button
                    type="button"
                    class="bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Remove
                  </button> -->
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
/**
 * Description list with key value pairs and sublist
 */
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Button from "../../../atoms/Button/Button.vue";

export default {
  components: {
    Text,
    Icon,
    Button,
  },
  props: {
    /**
     * heading of list
     */
    heading: {
      type: String,
      default: "",
    },
    /**
     * subheading of list
     */
    subheading: {
      type: String,
      default: "",
    },
    /**
     * list of items from key value pairs to list
     */
    list: {
      type: Array,
      default: () => [],
    },
    /**
     * click event on action button with action name and item
     */
    actionClicked: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

