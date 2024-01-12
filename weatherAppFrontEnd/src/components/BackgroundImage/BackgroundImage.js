const BackgroundImage = ({
  imageUrl,
  alt = "weatherApp background",
  className,
  children,
}) => {
  return (
    <div className={className} style={{ backgroundImage: `url(${imageUrl})` }}>
      <img src={imageUrl} alt={alt} className="hidden" />
      {children}
    </div>
  );
};

export default BackgroundImage;
