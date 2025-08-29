import { ReactElement } from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const QUERY_ARTICLE = gql(`
  query article($id: Int!) {
    article(id: $id) {
      id
      title
      content
    }
  }
  `);

const Article = ({ articleId }): ReactElement => {
  const { loading, error, data } = useQuery<{
    article: {
      id: number;
      title: string;
      content: string;
    };
  }>(QUERY_ARTICLE, {
    variables: { id: articleId },
  });
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  if (data == null) {
    return <div>no data</div>;
  }

  return (
    <div>
      <div>{data.article.id}</div>
      <div>{data.article.title}</div>
      <div>{data.article.content}</div>
    </div>
  );
};

export default Article;
