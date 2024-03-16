import Item from "../layout/Item";

const DUMMY_DATA: { id: number; name: string; desc: string }[] = [
  { id: 1, name: "Total", desc: "Approximately 10 minutes" },
  { id: 2, name: "Preparation", desc: "5 minutes" },
  { id: 3, name: "Cooking", desc: "5 minutes" },
];

const Preparation: React.FC = () => {
  return (
    <section className="px-8 py-4 md:px-10">
      <div className="rounded-xl bg-RoseWhite p-6 md:p-7 ">
        <h2 className="mb-4 text-xl font-semibold text-DarkRaspberry">
          Preparation time
        </h2>
        <ul className="flex list-none flex-col gap-2">
          {DUMMY_DATA.map((item) => (
            <Item className="block h-1 min-h-1 w-1 min-w-1 rounded-full bg-DarkRaspberry ">
              <span className="font-bold">{item.name}: </span>
              {item.desc}
            </Item>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Preparation;
