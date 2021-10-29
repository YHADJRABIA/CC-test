import { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <img
        className="banner"
        src="/banner.png"
        alt="Chefclub's banner"
        data-testid="banner"
        title="Banner"
      />
    </header>
  );
};

export default Header;
