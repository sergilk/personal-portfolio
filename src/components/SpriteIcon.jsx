const SpriteIcon = ({ icon, className }) => {
  return (
    <svg className={className}>
      <use href={`./assets/icons/techs/sprite.svg#${icon}`} />
    </svg>
  );
};

export default SpriteIcon;
