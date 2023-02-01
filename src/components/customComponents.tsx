import { Text, styled, Container } from '@nextui-org/react';

export const PlayButton = styled(Text, {
  backgroundColor: '#201238',
  padding: '0.2em 1em',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#48536f',
  },
  width: '30%',
  display: 'flex',
  justifyContent: 'center',
});


  export const SelectionIndicators = styled(Container, {
    width: '50%',
    height: '5px',
  });

  export const MatchButton = styled(Text, {
    backgroundColor: '#201238',
    padding: '0.2em 1em',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#48536f',
    },
  });
