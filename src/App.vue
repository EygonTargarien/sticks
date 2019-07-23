<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
	@import '~@assets/css/reset.scss';
	@import '~@assets/css/global.scss';

	@import '~@assets/css/common/title.scss';
	@import '~@assets/css/common/btn.scss';
	@import '~@assets/css/common/link.scss';

	#app{
		height: 100%;
		color: $c_main;
	}
</style>
