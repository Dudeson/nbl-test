import evaluateConditionExpression from './evaluateConditionExpression';

export default function parseNextScreenConditions(
  conditions: Array<[string, string]>,
  answers: Record<string, string>
): string | undefined {
  let result = undefined;
  conditions.forEach(condition => {
    const [expression, nextScreenSlug] = condition;
    const expressionResult = evaluateConditionExpression(expression, answers);
    if (expressionResult) {
      return (result = nextScreenSlug);
    }
  });
  return result;
}
