'use client';

import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import useSurveyConfig from '@/surveyConfig/useSurveyConfig';

export default function Home() {
  const navigate = useRouter();
  const surveyConfig = useSurveyConfig();

  const handleStartSurvey = () => {
    if (surveyConfig) {
      navigate.push(`/survey/${surveyConfig.startScreen}`);
    } else {
      console.error('Survey config not loaded');
    }
  };

  return (
    <div className={styles.page}>
      <button className="buttonDefault" onClick={handleStartSurvey}>
        Start survey
      </button>
    </div>
  );
}
