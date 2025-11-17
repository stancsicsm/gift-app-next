import Image from "next/image";
import footerLogoSrc from "@/components/Footer/assets/footer-logo.svg";
import Label from "@/components/Label/Label";

const Footer = () => {
  return (
    <footer className="footer footer-center px-4 pt-12 pb-24">
      <aside>
        <Image src={footerLogoSrc} alt="Footer Logo" className="w-16 h-auto" />
        <Label subtle>Developed by Pocok és Társa</Label>
        <Label subtle className="link pt-4">
          Send us feedback
        </Label>
      </aside>
    </footer>
  );
};

export default Footer;
