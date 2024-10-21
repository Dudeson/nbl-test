import { AnswerOption } from '@/interfaces/survey';
import styles from './AnswerButton.module.css';

type AnswerButtonProps = {
  option: AnswerOption;
  onSelect: (option: string) => void;
};

export default function AnswerButton({ option, onSelect }: AnswerButtonProps) {
  return (
    <button
      className={styles.answerButton}
      onClick={() => onSelect(option.value)}
    >
      {option.label}
    </button>
  );
}
