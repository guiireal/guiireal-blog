import Link from "next/link";

const Title = ({ color, children }) => <h1 style={{ color }}>{children}</h1>;

export default function About() {
  return (
    <div>
      <header>
        <Title color="red">Sobre</Title>
        <img src="" alt="" />
      </header>

      <Link href="/">
        <a>Link</a>
      </Link>
    </div>
  );
}
