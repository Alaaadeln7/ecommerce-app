import "./about.css";
import about_image from "../../assets/about_image.png";
import LoadingImage from "../../components/LoadingImage";
import { FaShop } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import Feature from "./Feature";
import employes from "../../data/employes";
import Employee from "./Employee";
import services from "../../data/services";
import Services from "./Services";
export default function About() {
  const printEmploies = employes.map((item) => (
    <Employee name={item.name} jobTitle={item.jobTitle} image={item.image} />
  ));
  const printServices = services.map((item) => (
    <Services
      icon={item.icon}
      title={item.title}
      description={item.description}
    />
  ));
  return (
    <section className="about__section">
      <div className="row about__container d-flex justify-content-around align-items-center gap-2 flex-wrap ">
        <div className="about__content col">
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="about__image col">
          <LoadingImage src={about_image} alt={"about image"} />
        </div>
      </div>
      <div className="features__container m-5 d-flex justify-content-around align-items-center flex-wrap gap-1 ">
        <Feature
          text={"Sallers active our site"}
          title={"45K"}
          icon={<FaShop />}
        />
        <Feature
          text={"Mopnthly Produduct Sale"}
          title={"33K"}
          icon={<FaShoppingBasket />}
        />
        <Feature
          text={"Customer active in our site"}
          title={"55K"}
          icon={<MdOutlineAttachMoney />}
        />
        <Feature
          text={"Anual gross sale in our site"}
          title={"20K"}
          icon={<LuShoppingBag />}
        />
      </div>
      <div className="employes__container m-5 d-flex justify-content-around align-items-center flex-wrap gap-1">
        {printEmploies}
      </div>
      <div className="services m-5 d-flex justify-content-around align-items-center flex-wrap gap-1 ">
        {printServices}
      </div>
    </section>
  );
}
