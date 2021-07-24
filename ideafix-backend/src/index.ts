import app from "./app";
import getNotes from "./endpoints/getNotes";
import putCreateNote from "./endpoints/putCreateNote";

app.get("/all", getNotes);
app.put("/create", putCreateNote);
