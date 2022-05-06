import type { NextPage } from "next";
import Link from "next/link";
import { listIssues } from "../lib/issue";
import Time from "../components/Time";

type Props = {
  issues: Array<Issue>;
};

type Issue = any;

const Home: NextPage<Props> = ({ issues }) => {
  return (
    <section>
      <ol>
        {issues.map((issue) => (
          <li key={issue.number}>
            <Link href={`/articles/${issue.number}`}>
              <a>
                <Time dateTime={issue.created_at} />
              </a>
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
      issues: listIssues(),
    },
  };
}
