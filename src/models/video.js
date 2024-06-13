import mongoose from "mongoose";

export const formatHashtags = (hashtags) => {
  hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));
};

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    // uppercase: true,
    trim: true,
    maxLength: 80,
    required: true,
  },
  description: { type: String, trim: true, minLength: 20, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});
// videoSchema.pre("save", async function () {
//   this.hashtags = this.hashtags[0]
//     .split(",")
//     .map((word) => (word.startWith("#") ? word : `#${word}`));
// });

const Video = mongoose.model("Video", videoSchema);
export default Video;
