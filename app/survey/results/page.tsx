'use client';

import ScreenHeader from '@/app/components/screens/ScreenHeader/ScreenHeader';
import ScreenWrapper from '@/app/components/screens/ScreenWrapper/ScreenWrapper';
import { resetSurvey } from '@/store/slices/surveySlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function ResultsPage() {
  const answers = useAppSelector(state => state.survey.answers);
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  const handleStartOver = () => {
    dispatch(resetSurvey());
    navigate.push('/');
  };

  return (
    <ScreenWrapper>
      <ScreenHeader />
      <div className={styles.content}>
        <h2>Survey Results</h2>
        <pre>{JSON.stringify(answers, null, 2)}</pre>
        <button className="buttonDefault" onClick={handleStartOver}>
          Start over
        </button>
      </div>
    </ScreenWrapper>
  );
}
