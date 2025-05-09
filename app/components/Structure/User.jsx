'use client';

import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const users = [
  {
    id: 1,
    name: 'Sara Mohammadi',
    email: 'sara@example.com',
    role: 'Admin',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 2,
    name: 'Ali Karimi',
    email: 'ali@example.com',
    role: 'User',
    status: 'Inactive',
    avatar: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: 3,
    name: 'Mobin Rastegar',
    email: 'mobin@example.com',
    role: 'Editor',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: 4,
    name: 'Hossein Abbasi',
    email: 'hossein@example.com',
    role: 'User',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 5,
    name: 'Niloofar Ghasemi',
    email: 'niloofar@example.com',
    role: 'User',
    status: 'Inactive',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  {
    id: 6,
    name: 'mobina Asghari',
    email: 'mobina@example.com',
    role: 'Admin',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=10',
  },
  {
    id: 7,
    name: 'Mahan Darvishi',
    email: 'mahan@example.com',
    role: 'Editor',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: 8,
    name: 'Amir Soltani',
    email: 'amir@example.com',
    role: 'User',
    status: 'Inactive',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 9,
    name: 'Omid Noori',
    email: 'omid@example.com',
    role: 'User',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=13',
  },
  {
    id: 10,
    name: 'Mohammad Ghorbani',
    email: 'mgh@example.com',
    role: 'Admin',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=14',
  },
];

export default function UserPage() {
  return (
    <Box p={3}>
      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card
              sx={{
                height: '250px',
                width: '300px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                  transform: 'scale(1.02)',
                },
                padding: 2, 
              }}
            >
              <CardContent>
                {/* اطلاعات آواتار و نام کاربر */}
                <Box display="flex" alignItems="center" gap={2} mb={3}>
                  <Avatar src={user.avatar} alt={user.name} sx={{ width: 50, height: 50 }} />
                  <Box>
                    <Typography variant="h6" fontWeight="bold" color="text.primary">
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.email}
                    </Typography>
                  </Box>
                </Box>

                {/* نقش و وضعیت */}
                <Stack direction="row" spacing={1} mb={3}>
                  <Chip label={user.role} color="primary" size="small" sx={{ fontWeight: 'bold' }} />
                  <Chip
                    label={user.status}
                    color={user.status === 'Active' ? 'success' : 'default'}
                    size="small"
                    sx={{
                      backgroundColor: user.status === 'Active' ? '#4caf50' : '#f44336',
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                  />
                </Stack>

                {/* دکمه‌ها */}
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<EditIcon />}
                    sx={{
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      '&:hover': { backgroundColor: '#1976d2', color: '#fff' },
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    startIcon={<DeleteIcon />}
                    sx={{
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      '&:hover': { backgroundColor: '#d32f2f', color: '#fff' },
                    }}
                  >
                    Delete
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
