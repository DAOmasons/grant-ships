// Import necessary Material UI components
import { Typography, Card, CardContent, Grid } from '@mui/material';
import grantShipsLogo from '../assets/rocket.png';
import '../style/App.css';

function AboutPage() {
  const cardStyle = {
    backgroundColor: 'transparent', // Making the card background transparent
    color: 'white', // Setting text color to white
  };

  return (
    <div style={{ color: 'white' }}>
      {/* ASCII Art for Section Header */}
      {/* ================================== */}
      {/*          AboutPage Header         */}
      {/* ================================== */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <img
            src={grantShipsLogo}
            className="logo grantships"
            alt="Grant Ships logo"
          />
          <Typography variant="h2" gutterBottom align="center">
            About Grant Ships
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h5" gutterBottom style ={{ textDecoration: 'underline' }}>
                An Evolutionary Grants Game in the Arbitrum Ecosystem
              </Typography>
              <Typography paragraph>
                Welcome to the innovative world of Grant Ships, a groundbreaking game designed to reshape the allocation of community funding within the Arbitrum ecosystem. This platform is a testament to the power of decentralized governance and community-driven initiatives.
              </Typography>
              <Typography variant="h5" gutterBottom style ={{ textDecoration: 'underline' }}>
                The Grant Ships Concept
              </Typography>
              <Typography paragraph>
              Grant Ships is more than just a funding mechanism; it is a strategic game that brings life to decentralized governance. By gamifying the process of grant distribution, it seeks to enhance participation, effectiveness, and inclusivity within the Arbitrum ecosystem.
              </Typography>
              <Typography variant="h5" gutterBottom style ={{ textDecoration: 'underline' }}>
               Roles in Grant Ships 
              </Typography>
              <Typography variant="h6" gutterBottom>
                Delegated Arbitrum Voters 
              </Typography>
              <Typography paragraph>
                Delegated voters play a pivotal role in shaping the Grant Ships program. They are responsible for electing Grant Ships, voting in allocation rounds, and ensuring the integrity of the ecosystem. 
              </Typography>
              <Typography variant="h6" gutterBottom>
                Game Facilitators 
              </Typography>
              <Typography paragraph>
                These crucial players oversee the distribution of funds to grant recipients, ensuring compliance with the rulebook and maintaining the overall health of the game.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Grantees
              </Typography>  
              <Typography paragraph>
                Participants who receive funding through Grant Ships. They are responsible for delivering on their proposals and keeping the community updated on their progress.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Grant Ship Operators 
              </Typography>
              <Typography paragraph>
                Teams selected to operate a Grant Ship, responsible for stewarding funds, designing grant programs, and ensuring transparent and effective grant distribution
              </Typography>
              <Typography variant="h5" gutterBottom style ={{ textDecoration: 'underline' }}>
                The Game Mechanics 
              </Typography>
              <Typography paragraph>
                From the setup phase to the allocation of funds, Grant Ships operates as an engaging game. Participants undergo a process of proposal submission, community voting, and transparent fund allocation, all driven by the collective decision-making of the Arbitrum community.
              </Typography>
              <Typography variant="h5" gutterBottom style ={{ textDecoration: 'underline' }}>
                Community and Decentralization 
              </Typography>
              <Typography paragraph>
                At the core of Grant Ships is the community. The decentralized nature of the game ensures that power and decision-making are distributed among its members, fostering a diverse and resilient ecosystem.
              </Typography>
              <Typography variant="h5" gutterBottom style ={{ textDecoration: 'underline' }}>
               The Grant Ships Advantage 
              </Typography>
              <Typography paragraph>
                Participation in Grant Ships offers numerous benefits, including a democratic involvement in governance, increased transparency and trust, and the fostering of innovation and impact for the Arbitrum ecosystem.
              </Typography>
              <Typography variant="h5" gutterBottom style ={{ textDecoration: 'underline' }}>
                Conclusion
              </Typography>
              <Typography paragraph>
                Grant Ships stands as a beacon of innovation in decentralized grant allocation. It is not just a platform but a movement towards a more equitable, participatory, and effective model of community-driven funding.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutPage;
