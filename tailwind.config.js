module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'pink': "#F10879",
          'dark': "#303030"
        }
      },
      fontFamily: {
        'titillium-regular': "TitilliumRegular",
        'titillium-semiBold': "TitilliumSemiBold",
        'titillium-bold': "TitilliumBold",
        'proza-regular': "ProzaRegular",
        'proza-bold': "ProzaBold",
      },
      boxShadow: {
        'custom-dark': "0 0 15px 0 rgba(48, 48, 48, 0.5)",
        'custom-pink': "0 0 15px 0 rgba(241, 8, 121, 0.5)",
      }
    },
  },
  plugins: []
}