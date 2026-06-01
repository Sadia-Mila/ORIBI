
const Image = ({ imgSrc, imgAlt = "Product image", className = "", fallbackSrc }) => {
  return (
    <img
      className={className}
      src={imgSrc || fallbackSrc}
      alt={imgAlt}
      onError={(event) => {
        if (fallbackSrc && event.target.src !== fallbackSrc) {
          event.target.src = fallbackSrc;
        }
      }}
    />
  );
};

export default Image
