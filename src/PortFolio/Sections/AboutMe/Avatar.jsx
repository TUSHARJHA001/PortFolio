const Avatar = ({ className }) => {
  return (
    <img 
      src="/Portfolio/assets/avatar.svg" 
      alt="Avatar" 
      className={className || "w-48 h-48"} 
    />
  );
};

export default Avatar;
