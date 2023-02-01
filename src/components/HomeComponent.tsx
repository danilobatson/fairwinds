import { Text, Grid, styled, Container } from '@nextui-org/react';
import { SelectionIndicators, MatchButton } from '@/components';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { setLoading, setCurrentPlayer, setMatched } from '@/store/slice';

export default function HomeComponent({}) {
  // ALLOWS FOR DYNAMIC COLOR CHANGE

  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);
  const loading = useAppSelector((state) => state.game.loading);
  const dispatch = useAppDispatch();

  const XIndicator = styled(SelectionIndicators, {
    backgroundColor: currentPlayer === 'X' ? '#5cb85c' : 'white',
  });

  const YIndicator = styled(SelectionIndicators, {
    backgroundColor: currentPlayer === 'O' ? '#5cb85c' : 'white',
  });

  const clickMatch = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
      dispatch(setMatched(true));
    }, 2000);
  };

  return (
    <>
      {!loading && (
        <Grid.Container gap={10} justify='center' wrap='wrap'>
          <Grid xs={12} justify='center'>
            <Text size='$3xl'>WELCOME</Text>
          </Grid>

          <Grid xs={12} justify='center'>
            <Text size='$3xl'>PICK YOUR PLAYER</Text>
          </Grid>

          <Grid xs={3} justify='center'>
            <Container
              display='flex'
              direction='column'
              alignItems='center'
              css={{ cursor: 'pointer' }}
              onClick={() => {
                dispatch(setCurrentPlayer('X'));
              }}
            >
              <Text size={80}>X</Text>
              <XIndicator />
            </Container>
          </Grid>

          <Grid xs={3} justify='center'>
            <Container
              display='flex'
              direction='column'
              alignItems='center'
              onClick={() => {
                dispatch(setCurrentPlayer('O'));
              }}
              css={{ cursor: 'pointer' }}
            >
              <Text size={80}>O</Text>
              <YIndicator />
            </Container>
          </Grid>

          <Grid xs={12} justify='center'>
            <MatchButton size='$2xl' color='white' onClick={clickMatch}>
              MATCH ME WITH MY OPPONENT
            </MatchButton>
          </Grid>
        </Grid.Container>
      )}
      {loading && (
        <Grid.Container gap={10} justify='center' wrap='wrap'>
          <Grid xs={12} justify='center'>
            <Text size='$3xl'>Waiting to find your opponent...</Text>
          </Grid>

          <Grid xs={3} justify='center'>
            <Container display='flex' direction='column' alignItems='center'>
              <Text size={80}>X</Text>
            </Container>
          </Grid>

          <Grid xs={3} justify='center'>
            <Container display='flex' direction='column' alignItems='center'>
              <Text size={80}>O</Text>
            </Container>
          </Grid>

          <Grid xs={12} justify='center'></Grid>
        </Grid.Container>
      )}
    </>
  );
}
