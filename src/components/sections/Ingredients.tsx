import Heading from "../layout/Heading";
import Item from "../layout/Item";

const DUMMY_DATA = [
  { id: 1, desc: "2-3 large eggs" },
  { id: 2, desc: "Salt, to taste" },
  { id: 3, desc: "Pepper, to taste" },
  { id: 4, desc: "1 tablespoon of butter or oil" },
  {
    id: 5,
    desc: "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  },
];

const Ingredients: React.FC = () => {
  return (
    <section className="px-8 pb-8 pt-4 md:px-10">
      <Heading>Ingredients</Heading>
      <ul className="flex flex-col gap-2 md:gap-[10px]">
        {DUMMY_DATA.map((item) => (
          <Item
            key={item.id}
            className="bg-BrandyRed block h-1 min-h-1 w-1 min-w-1 rounded-full "
          >
            {item.desc}
          </Item>
        ))}
      </ul>
    </section>
  );
};

export default Ingredients;
