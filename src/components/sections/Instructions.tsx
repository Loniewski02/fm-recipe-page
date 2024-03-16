import Heading from "../layout/Heading";
import Item from "../layout/Item";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Beat the eggs",
    desc: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    id: 2,
    title: "Heat the pan",
    desc: "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    id: 3,
    title: "Cook the omelette",
    desc: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    id: 4,
    title: "Add fillings (optional)",
    desc: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    id: 5,
    title: "Fold and serve",
    desc: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    id: 6,
    title: "Enjoy",
    desc: "Serve hot, with additional salt and pepper if needed.",
  },
];

const Instructions: React.FC = () => {
  return (
    <section className="px-8 py-8 md:px-10">
      <Heading>Instructions</Heading>
      <ul className="flex flex-col gap-2">
        {DUMMY_DATA.map((item, index) => (
          <Item
            key={item.id}
            className=" text-BrandyRed font-bold"
            isTop={true}
            symbol={index+1 + "."}
          >
            <span className="font-bold">{item.title}: </span>
            {item.desc}
          </Item>
        ))}
      </ul>
    </section>
  );
};

export default Instructions;
