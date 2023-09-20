import { NavLink } from "react-router-dom";

interface NavDataProps {
  iText: Array<string>;
  iClass: Array<string>;
  href: Array<string>;
}

export default function NavData({ iText, iClass, href }: NavDataProps) {
  return href.map((item, index) => {
    return (
      <li>
        <NavLink to={`/${item}`}>
          <i className={`fa fa-${iClass[index]}`}>{iText[index]}</i>
        </NavLink>{" "}
      </li>
    );
  });
}
