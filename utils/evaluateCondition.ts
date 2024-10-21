import { Parser } from 'expr-eval';

export default function evaluateCondition(
  expression: string,
  answers: Record<string, string>
): boolean {
  const parser = new Parser();

  if (expression === 'fallback') {
    return true;
  }

  try {
    const expr = parser.parse(expression);
    const result = expr.evaluate(answers);

    return Boolean(result);
  } catch (error) {
    console.error('Evaluation error:', error);
  }

  return false;
}
