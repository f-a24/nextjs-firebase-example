import * as React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: '1rem'
  }
});

const Index: NextPage = () => {
  const classes = useStyles();
  return (
    <Contents>
      {
        [...Array(1000)].map(() => (
          <Card className={classes.root} key={`${Math.random()}`}>
            <CardContent>
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
        </CardContent>
          </Card>
        ))
      }
    </Contents>
  );
};

export default Index;


const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;
