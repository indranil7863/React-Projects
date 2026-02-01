const Button = ({ title, imgLink }) => {
  console.log(imgLink);
  return (
    <div className="button" title={title}>
      <img src={imgLink} alt="image" />
    </div>
  );
};

export default Button;
