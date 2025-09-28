<template>
  <div v-on:keyup.enter="loginClicked" tabindex="0">
    <div class="w-screen h-screen bg-white flex items-center">
      <div class="flex mx-auto justify-center">
        <div class="flex flex-col mb-0 sm:mb-20 justify-center items-center">
          <div class="w-80 mt-5 flex flex-col justify-center items-center">
            <div class="flex text-black  font-semibold text-2xl">Welcome Back!</div>
            <div class="flex text-black ">Log in to your WorkReels account</div>
          </div>
          <div class="w-80 mt-5">
            <div class="text-semibold text-xs text-black">Email</div>
            <input
                type="email"
                class="p-4 h-12 rounded w-full placeholder-gray-500 placeholder-opacity-50 text-sm font-medium mt-1.5 bg-select_gray text-black outline-none"
                :class="isEmailError ? 'border border-red-500' : 'border-none'"
                placeholder="you@company.com"
                v-model="email"
            />
            <div class="text-red-500 text-xs text-right mt-1" v-if="isEmailError && errorContent">{{errorContent}}</div>
          </div>
          <div class="w-80 mt-5">
            <div class="text-semibold text-xs text-black" style="color: #4c4c4c">Password</div>
            <input
                type="password"
                class="p-4 h-12 rounded w-full placeholder-gray-500 placeholder-opacity-50 text-sm font-medium mt-1.5 bg-select_gray text-black"
                placeholder="********"
                :class="isPasswordError ? 'border border-red-500' : 'border-none'"
                v-model="password"
            />
            <div class="text-red-500 text-xs text-right mt-1" v-if="isPasswordError && errorContent">{{errorContent}}</div>
          </div>

          <button
              class="h-10 w-80 flex text-sm justify-center items-center mt-8 text-white font-semibold rounded-button bg-primary_gradient hover:bg-primary_dark
              focus:ring-2 focus:ring-offset-4 focus:outline-none focus:ring-offset-focus_on focus:ring-focus_on"
          >
            <div class="loader" v-if="isLoading"></div>
            <div v-else>Login</div>
          </button>
          <div class="w-80 flex justify-center items-center mt-5">
            <button
                class="flex justify-center text-sm items-center font-bold text-primary cursor-pointer hover:text-primary_dark"
            >Forgot your Password?
            </button>
          </div>
          <div class="w-80 mt-5 flex flex-col justify-center items-center">
            <div class="mt-5 sm:mt-10 flex text-black mb-2">Don't have a WorkReels account yet?</div>
            <button
                class="flex justify-center text-sm items-center font-bold text-primary cursor-pointer hover:text-primary_dark">Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      email: null,
      password: null,
      isLoading: false,
      isEmailError: false,
      isPasswordError: false,
      errorContent: null,
    }
  },
	watch: {
		email: function (val) {
			this.email = val?.toLowerCase();
			this.isEmailError = false;
			this.isPasswordError = false;
		},
    password: function () {
      this.isPasswordError = false;
      this.isEmailError = false;
    }
	},
  methods: {
  },
};
</script>

<style lang="css" scoped>
</style>
