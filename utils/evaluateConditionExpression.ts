export default function evaluateConditionExpression(
  expression: string,
  answers: Record<string, string>
): boolean {
  const conditionMatch = expression.match(/(\w+)\s*([=!]+)\s*(.+)/);
  if (conditionMatch) {
    const [, variable, operator, comparisonValue] = conditionMatch;
    const userValue = answers[variable];

    switch (operator) {
      case '==':
        return userValue == comparisonValue;
      case '!=':
        return userValue != comparisonValue;
      default:
        return false;
    }
  }

  return false;
}
