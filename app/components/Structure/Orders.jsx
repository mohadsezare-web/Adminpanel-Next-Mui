'use client';
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  TextField,
  InputAdornment,
  TablePagination,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const orders = [
  { id: 1001, customer: 'John Doe', amount: '$250', status: 'Pending', date: '2025-05-06' },
  { id: 1002, customer: 'Jane Smith', amount: '$480', status: 'Shipped', date: '2025-05-05' },
  { id: 1003, customer: 'Ali Reza', amount: '$310', status: 'Cancelled', date: '2025-05-04' },
  { id: 1004, customer: 'Emily Chen', amount: '$670', status: 'Completed', date: '2025-05-02' },
  { id: 1005, customer: 'Sara Zarei', amount: '$130', status: 'Completed', date: '2025-05-01' },
  { id: 1006, customer: 'Mohammad Jafari', amount: '$980', status: 'Shipped', date: '2025-04-30' },
  { id: 1007, customer: 'Liam Brown', amount: '$150', status: 'Pending', date: '2025-04-29' },
  { id: 1008, customer: 'Olivia Green', amount: '$230', status: 'Cancelled', date: '2025-04-28' },
  { id: 1009, customer: 'David Lee', amount: '$720', status: 'Completed', date: '2025-04-27' },
  { id: 1010, customer: 'Sophia Turner', amount: '$540', status: 'Pending', date: '2025-04-26' },
  { id: 1011, customer: 'Armin Khani', amount: '$450', status: 'Shipped', date: '2025-04-25' },
  { id: 1012, customer: 'Eli Johnson', amount: '$360', status: 'Completed', date: '2025-04-24' },
  { id: 1013, customer: 'Noah Wilson', amount: '$100', status: 'Cancelled', date: '2025-04-23' },
  { id: 1014, customer: 'Zahra Moradi', amount: '$660', status: 'Pending', date: '2025-04-22' },
  { id: 1015, customer: 'Lucas Martin', amount: '$880', status: 'Completed', date: '2025-04-21' },
  { id: 1016, customer: 'Maryam Soltani', amount: '$200', status: 'Shipped', date: '2025-04-20' },
  { id: 1017, customer: 'Emma Garcia', amount: '$500', status: 'Pending', date: '2025-04-19' },
  { id: 1018, customer: 'Reza Ahmadi', amount: '$310', status: 'Cancelled', date: '2025-04-18' },
  { id: 1019, customer: 'Emily White', amount: '$370', status: 'Completed', date: '2025-04-17' },
  { id: 1020, customer: 'Daniel Black', amount: '$270', status: 'Shipped', date: '2025-04-16' },
];

const statusColor = {
  Pending: 'warning',
  Shipped: 'info',
  Cancelled: 'error',
  Completed: 'success',
};

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toString().includes(searchTerm) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.amount.includes(searchTerm) ||
    order.date.includes(searchTerm)
  );

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedOrders = filteredOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box p={3}>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <TextField
            label="Search orders"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent sx={{ overflowX: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>
                    <Chip label={order.status} color={statusColor[order.status]} size="small" />
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                </TableRow>
              ))}
              {paginatedOrders.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No matching orders found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          <TablePagination
            component="div"
            count={filteredOrders.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 15]}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
