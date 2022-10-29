interface Skill {
  web: boolean;
  years: number;
  scoreWeb?: number;
  score?: number;
}

export function addScoreWeb(skill: Skill) {
  return {
    ...skill,
    scoreWeb: skill.web ? 100 : 1,
  };
}

export function addScore(skill: Skill) {
  return {
    ...skill,
    score: skill.scoreWeb + skill.years,
  };
}

export function extendSkill(skill: Skill) {
  return [addScoreWeb, addScore].reduce(
    (currentSkill, fn) => fn(currentSkill),
    { ...skill }
  );
}
