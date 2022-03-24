module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily:{
      Roboto:["Roboto", "sans-serif"],
    },
    container:{
      center:true,
      padding:"1rem",
      screens:{
        lg:"1124px",
        xl:"1124px",
        "2xl":"1124px"
      }
    },
    extend: {
      colors:{
        "usi-orange-400":"#fb923c",
        "usi-blue-900":"#030e19",
        "usi-blue-800":"#061d33",
        "usi-blue-700":"#092b4d",
        "usi-blue-600":"#0c3a66",
        "usi-blue-500":"#0f4880",
        "usi-blue-400":"#125699",
        "usi-blue-300":"#1565b3",
        "usi-blue-200":"#1873cc",
        "usi-blue-100":"#1b82e6",
        "usi-blue":"#1e90ff",
        "usi-light-gray":"#f7f7f7",
        "usi-black":"#111",
        "usi-black-text":"#333",
        "usi-border-gray":"#888"
      },
      borderWidth:{
        "2x9":"18px"
      },

      backgroundImage:{
        "contact":"url('./assets/contact-back.jpg')"
      },

      flexBasis:{
        "usi-1.2/4":"30%"
      }
    },
  },
  plugins: [], 
}
