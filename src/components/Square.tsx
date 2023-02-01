import { Container } from '@nextui-org/react';
import { Player } from '@/types';

interface SquareProps {
  value: Player;
  onClick: () => void;
  id: string;
}

export default function Square({
  value,
  onClick,
  id,
}: SquareProps) {
  const idVal = parseInt(id.slice(-1));

  if (!value) {
    return (
      <Container
        id={id}
        onClick={onClick}
        css={{
          borderBottom: idVal < 6 ? '5px solid #84999f' : 'none',
          borderLeft: idVal % 3 !== 0 ? '5px solid #84999f' : 'none',
          width: '7rem',
          height: '7rem',
          margin: '-1px',
          cursor: 'pointer',
        }}
        justify='center'
        display='flex'
      />
    );
  }
  return (
    <Container
      css={{
        borderBottom: idVal < 6 ? '5px solid #84999f' : 'none',
        borderLeft: idVal % 3 !== 0 ? '5px solid #84999f' : 'none',
        width: '7rem',
        height: '7rem',
        margin: '-1px',
        cursor: 'pointer',
      }}
      justify='center'
      display='flex'
      id={id}
      className={`square square_${value.toLocaleLowerCase()}`}
    >
      {value}
    </Container>
  );
}
