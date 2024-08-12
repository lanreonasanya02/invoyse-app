import PropTypes from "prop-types";

Logo.propTypes = {
  width: PropTypes.number,
  margin: PropTypes.number,
  imageAlt: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default function Logo({
  width = 200,
  margin = 0,
  image,
  imageAlt = "logo",
}) {
  const logoStyle = {
    marginBottom: `${margin}px`,
  };

  return (
    <header style={logoStyle}>
      <img src={image} alt={`${imageAlt}-icon`} width={`${width}px`} />
    </header>
  );
}
