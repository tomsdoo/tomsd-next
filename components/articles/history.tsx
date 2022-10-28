import { ReactElement } from "react";
import { gql, useQuery } from "@apollo/client";
import historyStyles from "@/styles/components/articles/history.module.css";
import { format, differenceInMonths } from "date-fns";

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

function getTerm({ start, end }): { years: number; months: number; text: string; } {
  const localStart = new Date(start);
  const localEnd = (end && new Date(end)) ?? new Date();
  const totalMonths = differenceInMonths(localEnd, localStart);
  const term = {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  };
  return {
    ...term,
    text: [term.years > 0 ? `${term.years}年` : "", `${term.months}月`].join(
      " "
    ),
  };
}
function formatYM(date?: string): string {
  return format((date && new Date(date)) ?? new Date(), "yyyy.MM");
}

interface BadgesProps {
  badges: string[];
}

function Badges({ badges, ...props }: BadgesProps): ReactElement {
  return (
    <ul {...props}>
      {badges.map((badge, index) => (
        <li key={index}>{`#${badge}`}</li>
      ))}
    </ul>
  );
}

function HistoryItem({
  history: { companyDescription, title, start, end, badges, description },
}): ReactElement {
  const term = getTerm({ start, end });
  return (
    <>
      <span className={historyStyles.term}>
        <span className={historyStyles.span}>
          {formatYM(start)} - {formatYM(end)}
        </span>
        ({term.text})
      </span>
      <div className={historyStyles.companyAndTitle}>
        <div className={historyStyles.company}>{companyDescription}</div>
        <div className={historyStyles.title}>{title}</div>
      </div>
      <Badges className={historyStyles.badges} badges={badges} />
      <div className={historyStyles.description}>{description}</div>
    </>
  );
}

export default function History(): ReactElement {
  const { loading, error, data } = useQuery(QUERY_HISTORIES);
  if (loading) {
    return;
  }
  if (error) {
    return;
  }
  return (
    <div className={historyStyles.area}>
      <ol className={historyStyles.list}>
        {data.histories.map((history, index) => (
          <li key={index} className={historyStyles.item}>
            <HistoryItem history={history} />
          </li>
        ))}
      </ol>
    </div>
  );
}
