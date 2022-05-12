module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily:{
      'Roboto':['Roboto', 'sans-serif'],
      'Poppins':['"Poppins"','sans-serif'],
      'RobotoFlex':['"Roboto Flex"', 'sans-serif'],
      'sans': ['ui-sans-serif', 'system-ui']

    },
    container:{
      center:true,
      padding:"1rem",
      screens:{
        lg:"1200px",
        xl:"1200px",
        "2xl":"1200px"
      }
    },
    extend: {
      height: {
        '3/5vh': '60vh',
      },

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
        "usi-light-gray-100":"#ddd",
        "usi-gray":"#c7c7c7",
        "usi-dark-gray":"#464646",
        "usi-black":"#111",
        "usi-black-text":"#222",
        "usi-border-gray":"#aaa",
        "usi-gray-text":"#333",

        "template-blue-0057A3":"#0057A3",
        "template-blue-0061a4":"#0061a4",
        "template-blue-009FDF":"#009FDF",
        "template-blue-0c3a66":"#0c3a66",
        "template-blue-030e19":"#030e19",

        "template-white-FFF":"#FFF",

        "template-orange-da291c":"#da291c",
        "template-orange-fb923c":"#fb923c",

        "template-green-0097a7":"#0097a7",

        "template-light-gray-f5f5f5":"#f5f5f5",
        "template-light-gray-f7f7f7":"#f7f7f7",
        "template-light-gray-ddd":"#ddd",

        "template-black-111":"#111",
        "template-black-212121":"#212121",
        "template-gray-333":"#333",
      },

      backgroundImage:{
        "contact":"url('./assets/backgroundImage/contact.jpg')",
        "apropos":"url('./assets/backgroundImage/apropos.jpg')",
        "equipe":"url('./assets/backgroundImage/equipe2.jpg')",
        "acceuil":"url('./assets/backgroundImage/acceuil.jpg')",
      },

      flexBasis:{
        "usi-1.2/4":"32%",
        "usi-1/2":"49%"
      }
    },
  },
  plugins: [], 
}
