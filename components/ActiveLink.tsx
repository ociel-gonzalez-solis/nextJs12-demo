import Link from "next/link";
import { useRouter } from "next/router";
import { NavBarStyles } from ".";
import { FC } from "react";

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={`/${href}`}>
      <a className={asPath === href ? NavBarStyles["active-link"] : ""}>
        {text}
      </a>
    </Link>
  );
};
