const express = require('express');
const pool = require('./config/database');
const userRoutes = require('./routes/UserRoutes'); 
const menuRouter = require('./routes/MenuRoutes'); 
const ordersRouter = require('./routes/OrderRoutes'); 
const pathsRouter = require('./routes/PathsRoutes');
const roleMapRoutes = require('./routes/RoleMapRoutes');
const addressRoutes = require('./routes/AddressRoutes');
const roleRoutes = require('./routes/RolesRoutes');
const restaurantRouter = require('./routes/RestaurantRoutes');
const authRoutes = require('./routes/AuthRoutes');


const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running...');
});


app.use('/users', userRoutes); 
app.use('/api/menu', menuRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/paths', pathsRouter);
app.use('/api/restaurants', restaurantRouter);
app.use('/api/roleMaps', roleMapRoutes);
app.use('/api/addresses', addressRoutes);
app.use('/api/role', roleRoutes);
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
