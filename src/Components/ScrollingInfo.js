import Bottle1 from "../images/bottle1.png";
import Earbuds from "../images/earbuds.png";
import Loofah from "../images/loofah.png";
import Straws from "../images/straws.png";
import Toothbrush from "../images/toothbrush.png";
import Container from "../images/container.png";

export default function ScrollingInfo() {
  const slideshowinfo = [
    {
      heading: "Plant Based Reusable Cups",
      description:
        "Barista's love it.Easy to clean, hassle free and Plant Based.Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable cups which can be used hundreds of times.So, every batch is unique, Just. Like. You.",
      image: Bottle1,
    },
    {
      heading: "Reusable Bamboo Straws",
      description:
        "We collaborated with artisans in Veitnam, Earthly Organic Bamboo Straws are 100% Compostable, Vegan and BPA free. They can be reused, thrown in a compost bin, or even in your backyard. Serve with cold beverages like ice tea, cold coffee and many more. ",
      image: Straws,
    },
    {
      heading: "Natural Bamboo Loofah",
      description:
        "Natural loofah sponges actually come from the fruits of vine-growing Luffa plants.These plants are part of the gourd family (Cucurbitaceae) making them relatives of watermelons, cucumbers and pumpkins. When a luffa fruit dries out and is peeled, you are left with its fibrous interior, which can be used as a sponge. It is biodegradable and is an organic, eco-friendly exfoliating body scrubber. Both men and women can use it, suitable for shower and bathtub.",
      image: Loofah,
    },
    {
      heading: "Plant Based Reusable Containers",
      description:
        "Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable containers which can be used hundreds of times.Microwave safe, seal proof, and sturdy, they are perfect to store snacks or lunch. Designed in USA. Tested in Germany.",
      image: Container,
    },
    {
      heading: "50 Bamboo Cotton Eartips",
      description:
        "Earthly Bamboo Toothbrush are BPA free, Biodegradable and have charcoal infused bristles that help remove stains effectively. We guarantee your satisfaction. See for yourself!",
      image: Earbuds,
    },
    {
      heading: "Bamboo Toothbrush (set of 2)",
      description:
        "Earthly Bamboo Toothbrush are BPA free, Biodegradable and have charcoal infused bristles that help remove stains effectively. We guarantee your satisfaction. See for yourself!",
      image: Toothbrush,
    },
  ];

  let alt = true;

  const display = slideshowinfo.map((item) => {
    alt = !alt;
    if (alt) {
      return (
        <div className="one-slide">
          <img className="slideshow--image" src={item.image} alt="0" />
          <div className="headeranddescription">
            <h1 className="heading">{item.heading}</h1>
            <p className="description">{item.description}</p>
          </div>
        </div>
      );
    }
    return (
      <div className="one-slide">
        <div className="headeranddescription">
          <h1 className="heading">{item.heading}</h1>
          <p className="description">{item.description}</p>
        </div>
        <img className="slideshow--image" src={item.image} alt="0" />
      </div>
    );
  });

  return <div className="slideshow">{display}</div>;
}
