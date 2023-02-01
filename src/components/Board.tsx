import { useEffect, useState } from 'react';
import Square from './Square';
import { Container, Spacer } from '@nextui-org/react';
import { Player } from '@/types';
import { Record, Toast, PlayButton } from '@/components';
import { useAppSelector, useAppDispatch } from '@/hooks';
import {
  setCurrentPlayer,
  setSquares,
  setWinner,
  setWinRecord,
} from '@/store/slice';

export default function Board({}) {
  const [showRecord, setShowRecord] = useState<Boolean>(false);

  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);
  const squares = useAppSelector((state) => state.game.squares);
  const winner = useAppSelector((state) => state.game.winner);
  const winRecord = useAppSelector((state) => state.game.winRecord);

  const dispatch = useAppDispatch();

  const reset = () => {
    dispatch(setSquares(Array(9).fill(null)));
    dispatch(setWinner(null));
    dispatch(setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? 'X' : 'O'));
    setShowRecord(false);
  };

  const calculateWinner = (squares: Player[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const setSquareValue = (index: number) => {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    dispatch(setSquares(newData));
    dispatch(setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'));
  };

  useEffect(() => {
    const w = calculateWinner(squares);
    if (w) {
      dispatch(setWinner(w));
      dispatch(
        setWinRecord({
          ...winRecord,
          // @ts-ignore
          [w]: winRecord[w] + 1,
        })
      );
    }

    if (!w && !squares.filter((square) => !square).length) {
      dispatch(setWinner('BOTH'));
    }
  }, [squares]);

  useEffect(() => {
    const showToast = () => {
      const toast = document.getElementById('liveToast');
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 2000);
      }
    };
    showToast();
  }, []);

  return (
    <>
      {!showRecord && (
        <>
          <Toast />
          <Container display='flex' justify='center'></Container>
          {!winner && currentPlayer && (
            <p>
              {currentPlayer}
              {`'`}S TURN!
            </p>
          )}
          {winner && winner !== 'BOTH' && winRecord[winner] < 2 && (
            <p> {winner} WINS</p>
          )}
          {winner && winner !== 'BOTH' && winRecord[winner] > 1 && (
            <p> {winner} WINS AGAIN!</p>
          )}
          {winner && winner === 'BOTH' && (
            <p>Congratulations you are both winners</p>
          )}
          <Spacer y={3} />

          <div className='grid'>
            {Array(9)
              .fill(null)
              .map((_, i) => {
                return (
                  <Square
                    key={i}
                    onClick={() => setSquareValue(i)}
                    value={squares[i]}
                    id={`square_${i}`}
                  />
                );
              })}
          </div>
          <Spacer y={3} />
          <PlayButton size='$2xl' color='white' onClick={reset}>
            PLAY AGAIN
          </PlayButton>
          <Spacer y={1} />
          <PlayButton
            size='$2xl'
            color='white'
            onClick={() => {
              setShowRecord(true);
            }}
          >
            SEE RECORD
          </PlayButton>
        </>
      )}

      {showRecord && <Record reset={reset} />}
    </>
  );
}
