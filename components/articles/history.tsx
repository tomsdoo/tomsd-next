import { gql, useQuery } from "@apollo/client";
import historyStyles from "@/styles/components/articles/history.module.css";

const QUERY_HISTORIES = gql(`
  query histories {
    histories {
      title
      start
      end
      companyDescription
      description
      badges
    }
  }
  `);

function Badges({ badges, ...props }){
  return (
    <ul {...props}>
      {badges.map(badge => <li>{`#${badge}`}</li>)}
    </ul>
  );
}

function HistoryItem({history: { companyDescription, title, start, end, badges, description }}){
  return (
    <>
      <span className={historyStyles.term}>{start} - {end}</span>
      <div className={historyStyles.company}>{companyDescription}</div>
      <div className={historyStyles.title}>{title}</div>
      <Badges className={historyStyles.badges} badges={badges} />
      <div className={historyStyles.description}>{description}</div>
    </>
  );
}

export default function History(){
  const { loading, error, data } = useQuery(QUERY_HISTORIES);
  if(loading){return;}
  if(error){return;}
  return (
    <ol className={historyStyles.list}>
      {data.histories.map(history => <li className={historyStyles.item}><HistoryItem history={history} /></li>)}
    </ol>
  );
}
