import Heading from "../layout/Heading";

const DUMMY_DATA = [
  { id: 1, title: "Calories", value: "277g" },
  { id: 2, title: "Carbs", value: "0g" },
  { id: 3, title: "Protein", value: "20g" },
  { id: 4, title: "Fat", value: "22g" },
];

const Nutrition: React.FC = () => {
  return (
    <section className="p-8 pt-8 md:p-10">
      <Heading>Nutrition</Heading>
      <p className=" mb-6 text-WengeBrown">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div>
        {DUMMY_DATA.map((item) => (
          <p className="text-BrandyRed flex border-b-[1px] border-LightGrey py-3">
            <span className="w-[50%] pl-8">{item.title}</span>
            <span className=" w-[50%]">{item.value}</span>
          </p>
        ))}
      </div>
    </section>
  );
};

export default Nutrition;
