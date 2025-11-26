import Image from "next/image";
import Label from "@/components/Label/Label";

const Footer = () => {
  return (
    <footer className="footer footer-center px-4 pt-12 pb-24">
      <aside>
        <Image
          src="/footer-logo.svg"
          alt="Footer Logo"
          width={64}
          height={64}
          className="w-16 h-auto"
        />
        <Label subtle>Pocok és Társa</Label>
        {/*<Label subtle className="link pt-4">*/}
        {/*  Send us feedback*/}
        {/*</Label>*/}
      </aside>
    </footer>
  );
};

export default Footer;
