import navList from "../data/navigation.json";

export const Navigation = () => {
  return (
    <ul>
      {navList.map((navItem, index) => {
        return (
          <li key={index}>
            <a href={navItem.url}>{navItem.title}</a>
          </li>
        );
      })}
    </ul>
  );
};
