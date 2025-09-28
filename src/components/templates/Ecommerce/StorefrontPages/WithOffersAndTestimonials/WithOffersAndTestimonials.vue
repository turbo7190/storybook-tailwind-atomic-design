<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 lg:hidden"
        @close="mobileMenuOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
          >
            <div class="px-4 pt-5 pb-2 flex">
              <button
                type="button"
                class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                @click="mobileMenuOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Links -->
            <TabGroup as="div" class="mt-2">
              <div class="border-b border-gray-200">
                <TabList class="-mb-px flex px-4 space-x-8">
                  <Tab
                    as="template"
                    v-for="category in navigation.categories"
                    :key="category.name"
                    v-slot="{ selected }"
                  >
                    <button
                      :class="[
                        selected
                          ? 'text-primary-600 border-primary-600'
                          : 'text-gray-900 border-transparent',
                        'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium',
                      ]"
                    >
                      {{ category.name }}
                    </button>
                  </Tab>
                </TabList>
              </div>
              <TabPanels as="template">
                <TabPanel
                  v-for="(category, categoryIdx) in navigation.categories"
                  :key="category.name"
                  class="px-4 pt-10 pb-6 space-y-12"
                >
                  <div class="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                    <div class="grid grid-cols-1 gap-y-10 gap-x-6">
                      <div>
                        <p
                          :id="`mobile-featured-heading-${categoryIdx}`"
                          class="font-medium text-gray-900"
                        >
                          Featured
                        </p>
                        <ul
                          role="list"
                          :aria-labelledby="`mobile-featured-heading-${categoryIdx}`"
                          class="mt-6 space-y-6"
                        >
                          <li
                            v-for="item in category.featured"
                            :key="item.name"
                            class="flex"
                          >
                            <a :href="item.href" class="text-gray-500">
                              {{ item.name }}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p
                          id="mobile-categories-heading"
                          class="font-medium text-gray-900"
                        >
                          Categories
                        </p>
                        <ul
                          role="list"
                          aria-labelledby="mobile-categories-heading"
                          class="mt-6 space-y-6"
                        >
                          <li
                            v-for="item in category.categories"
                            :key="item.name"
                            class="flex"
                          >
                            <a :href="item.href" class="text-gray-500">
                              {{ item.name }}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="grid grid-cols-1 gap-y-10 gap-x-6">
                      <div>
                        <p
                          id="mobile-collection-heading"
                          class="font-medium text-gray-900"
                        >
                          Collection
                        </p>
                        <ul
                          role="list"
                          aria-labelledby="mobile-collection-heading"
                          class="mt-6 space-y-6"
                        >
                          <li
                            v-for="item in category.collection"
                            :key="item.name"
                            class="flex"
                          >
                            <a :href="item.href" class="text-gray-500">
                              {{ item.name }}
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p
                          id="mobile-brand-heading"
                          class="font-medium text-gray-900"
                        >
                          Brands
                        </p>
                        <ul
                          role="list"
                          aria-labelledby="mobile-brand-heading"
                          class="mt-6 space-y-6"
                        >
                          <li
                            v-for="item in category.brands"
                            :key="item.name"
                            class="flex"
                          >
                            <a :href="item.href" class="text-gray-500">
                              {{ item.name }}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <div
                v-for="page in navigation.pages"
                :key="page.name"
                class="flow-root"
              >
                <a
                  :href="page.href"
                  class="-m-2 p-2 block font-medium text-gray-900"
                  >{{ page.name }}</a
                >
              </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <div class="flow-root">
                <a href="#" class="-m-2 p-2 block font-medium text-gray-900"
                  >Create an account</a
                >
              </div>
              <div class="flow-root">
                <a href="#" class="-m-2 p-2 block font-medium text-gray-900"
                  >Sign in</a
                >
              </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <!-- Currency selector -->
              <form>
                <div class="inline-block">
                  <label for="mobile-currency" class="sr-only">Currency</label>
                  <div
                    class="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white"
                  >
                    <select
                      id="mobile-currency"
                      name="currency"
                      class="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent"
                    >
                      <option v-for="currency in currencies" :key="currency">
                        {{ currency }}
                      </option>
                    </select>
                    <div
                      class="absolute right-0 inset-y-0 flex items-center pointer-events-none"
                    >
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        class="w-5 h-5 text-gray-500"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M6 8l4 4 4-4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>

    <header class="relative z-10">
      <nav aria-label="Top">
        <!-- Top navigation -->
        <div class="bg-gray-900">
          <div
            class="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8"
          >
            <!-- Currency selector -->
            <form class="hidden lg:block lg:flex-1">
              <div class="flex">
                <label for="desktop-currency" class="sr-only">Currency</label>
                <div
                  class="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white"
                >
                  <select
                    id="desktop-currency"
                    name="currency"
                    class="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent"
                  >
                    <option v-for="currency in currencies" :key="currency">
                      {{ currency }}
                    </option>
                  </select>
                  <div
                    class="absolute right-0 inset-y-0 flex items-center pointer-events-none"
                  >
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      class="w-5 h-5 text-gray-300"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M6 8l4 4 4-4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </form>

            <p
              class="flex-1 text-center text-sm font-medium text-white lg:flex-none"
            >
              Get free delivery on orders over $100
            </p>

            <div
              class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
            >
              <a
                href="#"
                class="text-sm font-medium text-white hover:text-gray-100"
                >Create an account</a
              >
              <span class="h-6 w-px bg-gray-600" aria-hidden="true" />
              <a
                href="#"
                class="text-sm font-medium text-white hover:text-gray-100"
                >Sign in</a
              >
            </div>
          </div>
        </div>

        <!-- Secondary navigation -->
        <div class="bg-white">
          <div class="border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="h-16 flex items-center justify-between">
                <!-- Logo (lg+) -->
                <div class="hidden lg:flex lg:items-center">
                  <a href="#">
                    <span class="sr-only">Workflow</span>
                    <img
                      class="h-8 w-auto"
                      src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt=""
                    />
                  </a>
                </div>

                <div class="hidden h-full lg:flex">
                  <!-- Mega menus -->
                  <PopoverGroup class="ml-8">
                    <div class="h-full flex justify-center space-x-8">
                      <Popover
                        v-for="(category, categoryIdx) in navigation.categories"
                        :key="category.name"
                        class="flex"
                        v-slot="{ open }"
                      >
                        <div class="relative flex">
                          <PopoverButton
                            :class="[
                              open
                                ? 'border-primary-600 text-primary-600'
                                : 'border-transparent text-gray-700 hover:text-gray-800',
                              'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px',
                            ]"
                          >
                            {{ category.name }}
                          </PopoverButton>
                        </div>

                        <transition
                          enter-active-class="transition ease-out duration-200"
                          enter-from-class="opacity-0"
                          enter-to-class="opacity-100"
                          leave-active-class="transition ease-in duration-150"
                          leave-from-class="opacity-100"
                          leave-to-class="opacity-0"
                        >
                          <PopoverPanel
                            class="absolute top-full inset-x-0 text-gray-500 sm:text-sm"
                          >
                            <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                            <div
                              class="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            />

                            <div class="relative bg-white">
                              <div class="max-w-7xl mx-auto px-8">
                                <div
                                  class="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12"
                                >
                                  <div
                                    class="grid grid-cols-2 gap-y-10 gap-x-8"
                                  >
                                    <div>
                                      <p
                                        :id="`desktop-featured-heading-${categoryIdx}`"
                                        class="font-medium text-gray-900"
                                      >
                                        Featured
                                      </p>
                                      <ul
                                        role="list"
                                        :aria-labelledby="`desktop-featured-heading-${categoryIdx}`"
                                        class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        <li
                                          v-for="item in category.featured"
                                          :key="item.name"
                                          class="flex"
                                        >
                                          <a
                                            :href="item.href"
                                            class="hover:text-gray-800"
                                          >
                                            {{ item.name }}
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div>
                                      <p
                                        id="desktop-categories-heading"
                                        class="font-medium text-gray-900"
                                      >
                                        Categories
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="desktop-categories-heading"
                                        class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        <li
                                          v-for="item in category.categories"
                                          :key="item.name"
                                          class="flex"
                                        >
                                          <a
                                            :href="item.href"
                                            class="hover:text-gray-800"
                                          >
                                            {{ item.name }}
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div
                                    class="grid grid-cols-2 gap-y-10 gap-x-8"
                                  >
                                    <div>
                                      <p
                                        id="desktop-collection-heading"
                                        class="font-medium text-gray-900"
                                      >
                                        Collection
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="desktop-collection-heading"
                                        class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        <li
                                          v-for="item in category.collection"
                                          :key="item.name"
                                          class="flex"
                                        >
                                          <a
                                            :href="item.href"
                                            class="hover:text-gray-800"
                                          >
                                            {{ item.name }}
                                          </a>
                                        </li>
                                      </ul>
                                    </div>

                                    <div>
                                      <p
                                        id="desktop-brand-heading"
                                        class="font-medium text-gray-900"
                                      >
                                        Brands
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="desktop-brand-heading"
                                        class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        <li
                                          v-for="item in category.brands"
                                          :key="item.name"
                                          class="flex"
                                        >
                                          <a
                                            :href="item.href"
                                            class="hover:text-gray-800"
                                          >
                                            {{ item.name }}
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </transition>
                      </Popover>

                      <a
                        v-for="page in navigation.pages"
                        :key="page.name"
                        :href="page.href"
                        class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >{{ page.name }}</a
                      >
                    </div>
                  </PopoverGroup>
                </div>

                <!-- Mobile menu and search (lg-) -->
                <div class="flex-1 flex items-center lg:hidden">
                  <button
                    type="button"
                    class="-ml-2 bg-white p-2 rounded-md text-gray-400"
                    @click="mobileMenuOpen = true"
                  >
                    <span class="sr-only">Open menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                  </button>

                  <!-- Search -->
                  <a
                    href="#"
                    class="ml-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span class="sr-only">Search</span>
                    <MagnifyingGlassIcon class="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                <!-- Logo (lg-) -->
                <a href="#" class="lg:hidden">
                  <span class="sr-only">Workflow</span>
                  <img
                    src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                    class="h-8 w-auto"
                  />
                </a>

                <div class="flex-1 flex items-center justify-end">
                  <div class="flex items-center lg:ml-8">
                    <div class="flex space-x-8">
                      <div class="hidden lg:flex">
                        <a
                          href="#"
                          class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span class="sr-only">Search</span>
                          <MagnifyingGlassIcon
                            class="w-6 h-6"
                            aria-hidden="true"
                          />
                        </a>
                      </div>

                      <div class="flex">
                        <a
                          href="#"
                          class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span class="sr-only">Account</span>
                          <UserIcon class="w-6 h-6" aria-hidden="true" />
                        </a>
                      </div>
                    </div>

                    <span
                      class="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                      aria-hidden="true"
                    />

                    <div class="flow-root">
                      <a href="#" class="group -m-2 p-2 flex items-center">
                        <ShoppingCartIcon
                          class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <span
                          class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                          >0</span
                        >
                        <span class="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <!-- Hero -->
      <div class="flex flex-col border-b border-gray-200 lg:border-0">
        <nav aria-label="Offers" class="order-last lg:order-first">
          <div class="max-w-7xl mx-auto lg:px-8">
            <ul
              role="list"
              class="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x"
            >
              <li
                v-for="offer in offers"
                :key="offer.name"
                class="flex flex-col"
              >
                <a
                  :href="offer.href"
                  class="relative flex-1 flex flex-col justify-center bg-white py-6 px-4 text-center focus:z-10"
                >
                  <p class="text-sm text-gray-500">
                    {{ offer.name }}
                  </p>
                  <p class="font-semibold text-gray-900">
                    {{ offer.description }}
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="relative">
          <div
            aria-hidden="true"
            class="hidden absolute w-1/2 h-full bg-gray-100 lg:block"
          />
          <div class="relative bg-gray-100 lg:bg-transparent">
            <div
              class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2"
            >
              <div class="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                <div class="lg:pr-16">
                  <h1
                    class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl"
                  >
                    Focus on what matters
                  </h1>
                  <p class="mt-4 text-xl text-gray-600">
                    All the charts, datepickers, and notifications in the world
                    can't beat checking off some items on a paper card.
                  </p>
                  <div class="mt-6">
                    <a
                      href="#"
                      class="inline-block bg-primary-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-primary-700"
                      >Shop Productivity</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              class="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Trending products -->
      <section aria-labelledby="trending-heading" class="bg-white">
        <div class="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:py-32 lg:px-8">
          <div class="px-4 flex items-center justify-between sm:px-6 lg:px-0">
            <h2
              id="trending-heading"
              class="text-2xl font-extrabold tracking-tight text-gray-900"
            >
              Trending products
            </h2>
            <a
              href="#"
              class="hidden sm:block text-sm font-semibold text-primary-600 hover:text-primary-500"
              >See everything<span aria-hidden="true"> &rarr;</span></a
            >
          </div>

          <div class="mt-8 relative">
            <div class="relative w-full overflow-x-auto">
              <ul
                role="list"
                class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
              >
                <li
                  v-for="product in trendingProducts"
                  :key="product.id"
                  class="w-64 inline-flex flex-col text-center lg:w-auto"
                >
                  <div class="group relative">
                    <div
                      class="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1"
                    >
                      <img
                        :src="product.imageSrc"
                        :alt="product.imageAlt"
                        class="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <div class="mt-6">
                      <p class="text-sm text-gray-500">
                        {{ product.color }}
                      </p>
                      <h3 class="mt-1 font-semibold text-gray-900">
                        <a :href="product.href">
                          <span class="absolute inset-0" />
                          {{ product.name }}
                        </a>
                      </h3>
                      <p class="mt-1 text-gray-900">
                        {{ product.price }}
                      </p>
                    </div>
                  </div>

                  <h4 class="sr-only">Available colors</h4>
                  <ul
                    role="list"
                    class="mt-auto pt-6 flex items-center justify-center space-x-3"
                  >
                    <li
                      v-for="color in product.availableColors"
                      :key="color.name"
                      class="w-4 h-4 rounded-full border border-black border-opacity-10"
                      :style="{ backgroundColor: color.colorBg }"
                    >
                      <span class="sr-only">
                        {{ color.name }}
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-12 px-4 sm:hidden">
            <a
              href="#"
              class="text-sm font-semibold text-primary-600 hover:text-primary-500"
              >See everything<span aria-hidden="true"> &rarr;</span></a
            >
          </div>
        </div>
      </section>

      <!-- Collections -->
      <section aria-labelledby="collections-heading" class="bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2
              id="collections-heading"
              class="text-2xl font-extrabold text-gray-900"
            >
              Collections
            </h2>

            <div
              class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6"
            >
              <div
                v-for="collection in collections"
                :key="collection.name"
                class="group relative"
              >
                <div
                  class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
                >
                  <img
                    :src="collection.imageSrc"
                    :alt="collection.imageAlt"
                    class="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a :href="collection.href">
                    <span class="absolute inset-0" />
                    {{ collection.name }}
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  {{ collection.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sale and testimonials -->
      <div class="relative overflow-hidden">
        <!-- Decorative background image and gradient -->
        <div aria-hidden="true" class="absolute inset-0">
          <div
            class="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8"
          >
            <img
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              class="w-full h-full object-center object-cover"
            />
          </div>
          <div class="absolute inset-0 bg-white bg-opacity-75" />
          <div class="absolute inset-0 bg-gradient-to-t from-white via-white" />
        </div>

        <!-- Sale -->
        <section
          aria-labelledby="sale-heading"
          class="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8"
        >
          <div class="max-w-2xl mx-auto lg:max-w-none">
            <h2
              id="sale-heading"
              class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Get 25% off during our one-time sale
            </h2>
            <p class="mt-4 max-w-xl mx-auto text-xl text-gray-600">
              Most of our products are limited releases that won't come back.
              Get your favorite items while they're in stock.
            </p>
            <a
              href="#"
              class="mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
              >Get access to our one-time sale</a
            >
          </div>
        </section>

        <!-- Testimonials -->
        <section
          aria-labelledby="testimonial-heading"
          class="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:py-32 lg:px-8"
        >
          <div class="max-w-2xl mx-auto lg:max-w-none">
            <h2
              id="testimonial-heading"
              class="text-2xl font-extrabold tracking-tight text-gray-900"
            >
              What are people saying?
            </h2>

            <div
              class="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8"
            >
              <blockquote
                v-for="testimonial in testimonials"
                :key="testimonial.id"
                class="sm:flex lg:block"
              >
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="flex-shrink-0 text-gray-300"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div class="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                  <p class="text-lg text-gray-600">
                    {{ testimonial.quote }}
                  </p>
                  <cite
                    class="mt-4 block font-semibold not-italic text-gray-900"
                  >
                    {{ testimonial.attribution }}
                  </cite>
                </div>
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer aria-labelledby="footer-heading" class="bg-white">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border-t border-gray-200">
          <div class="pt-16 pb-20">
            <div class="md:flex md:justify-center">
              <img
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
                class="h-8 w-auto"
              />
            </div>
            <div
              class="mt-16 max-w-5xl mx-auto xl:grid xl:grid-cols-2 xl:gap-8"
            >
              <div class="grid grid-cols-2 gap-8 xl:col-span-2">
                <div
                  class="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8"
                >
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">Products</h3>
                    <ul role="list" class="mt-6 space-y-6">
                      <li
                        v-for="item in footerNavigation.products"
                        :key="item.name"
                        class="text-sm"
                      >
                        <a
                          :href="item.href"
                          class="text-gray-500 hover:text-gray-600"
                        >
                          {{ item.name }}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">
                      Customer Service
                    </h3>
                    <ul role="list" class="mt-6 space-y-6">
                      <li
                        v-for="item in footerNavigation.customerService"
                        :key="item.name"
                        class="text-sm"
                      >
                        <a
                          :href="item.href"
                          class="text-gray-500 hover:text-gray-600"
                        >
                          {{ item.name }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8"
                >
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">Company</h3>
                    <ul role="list" class="mt-6 space-y-6">
                      <li
                        v-for="item in footerNavigation.company"
                        :key="item.name"
                        class="text-sm"
                      >
                        <a
                          :href="item.href"
                          class="text-gray-500 hover:text-gray-600"
                        >
                          {{ item.name }}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">Legal</h3>
                    <ul role="list" class="mt-6 space-y-6">
                      <li
                        v-for="item in footerNavigation.legal"
                        :key="item.name"
                        class="text-sm"
                      >
                        <a
                          :href="item.href"
                          class="text-gray-500 hover:text-gray-600"
                        >
                          {{ item.name }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
            <div class="bg-gray-100 rounded-lg p-6 flex items-center sm:p-10">
              <div class="max-w-sm mx-auto">
                <h3 class="font-semibold text-gray-900">
                  Sign up for our newsletter
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
                </p>
                <form class="mt-4 sm:mt-6 sm:flex">
                  <label for="email-address" class="sr-only"
                    >Email address</label
                  >
                  <input
                    id="email-address"
                    type="text"
                    autocomplete="email"
                    required=""
                    class="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  />
                  <div class="mt-3 sm:flex-shrink-0 sm:mt-0 sm:ml-4">
                    <button
                      type="submit"
                      class="w-full bg-primary-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary-500"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div
              class="mt-6 relative py-12 px-6 flex items-center sm:py-16 sm:px-10 lg:mt-0"
            >
              <div class="absolute inset-0 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80"
                  alt=""
                  class="w-full h-full filter saturate-0 object-center object-cover"
                />
                <div class="absolute inset-0 bg-primary-600 bg-opacity-90" />
              </div>
              <div class="relative max-w-sm mx-auto text-center">
                <h3 class="text-2xl font-extrabold tracking-tight text-white">
                  Get early access
                </h3>
                <p class="mt-2 text-gray-200">
                  Did you sign up to the newsletter? If so, use the keyword we
                  sent you to get access.
                  <a
                    href="#"
                    class="font-bold text-white whitespace-nowrap hover:text-gray-200"
                    >Go now<span aria-hidden="true"> &rarr;</span></a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="py-10 md:flex md:items-center md:justify-between">
          <div class="text-center md:text-left">
            <p class="text-sm text-gray-500">&copy; 2021 All Rights Reserved</p>
          </div>

          <div class="mt-4 flex items-center justify-center md:mt-0">
            <div class="flex space-x-8">
              <a
                v-for="item in footerNavigation.bottomLinks"
                :key="item.name"
                :href="item.href"
                class="text-sm text-gray-500 hover:text-gray-600"
              >
                {{ item.name }}
              </a>
            </div>

            <div class="ml-6 border-l border-gray-200 pl-6">
              <a
                href="#"
                class="flex items-center text-gray-500 hover:text-gray-600"
              >
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80"
                  alt=""
                  class="w-5 h-auto flex-shrink-0"
                />
                <span class="ml-3 text-sm"> Change </span>
                <span class="sr-only">location and currency</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

export default {
  components: {
    Dialog,
    DialogOverlay,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    UserIcon,
    XMarkIcon,
  },
  props: [
    "currencies",
    "navigation",
    "offers",
    "trendingProducts",
    "collections",
    "testimonials",
    "footerNavigation",
  ],
  setup() {
    const mobileMenuOpen = ref(false);

    return {
      mobileMenuOpen,
    };
  },
};
</script>
