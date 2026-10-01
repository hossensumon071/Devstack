
interface LogoProps {
  className?: string;
}

const Logo = ({className = "h-8 lg:h-9"} : LogoProps) => {
  return (
      <a href="/" className="logo">
        <img src="devstacklogo.svg" alt="Dev Stack" className={className} />
      </a>
  );
};

export default Logo;
