const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	lintOnSave: false,
	configureWebpack: {
		resolve: {
			alias: {
				'@common'   : path.resolve(__dirname, 'src/common/'),
				'@views'    : path.resolve(__dirname, 'src/views/'),
				'@icons'    : path.resolve(__dirname, 'src/common/icons'),
				'@assets'   : path.resolve(__dirname, 'src/assets'),
				'@img'      : path.resolve(__dirname, 'src/assets/img'),
				'@css'      : path.resolve(__dirname, 'src/assets/css/common'),
			},
		},
	},

	css: {
		loaderOptions: {
			sass: {
				data: `@import "@assets/css/values.scss";`
			}
		}
	},


};
