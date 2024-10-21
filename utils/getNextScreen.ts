import { NextScreenConditions } from '@/interfaces/survey';
import parseNextScreenConditions from './parseNextScreenConditions';

export default function getNextScreen(
  nextScreen: string | NextScreenConditions,
  answers: Record<string, string>
): string | undefined {
  console.log('getNextScreen', nextScreen);
  if (typeof nextScreen === 'string') {
    return nextScreen;
  } else if (nextScreen.conditions) {
    return parseNextScreenConditions(nextScreen.conditions, answers);
  }
}
