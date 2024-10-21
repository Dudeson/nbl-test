'use client';

import { SurveyScreenConfig } from '@/interfaces/survey';
import ScreenHeader from '@/app/components/screens/ScreenHeader/ScreenHeader';
import styles from './SurveyScreen.module.css';
import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';
import AnswerButton from '../../AnswerButton/AnswerButton';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { saveAnswer } from '@/store/slices/surveySlice';
import { useRouter } from 'next/navigation';
import { getNextScreen, parseScreenTitle } from '@/utils';
import classNames from 'classnames';

export default function SurveyScreen({
  config,
}: {
  config: SurveyScreenConfig;
}) {
  const {
    slug,
    title,
    subtitle,
    description,
    options,
    nextScreen,
    action,
    screenType,
  } = config;
  const navigate = useRouter();
  const dispatch = useAppDispatch();
  const answers = useAppSelector(state => state.survey.answers);

  const isInfoScreen = screenType === 'info';

  const navigateToNextScreen = () => {
    let nextScreenSlug: string | undefined;

    if (nextScreen) {
      nextScreenSlug = getNextScreen(nextScreen, answers);
    }

    navigate.push(`/survey/${nextScreenSlug || 'results'}`);
  };

  const handleOption = (answer: string) => {
    dispatch(saveAnswer({ screenSlug: slug, answer }));
    navigateToNextScreen();
  };

  return (
    <div
      className={classNames(
        styles.questionScreen,
        isInfoScreen && styles.infoScreen
      )}
    >
      <ScreenWrapper>
        <ScreenHeader inverseColors={isInfoScreen} />
        <div className={styles.content}>
          <h2 className={styles.title}>{parseScreenTitle(title, answers)}</h2>
          {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
          {description && <p className={styles.infoText}>{description}</p>}
          {options?.map(option => (
            <AnswerButton
              option={option}
              onSelect={handleOption}
              key={option.value.toString()}
            />
          ))}
          {action && (
            <button
              className={styles.actionButton}
              onClick={navigateToNextScreen}
            >
              {action}
            </button>
          )}
        </div>
      </ScreenWrapper>
    </div>
  );
}
