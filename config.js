SystemJS.config({
  baseURL: 'https://unpkg.com/',
  defaultExtension: true,
  meta: {
      "*.scss": { "loader": "sass" },
      "*.sass": { "loader": "sass" },
    
    '*.vue': {
       'loader': 'vue-loader'
    },
    "*.css": {
       loader: 'css-loader',
            options: {
              // enable CSS Modules
              modules: true,
              // customize generated class names
              localIdentName: '[local]_[hash:base64:8]'
            }
    }
  },
  map: {
        'plugin-babel': '/js/systemjs-plugin-babel/plugin-babel.js',
         'systemjs-babel-build': '/js/systemjs-plugin-babel/systemjs-babel-browser.js',
        
        'vue-loader': '/js/systemjs-vue-loader.js',
        'vue-template-compiler': '/js/vue-template-compiler/browser.js',
        'vue-template-es2015-compiler': '/js/vue-template-es2015-compiler/index.js',
        'sass.js': '/js/sass.sync.js',
        'less': '/less.js/dist/less.js',
        'acorn': '/js/acorn/src/index.js',
        'bootstrap-vue': 'https://unpkg.com/bootstrap-vue',
        'vue-infinite-loading': '/js/vue-infinite-loading.js',
        'vue-router': '/js/vue-router.js',
        'axios': '/js/axios.js',
        'vue-progressbar': '/js/vue-progressbar.js',
        "vue": "/js/vue.js",
        "vue-carousel-3d": "/js/vue-carousel-3d.min.js",
        "eruda": "/js/eruda.js",
        "vue-touch-scroll": "/js/vue-touch-scroll.js",
        "vue-progressbar.js": "/js/vue-progressbar.js"
  },
  transpiler: 'plugin-babel',
  separateCSS: false,
  buildCSS: true,
  sassPluginOptions: {
     "autoprefixer": true
  },
  packages: {
        /*vue: {
            main: 'vue.js'
        },
        'vue-template-es2015-compiler': {
            main: 'index.js'
        }*/
    }
});

SystemJS.import('/src/main.js')
  .catch(console.error.bind(console));