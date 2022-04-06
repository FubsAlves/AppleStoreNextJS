module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'agray': '#313132',
        'fgray': '#b4b4b4',
        'swhite': '#f5f5f7',
        'tblack': '#1d1d1f',
        'footergray': '#6e6e73',
        'tfgray': '#424245',

      },
      fontFamily: {
        sf: ["SFPRO", "sans-serif"],
        sfl: ["SFPROLIGHT", "sans-serif"],
        sfb: ["SFPROBOLD", "sans-serif"],
        sfdb: ["SFPRODISPLAYBOLD", "sans-serif"],
  
      },
      backgroundImage: {
        'apple-logo': "url('https://www.apple.com/ac/globalnav/7/pt_BR/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg  ')",
        'search-logo': "url('https://www.apple.com/ac/globalnav/7/pt_BR/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_large.svg')",
        'bag-logo': "url('https://www.apple.com/ac/globalnav/7/pt_BR/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_large.svg')",
        'iphone13sale': "url('https://www.apple.com/v/home/am/images/heroes/iphone-13-pro-avail/hero_iphone13pro_preorder__d46ofk3816wm_medium.jpg')",
        'iphonese': "url('https://www.apple.com/v/home/am/images/heroes/iphone-se/hero_iphonese_preorder__e4eta8trjs66_medium.jpg')",
        'ipadair': "url('https://www.apple.com/v/home/am/images/heroes/ipad-air/hero_ipadair__flhdv47anjqu_large.jpg')",
        'studiodisplay': "url('https://www.apple.com/v/home/am/images/promos/studio-display/promo_studiodisplay__b449sh436cdy_large.jpg')",
        'macstudio': "url('https://www.apple.com/v/home/am/images/promos/mac-studio/promo_macstudio__gl7zppziivma_large.jpg')",
        'iphone13preorder': "url('https://www.apple.com/v/home/am/images/promos/iphone-13-avail/promo_iphone13_preorder__egirfkqfbwom_large.jpg')",
        'watch7': "url('https://www.apple.com/br/home/images/promos/watch-series-7/promo_watch_lte__djeaso7ukrsm_large.jpg')",
        'applefitness': "url('https://www.apple.com/v/home/am/images/promos/apple-fitness-plus/tile_applefitness__fdk8xvz0dvu6_large.jpg')",
        'wecrashed': "url('https://www.apple.com/br/home/promos/tv-plus-wecrashed/images/promo_wecrashed__df4as6dsmv8m_large.jpg')",
      }
    },
  },
  variants: {
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },
  plugins: [
    require('tailwindcss-children'),
  ],
}
