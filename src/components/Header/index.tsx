import Image from "next/image";

export const Header = () => {
  return (
    <Image
      width={200}
      height={80}
      src="/assets/mancjs-logo.svg"
      alt="mancjs logo"
      data-testid="header-logo-image"
    />
  );
};
