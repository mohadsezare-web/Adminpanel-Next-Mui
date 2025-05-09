'use client';
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Button
} from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip, Legend } from 'recharts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TimelineIcon from '@mui/icons-material/Timeline';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

// داده‌های نمونه برای فروش
const salesData = [
  { name: 'Completed', value: 400 },
  { name: 'Pending', value: 300 },
  { name: 'Cancelled', value: 100 },
  { name: 'Shipped', value: 200 },
];

const orderStatusMap = {
  Pending: '#ffb74d',
  Shipped: '#64b5f6',
  Cancelled: '#e57373',
  Completed: '#81c784',
};

const orderActivities = [
  { id: 1, activity: 'New order placed', time: '2 mins ago' },
  { id: 2, activity: 'Shipment dispatched', time: '30 mins ago' },
  { id: 3, activity: 'Payment received', time: '1 hour ago' },
  { id: 4, activity: 'Order cancelled', time: '3 hours ago' },
];

const salesBarData = [
  { name: 'January', value: 400 },
  { name: 'February', value: 550 },
  { name: 'March', value: 700 },
  { name: 'April', value: 650 },
];

export default function AdminSalesDashboard() {
  return (
    <Box sx={{ padding: 3, minHeight: '100vh' }}>
      <Grid container spacing={3}>

        {/* Sales Pie Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: 3, background: 'linear-gradient(to right, #00b09b, #96c93d)', color: '#fff', width:"320px" }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ShoppingCartIcon sx={{ fontSize: 30, mr: 1 }} />
                <Typography variant="h6">Sales Distribution</Typography>
              </Box>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={salesData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={80}
                    label
                  >
                    {salesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={orderStatusMap[entry.name]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Sales Bar Chart (Monthly Data) */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: 3, background: 'linear-gradient(to right, #2193b0, #6dd5ed)', color: '#fff', width:"320px" }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TimelineIcon sx={{ fontSize: 30, mr: 1 }} />
                <Typography variant="h6">Monthly Sales</Typography>
              </Box>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={salesBarData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <BarTooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#ffffff" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Sales */}
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ borderRadius: 3, background: 'linear-gradient(to right, #ff512f, #dd2476)', color: '#fff', width:"320px" , height:"290px" }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ReceiptLongIcon sx={{ fontSize: 30, mr: 1 }} />
                <Typography variant="h6">Recent Activities</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {orderActivities.map((activity) => (
                  <Button
                    key={activity.id}
                    variant="text"
                    sx={{
                      justifyContent: 'flex-start',
                      color: 'white',
                      textTransform: 'none',
                      mb: 1,
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
                    }}
                  >
                    {activity.activity} <Typography sx={{ ml: 1 }} variant="body2">({activity.time})</Typography>
                  </Button>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Sales Insight Section */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 3,  boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h4" gutterBottom fontWeight="bold">Sales Insights & Trends</Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                Sales insights are critical to understanding customer behavior and improving the business's performance.
                This section presents detailed trends based on previous months' performance, allowing administrators to
                gain deeper insights into ongoing sales and customer behavior.
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                Keeping track of pending orders, cancellations, and completed sales is essential to ensuring smooth operations.
                These trends also help in forecasting future sales and adjusting inventory and marketing strategies accordingly.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                View Full Report
              </Button>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
}
