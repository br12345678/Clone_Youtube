import app from "./server";
import "./db";
import "./models/Video";

const PORT = 4000;

const handleListening = () =>
  console.log(` ✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);