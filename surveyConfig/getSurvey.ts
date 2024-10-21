import { Survey } from '@/interfaces/survey';

export default async function getSurvey() {
  const surveyConfig = await import('@/surveyConfig/survey1.json');
  return surveyConfig.default as Survey;
}
