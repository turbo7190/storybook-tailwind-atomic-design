<template>
	<div class="bg-white shadow sm:rounded-lg">
		<div class="px-4 py-5 sm:p-6">
			<h3 class="text-lg leading-6 font-medium text-gray-900">{{title}}</h3>
			<div class="mt-5">
				<div class="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
					<div class="sm:flex sm:items-start">
						<svg class="h-8 w-auto sm:flex-shrink-0 sm:h-6" viewBox="0 0 36 24" aria-hidden="true">
							<rect width="36" height="24" fill="#224DBA" rx="4"/>
							<path fill="#fff"
										d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"/>
						</svg>
						<div class="mt-3 sm:mt-0 sm:ml-4">
							<div class="text-sm font-medium text-gray-900">Ending with {{last4}}</div>
							<div class="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
								<div>Expires {{expireMonth}}/{{expireDay}}</div>
								<span class="hidden sm:mx-2 sm:inline" aria-hidden="true"> &middot; </span>
								<div class="mt-1 sm:mt-0">Last updated on {{updatedAt}}</div>
							</div>
						</div>
					</div>
					<div class="mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
						<Button :content="btnText" variant="secondary" :onClick="onClick"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Button from "../../../atoms/Button/Button.vue";
/**
 * - Use it when show a panel with link
 */
export default {
  components: {
    Button,
  },
  props: {
    /**
     * Use to show title
     */
    title: {
      type: String,
    },
    /**
     * Use to show last4 number of card
     */
    last4: {
      type: String,
    },
    /**
     * Use for button action
     */
    onClick: {
      type: Function,
    },
    /**
     * Use for card expire month
     */
    expireMonth: {
      type: String,
    },
		/**
		 * Use for card expire date
		 */
		expireDay: {
			type: String
		},
		/**
		 * Use for button text
		 */
		btnText: {
			type: String,
			default: 'Edit'
		},
		/**
		 * Use for updated at of card
		 */
		updatedAt: {
			type: String,
		}
  },
};
</script>
