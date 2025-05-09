// Traffic.js
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const trafficData = [
  { name: 'Jan', visitors: 12000 },
  { name: 'Feb', visitors: 15000 },
  { name: 'Mar', visitors: 18000 },
  { name: 'Apr', visitors: 22000 },
  { name: 'May', visitors: 30000 },
];

const sources = [
  { source: 'Google', percent: '45%' },
  { source: 'Direct', percent: '25%' },
  { source: 'Social Media', percent: '15%' },
  { source: 'Email Campaigns', percent: '10%' },
  { source: 'Referral', percent: '5%' },
];

const Traffic = () => {
  return (
    <Box p={3}>
      <Grid container spacing={3}>
        {/* نمودار بازدیدها */}
        <Grid item xs={12} md={8}>
          <Card elevation={3} sx={{ width: { xs: '420px', md: '500px' } }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Traffic Overview
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Track your website traffic and visitor trends over time.
              </Typography>

              <Box height={300}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trafficData}>
                    <CartesianGrid strokeDasharray="5 5" stroke="#f2f2f2" />
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis stroke="#8884d8" />
                    <Tooltip contentStyle={{ backgroundColor: '#333', color: '#fff' }} />
                    <Line
                      type="monotone"
                      dataKey="visitors"
                      stroke="url(#gradient1)"
                      strokeWidth={3}
                      dot={{ stroke: '#fff', strokeWidth: 2, r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>

              <Typography variant="h6" mt={3}>
                Total Visitors: 120,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* منابع ترافیک */}
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ height: '470px', width: { xs: '420px', md: '500px' } }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Top Traffic Sources
              </Typography>
              <List>
                {sources.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        primary={item.source}
                        secondary={`Share: ${item.percent}`}
                      />
                    </ListItem>
                    {index < sources.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Define Gradient */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff7e5f" />
            <stop offset="100%" stopColor="#feb47b" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
};

export default Traffic;
