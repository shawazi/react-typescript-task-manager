import { useState } from "react";
import Task from "./model";
import { Box, Container, Typography, Grid } from "@mui/material";
import { v4 as uuid } from "uuid";
import InputField from "./components/InputField";
import TaskList from "./components/TaskList";
import CompletedList from "./components/CompletedList";
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import Stats from "./components/Stats";


const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([
        ...tasks,
        { id: uuid(), title: task, isCompleted: false, created: new Date() },
      ]);
      setTask("");
    }
  };

  return (
    <Box sx={{ bgcolor: "#ceedff", height: "100vh", pt: 5, overflow: "auto" }}>
      <Container>
        <Typography variant="h3" gutterBottom align="center" color="primary">
          Task Manager
        </Typography>
        <InputField task={task} setTask={setTask} addTask={addTask} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TaskList tasks={tasks} setTasks={setTasks} />
          </Grid>
          <Grid item xs={12} md={6}>
            <CompletedList tasks={tasks} setTasks={setTasks} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
