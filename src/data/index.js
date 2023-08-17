import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userIds = [
new mongoose.Types.ObjectId(),
new mongoose.Types.ObjectId(),
new mongoose.Types.ObjectId(),
new mongoose.Types.ObjectId(),
]


async function hashPassword(password) {
    const rounds = 10;
    return await bcrypt.hash(password, rounds);
  }

export const users = [
    {
      _id: userIds[0],
      email: 'user1@example.com',
      password: await hashPassword('password123'),
      name: 'User 1',
      followers: [],
      following: [],
    },
    {
      _id: userIds[1],
      email: 'user2@example.com',
      password: await hashPassword('password456'),
      name: 'User 2',
      followers: [],
      following: [],
    },
  ];