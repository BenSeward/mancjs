import Image from "next/image";

export const Header = () => {
  return (
    <Image
      width={200}
      height={200}
      src="/assets/mancjs-logo.svg"
      alt="mancjs logo"
      data-testid="header-logo-image"
    />
  );
};
