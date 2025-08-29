interface Skill {
  title: string;
  description: string;
  web: boolean;
  years: number;
  scoreWeb?: number;
  score?: number;
}

export function addScoreWeb(skill: Skill): Skill & { scoreWeb: number } {
  return {
    ...skill,
    scoreWeb: skill.web ? 100 : 1,
  };
}

export function addScore(skill: Skill & { scoreWeb: number }): Required<Skill> {
  return {
    ...skill,
    score: skill.scoreWeb + skill.years,
  };
}

export function extendSkill(skill: Skill): Required<Skill> {
  return [addScoreWeb, addScore].reduce(
    (currentSkill, fn) => fn(currentSkill),
    { ...skill },
  ) as Required<Skill>;
}
