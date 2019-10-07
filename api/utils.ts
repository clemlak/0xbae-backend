import mongoose from 'mongoose';

async function initMongoose(dbUrl: string) {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB!');
  } catch (err) {
    throw new Error(err);
  }
}

export {
  initMongoose,
};
