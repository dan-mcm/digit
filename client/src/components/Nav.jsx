import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CustomNav = styled.div`
  background-repeat: repeat;
  background-color: black;
  min-width: 600px;
`;

const CustomReactLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  &:hover {s
    text-decoration: none;
    color: gold;
  }
`;

export default class Nav extends Component {
  render() {
    return (
      <CustomNav>
        <Flex flexWrap="wrap">
          <Box px={2} py={3} width={[1, 1 / 3]}>
            <CustomReactLink to="/">HOME</CustomReactLink>
          </Box>
          <Box px={2} py={3} width={[1, 1 / 3]}>
            <CustomReactLink to="/leaderboard">LEADERBOARD</CustomReactLink>
          </Box>
          <Box px={2} py={3} width={[1, 1 / 3]}>
            <CustomReactLink to="/battles">BATTLES</CustomReactLink>
          </Box>
        </Flex>
      </CustomNav>
    );
  }
}
