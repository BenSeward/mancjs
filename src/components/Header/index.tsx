import Image from "next/image";
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={ styles.header }>
      <Image
        width={200}
        height={80}
        src="/assets/mancjs-logo.svg"
        alt="mancjs logo"
        data-testid="header-logo-image"
      />
    </div>

  );
};
