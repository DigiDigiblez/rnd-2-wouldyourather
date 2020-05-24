const truncateAnswer = (answer, truncationLimit) => {
  const answerWords = answer.match(/([\w+]+)/g);

  let truncatedWords = answerWords.slice(0, truncationLimit);
  truncatedWords = truncatedWords.map(word => (word ? `${word} ` : word.pop));

  return [...truncatedWords];
};

export default truncateAnswer;
