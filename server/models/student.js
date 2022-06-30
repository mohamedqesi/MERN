import mongoose from 'mongoose'

const studentSchema = mongoose.Schema({
    registrationNumber:Number,
    name:String,
    age:Number,
    school:{
        type:String,
        default:"Not a Student"
    }
})

const student = mongoose.model('student', studentSchema)

export default student