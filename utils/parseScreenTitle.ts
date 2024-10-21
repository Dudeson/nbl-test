import evaluateConditionExpression from './evaluateConditionExpression';

export default function parseScreenTitle(
  template: string,
  answers: Record<string, string>
): string {
  template = template.replace(/\{(\w+)\}/g, (_, variable) => {
    return answers[variable] !== undefined
      ? answers[variable]
      : `{not found: ${variable}}`;
  });

  const conditionalRegex = /\{#if ([^}]+)\}([\s\S]*?)\{\/if\}/g;

  template = template.replace(conditionalRegex, (_, condition, content) => {
    const conditionResult = evaluateConditionExpression(condition, answers);
    return conditionResult ? content : '';
  });

  return template;
}
