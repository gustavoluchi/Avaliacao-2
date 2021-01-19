import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button variant="outlined" css={{'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)'}} color="secondary" component={Link} naked href="/">
          Go to the main page
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}