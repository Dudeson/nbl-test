import React from 'react';
import { SurveyScreenConfig } from '@/interfaces/survey';
import SurveyScreen from '@/app/components/screens/SurveyScreen/SurveyScreen';
import getSurvey from '@/surveyConfig/getSurvey';

export async function generateStaticParams() {
  const surveyConfig = await getSurvey();
  const screenSlugs = surveyConfig.screens.map(screen => screen.slug);

  return screenSlugs.map(slug => ({ slug: slug }));
}

async function getScreen(screenSlug: string) {
  const surveyConfig = await getSurvey();
  const screen = surveyConfig.screens.find(
    screen => screen.slug === screenSlug
  );

  return screen as SurveyScreenConfig;
}

export default async function QuestionPage({
  params,
}: {
  params: { slug: string };
}) {
  const config = await getScreen(params.slug);

  if (!config) {
    return <h1>Screen not found</h1>;
  }

  return <SurveyScreen config={config} />;
}
