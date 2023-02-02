import { Navigation } from "./Navigation";
import { UpperNav } from "./UpperNav";

export const Header = () => {
  return (
    <>
      <header>
        <UpperNav />
        <Navigation />
      </header>
    </>
  );
};
