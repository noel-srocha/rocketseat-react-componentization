import { GenreResponseProps } from '../@types/types';
import { Button } from './Button';

interface SideBarProps {
  genres: GenreResponseProps[],
  selectedGenreId: number,
  handleClickButton: Function,
}

export function SideBar(props: SideBarProps) {
  // Complete aqui
  const { genres, selectedGenreId, handleClickButton} = props;
  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
  );
}