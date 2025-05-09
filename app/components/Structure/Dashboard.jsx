'use client';

import * as React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

// داده‌ها برای گراف‌ها
const salesData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
];

const trafficData = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 4567 },
  { name: 'Mar', value: 1398 },
  { name: 'Apr', value: 9800 },
  { name: 'May', value: 3908 },
  { name: 'Jun', value: 4800 },
];

// داده‌های چارت ستونی
const productSales = [
  { month: 'Jan', productA: 400, productB: 240, productC: 240 },
  { month: 'Feb', productA: 300, productB: 139, productC: 221 },
  { month: 'Mar', productA: 200, productB: 980, productC: 229 },
  { month: 'Apr', productA: 278, productB: 390, productC: 200 },
  { month: 'May', productA: 189, productB: 480, productC: 218 },
  { month: 'Jun', productA: 239, productB: 380, productC: 250 },
  { month: 'Jul', productA: 349, productB: 430, productC: 300 },
  { month: 'Aug', productA: 420, productB: 240, productC: 190 },
  { month: 'Sep', productA: 300, productB: 300, productC: 220 },
  { month: 'Oct', productA: 200, productB: 210, productC: 250 },
  { month: 'Nov', productA: 278, productB: 370, productC: 280 },
  { month: 'Dec', productA: 189, productB: 400, productC: 300 },
];

const statCards = [
  {
    title: 'Total Sales',
    value: '$15,320',
    icon: <MonetizationOnIcon sx={{ fontSize: 40, color: 'white' }} />,
    bgColor: 'linear-gradient(to right, #00b09b, #96c93d)',
  },
  {
    title: 'Orders',
    value: '128',
    icon: <ShoppingCartIcon sx={{ fontSize: 40, color: 'white' }} />,
    bgColor: 'linear-gradient(to right, #ff512f, #dd2476)',
  },
  {
    title: 'Traffic',
    value: '4,580',
    icon: <ShowChartIcon sx={{ fontSize: 40, color: 'white' }} />,
    bgColor: 'linear-gradient(to right, #00c6ff, #0072ff)',
  },
  {
    title: 'New Users',
    value: '32',
    icon: <PeopleIcon sx={{ fontSize: 40, color: 'white' }} />,
    bgColor: 'linear-gradient(to right, #f7971e, #ffd200)',
  },
];

export default function App() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 3,
        minHeight: '100vh',
      }}
    >
      <Grid container spacing={3}>
        {/* کارت‌های آماری */}
        {statCards.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Card
              sx={{
                background: item.bgColor,
                color: 'white',
                borderRadius: 3,
                boxShadow: 4,
                minHeight: 130,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: { xs: '300px', sm: '300px', md: '250px' }
              }}
            >
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="h4" fontWeight="bold">
                    {item.value}
                  </Typography>
                </Box>
                {item.icon}
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: 'white', textTransform: 'none' }}>
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}

        {/* گراف فروش */}
        <Grid item xs={12} md={6}>
          <Card sx={{ width: { xs: '420px', sm: '500px', md: '450px', lg: '500px' } }}>  
            <CardContent>
              <Typography variant="h6">Sales Overview</Typography>
            </CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid>

        {/* گراف ترافیک */}
        <Grid item xs={12} md={6}>
          <Card sx={{ width: { xs: '420px', sm: '500px', md: '450px', lg: '500px' } }}>
            <CardContent>
              <Typography variant="h6">Traffic Overview</Typography>
            </CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid>

        {/* چارت ستونی محصولات */}
        <Grid item xs={12}>
          <Card sx={{ width: { xs: '420px', sm: '500px', md: '450px', lg: '750px' }, marginLeft: { lg: '130px' } }}>
            <CardContent>
              <Typography variant="h6">Monthly Product Sales</Typography>
            </CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={productSales}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="productA" fill="#8884d8" />
                <Bar dataKey="productB" fill="#82ca9d" />
                <Bar dataKey="productC" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
