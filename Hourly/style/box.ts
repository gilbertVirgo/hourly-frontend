import color from "./color";
import text from "./text";
import variant from "./variant";


const box = ({ shade = variant.light }: { shade?: object }) => ({
    ...text.font,
    ...text.regular,
    ...text.medium,
    ...shade,
    width: "100%",
    borderRadius: 50,
    height: 50,
    paddingTop: 15, paddingBottom: 15,
    paddingLeft: 24, paddingRight: 24,
    marginBottom: 15,
    backgroundColor: color.light
})

export default box;