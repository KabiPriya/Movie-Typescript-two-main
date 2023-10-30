export interface IMovieAdd {
  title: string;
  year: number;
}
export interface IMovie {
  id: number;
  title: string;
  year: number;
}
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface IEdit {
  movie: IMovie;
}
