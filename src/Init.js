import "./db";
import "./models/video";
import app from "./server";

const PORT = 4000;

const handleListening = () => {
  console.log(`🛸 Server listening onPort http://localhost:${PORT} 🛸`);
};

app.listen(PORT, handleListening);
