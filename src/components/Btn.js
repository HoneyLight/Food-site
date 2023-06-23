// import "../App.css";
// no need to import app.css cos its already imported in the app.js file hence it covers for every other file.

// Learning props using buttons
// PROPS
// with PROPS you can move information from one component or folder to another. you can make a reusuable component dynamic by using props. you are using one thing to pass information to multiple components.

function Btn({title, bgColor, color, border, width, click}) {
    const BtnStyle = {
        background: bgColor,
        color: color,
        borderRadius: "5px",
        cursor: "pointer",
        padding: "15px 20px",
        // we are saying if the person put a border, then he can give which ever he wants but if the person doesn't, give him a default border style of 'none' using the ternary operator '?'.
        border: border ? border : "none",
        outline: "none",
        display: "inline-block",
        margin: "10px",
        width: width ? width : "auto",
    }
    return(
        <button style={BtnStyle} onClick={click}>{title}</button>
    )
}

export default Btn;