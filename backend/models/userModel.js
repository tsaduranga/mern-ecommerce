import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    email : {
        type: String,
        require : true,
        unique : true
    },
    password : {
        type:String,
        required : true
    },
    isAdmin : {
        type: Boolean,
        required : true,
        default: false
    },
    pic:{
        type:String,
        required: true,
        default : 
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fillustrations%2Ficon-user-male-avatar-business-5359553%2F&psig=AOvVaw3-r1RlevcQvbhYOSRcnBoO&ust=1631105700410000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCBpbH07PICFQAAAAAdAAAAABAD"
    }
},{
    timestamps : true,
})


userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

})


userSchema.methods.matchPassword = async function(enterdPassword){
    return await bcrypt.compare(enterdPassword, this.password)
}



const User =  mongoose.model('User', userSchema)

export default User