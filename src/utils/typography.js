/*import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'

const typography = new Typography(oceanBeachTheme)

export default typography*/


import Typography from "typography"

const typography = new Typography({
    baseFontSize: "19px",
    lineHeight: "1.50",
    rhytm: "1.00",
    headerFontFamily: ["Playfair Display"],
    bodyFontFamily: ["Roboto Slab"],
});

export default typography