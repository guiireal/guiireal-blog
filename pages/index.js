import styled from "styled-components";

import Link from "next/link";

import Footer from "../components/Footer";

const SubTitle = styled.h2`
  background-color: var(--primary);
  color: white;
  display: inline-block;
  padding: 5px;
`;

export default function Home({ avatar_url, repos }) {
  return (
    <div>
      <header className="header-container">
        <img src={avatar_url} alt="Profile" />
        <Link href="/about">
          <a>
            <h1>GuiiReal Blog</h1>
          </a>
        </Link>
      </header>
      <section className="posts-container">
        <SubTitle>Repositórios Favoritos</SubTitle>
        {repos.map(({ repo, description }) => (
          <article key={repo} className="posts-container__post">
            <a href="/">{repo}</a>
            <p>{description}</p>
          </article>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const { avatar_url } = await fetch(
    "https://api.github.com/users/guiireal"
  ).then((response) => response.json());

  const repos = await fetch(
    "https://gh-pinned-repos.now.sh?username=guiireal"
  ).then((response) => response.json());

  return {
    props: {
      avatar_url,
      repos,
    },
  };
}
