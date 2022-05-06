import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  getIssue,
  listIssues,
  listIssueComments,
  type Issue,
  type IssueComment,
} from "../../lib/issue";
import Time from "../../components/Time";
import formatToDate from "../../lib/time";

type Props = {
  issue: Issue;
  issueComments: Array<IssueComment>;
};

const ShowArticle: NextPage<Props> = ({ issue, issueComments }) => {
  return (
    <article>
      <Head>
        <title>{formatToDate(issue.created_at)}</title>
      </Head>
      <section>
        <header>
          <h1>
            <Time dateTime={issue.created_at} />
          </h1>
        </header>
        <aside>
          <p>
            Posted by&nbsp;
            <Link href={issue.user.html_url}>{issue.user.login}</Link>
            &nbsp;at&nbsp;
            <Link href={issue.html_url}>{`#${issue.number}`}</Link>.
          </p>
        </aside>
        <div dangerouslySetInnerHTML={{ __html: issue.bodyHTML }}></div>
      </section>
      {issueComments.map((issueComment) => (
        <article key={issueComment.id}>
          <section>
            <div
              dangerouslySetInnerHTML={{ __html: issueComment.bodyHTML }}
            ></div>
          </section>
        </article>
      ))}
    </article>
  );
};

export default ShowArticle;

export async function getStaticPaths() {
  const paths = listIssues().map((issue) => {
    return {
      params: {
        issueNumber: issue.number.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const issueNumber = parseInt(params.issueNumber, 10);
  const issue = getIssue({ issueNumber });
  const issueComments = listIssueComments({ issueNumber });
  return {
    props: {
      issue,
      issueComments,
    },
  };
}
