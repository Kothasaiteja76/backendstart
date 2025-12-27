import mongoose,{Schema} from "mongoose";    
import mongooseAgg from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema({

       videofile: { 
        type: String,
        required: true,
    },
        title: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    description: {
        type: String,

        required: true,
        trim: true,
    },

    duration : {
        type: Number,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    views: {
        type: Number,   
        default: 0,
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
    likes: {
        type: Number,
        default: 0,

    },
    dislikes: {
        type: Number,
        default: 0,
    },
    uploadedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },  
}, 
{ 
    timestamps: true
 }
)
export const Video = mongoose.model("Video", videoSchema);

  