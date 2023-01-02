export interface IQuestionProps {
    name: string;
    img: string;
    question: string;
    userId: string;
    id: string;
    handleDelete(id: string): void;
    handlePagePost?(id: string): void;
  }
  