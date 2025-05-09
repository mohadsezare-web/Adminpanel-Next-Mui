'use client';

import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Divider,
  Chip,
} from '@mui/material';
import {
  CreditCard,
  Slack,
  BarChart3,
  Mail,
} from 'lucide-react';

const integrations = [
  {
    name: 'Stripe',
    description:
      'Connect your Stripe account to process online payments securely and efficiently. Easily manage transactions, issue refunds, and get detailed financial reports directly within your dashboard.',
    connected: true,
    icon: <CreditCard size={24} color="#1976d2" />,
  },
  {
    name: 'Slack',
    description:
      'Receive real-time notifications and alerts in your Slack workspace. Stay informed about user activity, errors, and updates so your team can take action immediately and improve responsiveness.',
    connected: false,
    icon: <Slack size={24} color="#28a745" />,
  },
  {
    name: 'Google Analytics',
    description:
      'Gain insight into your user behavior and track key performance metrics. Monitor traffic sources, user demographics, page views, and engagement with comprehensive data visualizations and analysis tools.',
    connected: false,
    icon: <BarChart3 size={24} color="#f9a825" />,
  },
  {
    name: 'Mailchimp',
    description:
      'Sync your email marketing campaigns and manage subscribers with Mailchimp. Create custom email workflows, automate messages, and analyze campaign performance using detailed analytics and reports.',
    connected: false,
    icon: <Mail size={24} color="#d81b60" />,
  },
];

export default function IntegrationPage() {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="150px"
      p={3}
    >
      <Box maxWidth={1200} width="100%">
        <Grid container spacing={3}>
          {integrations.map((integration, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={5}
                sx={{
                  borderRadius: '12px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                    <Box display="flex" alignItems="center" gap={2}>
                      {integration.icon}
                      <Typography variant="h6" fontWeight={600}>
                        {integration.name}
                      </Typography>
                    </Box>
                    <Chip
                      label={integration.connected ? 'Connected' : 'Not Connected'}
                      color={integration.connected ? 'success' : 'default'}
                      size="small"
                      sx={{
                        backgroundColor: integration.connected ? '#4caf50' : '#f44336',
                        color: '#fff',
                      }}
                    />
                  </Box>

                  <Box flexGrow={1}>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      {integration.description}
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 1 }} />

                  <Box mt="auto">
                    {integration.connected ? (
                      <Button
                        variant="outlined"
                        color="success"
                        disabled
                        fullWidth
                        sx={{
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          padding: '10px',
                        }}
                      >
                        Connected
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          padding: '10px',
                          '&:hover': {
                            backgroundColor: '#1976d2',
                          },
                        }}
                      >
                        Connect
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
