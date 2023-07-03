// getting-started.js
import mongoose from 'mongoose'

connect().catch((err) => console.log(err))

async function connect() {
  await mongoose.connect('mongodb://127.0.0.1:27017/f8_edu_dev')
  console.log('DB Connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

export default connect
