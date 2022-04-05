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

      }
    },
  },
  plugins: [],
}
