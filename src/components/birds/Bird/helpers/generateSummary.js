/**
  Generates a summary string from a given bird.
  */
const generateSummary = bird => {
  var summary = [];

  bird.life_stage !== 'Undetermined' && summary.push(bird.life_stage);
  summary.push(bird.sex);
  summary.push(bird.primary_band);

  return summary.join(' · ');
};

export default generateSummary;
