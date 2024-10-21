export type AnswerOption = {
  value: string;
  label: string;
};

type ScreenType = 'question' | 'info' | 'form';

export type NextScreenConditions = {
  conditions: [string, string][];
};

export type SurveyScreenConfig = {
  slug: string;
  screenType: ScreenType;
  title: string;
  options?: AnswerOption[];
  action?: string;
  subtitle?: string;
  nextScreen?: string | NextScreenConditions;
  description?: string;
};

export type Survey = {
  id: string;
  title: string;
  startScreen: string;
  screens: SurveyScreenConfig[];
};
