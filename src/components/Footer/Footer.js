const Footer = () => {
  const copyRight = new Date();
  return (
    <div className="bg-dark text-light text-center rounded p-5">
      Copyright &copy; {copyRight.getFullYear()}
    </div>
  );
};

export default Footer;
