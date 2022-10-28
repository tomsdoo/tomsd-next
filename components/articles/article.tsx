import { ReactElement } from "react";
import { gql, useQuery } from "@apollo/client";

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
  const { loading, error, data } = useQuery(QUERY_ARTICLE, {
    variables: { id: articleId },
  });
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
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
