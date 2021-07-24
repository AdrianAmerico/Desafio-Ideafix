import app from "./app";
import putCreateNote from "./endpoints/putCreateNote";

app.put("/create", putCreateNote)