import evaluateCondition from './evaluateCondition';

export default function parseNextScreenConditions(
  conditions: Array<[string, string]>,
  answers: Record<string, string>
): string | undefined {
  let result = undefined;
  conditions.forEach(condition => {
    const [expression, nextScreenSlug] = condition;
    const expressionResult = evaluateCondition(expression, answers);
    if (expressionResult) {
      return (result = nextScreenSlug);
    }
  });
  return result;
}
