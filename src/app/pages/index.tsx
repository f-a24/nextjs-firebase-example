import * as React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../apollo/client';

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: '1rem'
  }
});

const ViewerQuery = gql`
query ViewerQuery {
  users {
    name
  }
}
`;

const Index: NextPage = () => {
  const classes = useStyles();
  const { data }= useQuery(ViewerQuery);

  return (
    <Contents>
      <h1>{data && data.users[0].name}</h1>
      {
        [...Array(5)].map(() => (
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

export default withApollo(Index);

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;
