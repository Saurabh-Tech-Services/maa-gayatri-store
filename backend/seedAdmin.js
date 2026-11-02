require('dotenv').config({ path: __dirname + '/.env' });
const mongoose = require('mongoose');
const User = require('./models/userModel');

async function seedAdmin() {
  try {
    if (!process.env.MONGO_URI) {
      console.error('MONGO_URI is missing in .env');
      process.exit(1);
    }
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully.');

    const email = 'admin@outlook.com';
    const password = 'Admin#123';
    const name = 'Admin';
    const role = 'Admin';

    let user = await User.findOne({ email });
    if (user) {
      console.log(`Found existing user with email ${email}. Updating to Admin...`);
      user.name = name;
      user.role = role;
      user.password = password; // pre-save hook will hash this
      user.isVerified = true;
      user.otp = undefined;
      user.otpExpires = undefined;
      await user.save();
      console.log('✅ Admin user updated successfully.');
    } else {
      console.log(`Creating new user with email ${email}...`);
      user = new User({
        name,
        email,
        password, // pre-save hook will hash this
        role,
        isVerified: true
      });
      await user.save();
      console.log('✅ Admin user created successfully.');
    }

    console.log({
      id: user._id,
      email: user.email,
      role: user.role,
      isVerified: user.isVerified
    });

    await mongoose.disconnect();
    console.log('Database disconnected.');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding admin user:', err);
    process.exit(1);
  }
}

seedAdmin();

