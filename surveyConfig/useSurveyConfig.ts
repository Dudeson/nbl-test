import { Survey } from '@/interfaces/survey';
import { useEffect, useState } from 'react';
import getSurvey from './getSurvey';

export default function useSurveyConfig() {
  const [surveyConfig, setSurveyConfig] = useState<Survey>();

  useEffect(() => {
    getSurvey().then(data => setSurveyConfig(data));
  }, []);

  return surveyConfig;
}
