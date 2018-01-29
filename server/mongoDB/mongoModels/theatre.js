import mongoose from "mongoose";

const TheatreSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Movie: [
        {
            Name: { type: String, required: true },
            Show: [
                {
                    Time: { type: String, required: true },
                    Seat: { type: Number, default: 50 },
                    Price: { type: Number, default: 200 }
                }
            ]
        }
    ]
});

export default mongoose.model("Theatre", TheatreSchema);
