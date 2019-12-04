import color from "./color";
import text from "./text";

const box = {
    ...text.font,
    ...text.regular,
    ...text.medium,
    width: "100%",
    borderRadius: 50,
    height: 50,
    paddingTop: 15, paddingBottom: 15,
    paddingLeft: 24, paddingRight: 24,
    marginBottom: 15,
    backgroundColor: color.light
}

export default box;