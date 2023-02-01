import { Text, Grid } from '@nextui-org/react';
import { Player } from '@/types';
import { PlayButton } from '@/components';
import { useAppSelector, useAppDispatch } from '@/hooks';

interface RecordProps {
  reset: () => void;
}

export default function Record({ reset }: RecordProps) {
  const winner = useAppSelector((state) => state.game.winner);
  const winRecord = useAppSelector((state) => state.game.winRecord);

  return (
    <Grid.Container gap={10} justify='center' wrap='wrap'>
      <Grid xs={12} justify='center'>
        {winner && winner !== 'BOTH' && winRecord[winner] < 2 && (
          <p> {winner} WINS</p>
        )}
        {winner && winner !== 'BOTH' && winRecord[winner] > 1 && (
          <p> {winner} WINS AGAIN!</p>
        )}
      </Grid>

      {winner && (
        <Grid xs={12} justify='center'>
          <Text size='$3xl'>
            You have won {winRecord[winner]} times and lost{' '}
            {winRecord.O + winRecord.X - winRecord[winner]} times
          </Text>
        </Grid>
      )}

      <Grid xs={12} justify='center'>
        <PlayButton size='$2xl' color='white' onClick={reset}>
          PLAY AGAIN
        </PlayButton>
      </Grid>
    </Grid.Container>
  );
}
