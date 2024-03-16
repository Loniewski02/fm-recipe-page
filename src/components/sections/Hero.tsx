import headerImage from "../../assets/image-omelette.jpeg";

const Hero: React.FC = () => {
  return (
    <section className="md:p-10 md:pb-5">
      <img
        src={headerImage}
        alt=""
        className="h-full max-h-[300px] w-full object-cover md:rounded-xl"
      />
    </section>
  );
};

export default Hero;
