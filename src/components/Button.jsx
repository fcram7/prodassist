import { PropTypes } from "prop-types"

const Button = ({ btnText, btnOnClick, btnClass }) => {
  return ( 
    <button className={btnClass} onClick={btnOnClick}>
      {btnText}
    </button>
   );
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  btnOnClick: PropTypes.func
}

export default Button;