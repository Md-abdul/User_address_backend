const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const addressRoutes = require('./routes/addressRoutes');

const app = express();

const connect = async () => {
    try {
      const mongoURI = `Your mongodb url where data will be stored`
      if (!mongoURI) {
        throw new Error("MongoDB URI is not defined in the environment variables.");
      }
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error); 
    }
  };

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/users', addressRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   connect() 
  console.log(`Server running on port ${PORT}`);
});
