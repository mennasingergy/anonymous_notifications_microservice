import mongoose from 'mongoose';
const postSchema=mongoose.Schema({
    EmailTo:String,
    Type:String
});
const notifications= mongoose.model('notifications',postSchema);
export default notifications;