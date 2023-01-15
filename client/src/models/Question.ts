export interface IQuestionProps {
    name: string | undefined;
    img: string;
    question: string;
    userId: string;
    id: string;
    handleDelete(id: string): void;
    handlePagePost?(id: string): void;
    handleOrientationUsers?(id: string): void;
  }
  