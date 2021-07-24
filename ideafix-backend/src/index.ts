import app from "./app";
import deleteNotes from "./endpoints/deleteNotes";
import getNotes from "./endpoints/getNotes";
import putCreateNote from "./endpoints/putCreateNote";

app.get("/task/all", getNotes);
app.put("/task/create", putCreateNote);
app.delete("/task/delete/:id", deleteNotes)