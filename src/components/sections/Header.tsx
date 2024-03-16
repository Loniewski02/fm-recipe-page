const Header: React.FC = () => {
  return (
    <header className="px-8 pb-4 pt-10 md:px-10 md:pt-5">
      <h1 className="serif mb-6 text-4xl font-normal tracking-tight text-DarkCharcoal md:text-[40px]">
        Simple Omelette Recipe
      </h1>
      <p className="font-normal text-WengeBrown">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </header>
  );
};

export default Header;
