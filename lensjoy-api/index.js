import express from 'express';
import mongoose from 'mongoose';
import { UserLogin } from './Model/UserLoginModel.js';
import { StatusCodes } from 'http-status-codes';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { ERROR_MESSAGE } from "./Model/Constants.js";
import { products as Products } from './Model/ProductsModel.js';
import {Feedbacks} from './Model/Feedbacks.js';
import { Order } from './Model/OrderModel.js'


const app = express();
app.use(cors());
app.use(express.json());

app.use('/images', express.static('public'));

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/lensjoydb');
    console.log("Database connection created!");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

function verifyToken(request, response, next) {
  const header = request.get('Authorization');
  if (header) {
    const token = header.split(" ")[1];
    jwt.verify(token, "secret1234", (error, decoded) => {
      if (error) {
        response.status(StatusCodes.UNAUTHORIZED).send({ message: "Invalid token" });
      } else {
        next();
      }
    });
  } else {
    response.status(StatusCodes.UNAUTHORIZED).send({ message: "Please login first" });
  }
}

app.post("/user/signup", async (request, response) => {
  try {
    const reqData = request.body;
    reqData.password = bcrypt.hashSync(reqData.password, 10);
    const userLogin = new UserLogin(reqData);
    await userLogin.save();
    response.send({ message: 'Successfully signed up' });
  } catch (error) {
    console.error("Signup error:", error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Something went wrong' });
  }
});

app.post("/user/signin", async (request, response) => {
  try {
    const user = await UserLogin.findOne({ phone: request.body.phone });
    if (user) {
      if (bcrypt.compareSync(request.body.password, user.password)) {
        const token = jwt.sign({ userPhone: user.phone }, "secret1234");
        response.status(StatusCodes.OK).send({ message: "Login Successful", token: token });
      } else {
        response.status(StatusCodes.BAD_REQUEST).send({ message: "Invalid Email or Password" });
      }
    } else {
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE });
    }
  } catch (error) {
    console.error("Signin error:", error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Something went wrong' });
  }
});

app.post('/feedback', async (req, res) => {
  try {
    const { feedback } = req.body;
    if (!feedback) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Feedback is required' });
    }
    const newFeedback = new Feedbacks({ feedback });
    await newFeedback.save();

    res.status(StatusCodes.CREATED).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
});

app.get('/feedback', async (req, res) => {
  try {
    const feedbacks = await Feedbacks.find();
    res.status(StatusCodes.OK).json(feedbacks);
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
});

app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/orders', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ message: 'Order submitted successfully', order: newOrder });
  } catch (error) {
    console.error('Error submitting order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/orders/:id', async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({
      message: 'Order updated successfully',
      order: updatedOrder,
    });
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/orders/:id', async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully', order: deletedOrder });
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.get("/user/signup",verifyToken, async (request, response) => {
  try {
    const users = await UserLogin.find();
    response.send({ users: users });
  } catch (error) {
    console.error("Get users error:", error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Something went wrong' });
  }
});

app.get("/user/signin", verifyToken, async (request, response) => {
  try {
    const users = await UserLogin.find();
    response.send({ users: users });
  } catch (error) {
    console.error("Get users error:", error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Something went wrong' });
  }
});

app.post('/products', async (req, res) => {
  try {
    const eyeglassesData = req.body;

    const newEyeglasses = new Products({
      imageUrl: eyeglassesData.imageUrl,
      title: eyeglassesData.title,
      size: eyeglassesData.size,
      price: eyeglassesData.price,
    });

    await newEyeglasses.save();

    res.status(StatusCodes.CREATED).json({ message: 'Eyeglasses data inserted successfully' });
  } catch (error) {
    console.error('Error inserting eyeglasses data:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  }
});

app.get('/products', async (req, res) => {
  try {
    const eyeglassesData = await products.find();
    res.json(eyeglassesData);
  } catch (error) {
    console.error('Error fetching eyeglasses data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = 8900;
app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
  connectDb();
});
