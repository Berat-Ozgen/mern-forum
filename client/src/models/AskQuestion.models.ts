export interface QuestionsPost {
    userId: string;
    username: string;
    des: string;
  }

export type AskQuestionProps = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
  };