import { Instagram, Facebook, Twitter, Telegram } from "../../components/Icons";

const Footer = () => {
  return (
    <div className="footer mx-[10px] md:mx-[80px] lg:mx-[160px] block md:flex">
      <div className="py-[24px]">
        Copyright © 2021 Tronix. All Right Reseved
      </div>
      <div className="footer-contact">
        <button style={{ backgroundColor: "#8bbff0" }}>
          <Instagram />
        </button>
        <button style={{ backgroundColor: "#8bbff0" }}>
          <Twitter />
        </button>
        <button style={{ backgroundColor: "#8bbff0" }}>
          <Facebook />
        </button>
        <button style={{ backgroundColor: "#8bbff0" }}>
          <Telegram />
        </button>
      </div>
    </div>
  );
};

export default Footer;
