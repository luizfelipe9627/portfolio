import { Link } from "react-router-dom";

interface LogoDataProps {
  emphasis?: string;
  title: string;
}

export default function LogoData({ emphasis, title }: LogoDataProps) {
  return (
    <Link to="/">
      <span>{emphasis}</span>{title}
    </Link>
  );
}


