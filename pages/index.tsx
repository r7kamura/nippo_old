import type { NextPage } from "next";
import Link from "next/link";
import { listIssues } from "../lib/issue";

type Props = {
  issues: Array<Issue>;
};

type Issue = any;

const Home: NextPage<Props> = ({ issues }) => {
  console.log(issues);

  return (
    <section>
      <ol>
        {issues.map((issue) => (
          <li key={issue.number}>
            <Link href={`/articles/${issue.number}`}>
              <a>{issue.title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      issues: await listIssues(),
    },
  };
}
