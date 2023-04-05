import React, { useState } from "react";
import Task from "../model";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

type Props = {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasks: Task[];
  key: string;
};

const TaskItem: React.FunctionComponent<Props> = ({
  task,
  setTasks,
  tasks,
}: Props) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleDelete = (id: string) => {
    let updatedTasks = [...tasks];
    updatedTasks = updatedTasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
  };

  const handleEdit = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) => {
    let updatedTasks = [...tasks];
    const index = tasks.findIndex((t) => t.id == id);
    updatedTasks[index].title = e.target.value;
    updatedTasks[index].created = new Date();
    setTasks(updatedTasks);
  };

  const handleComplete = (id: string)=>{
    let updatedTasks = [...tasks];
    const index = tasks.findIndex((t) => t.id == id);
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted; 
    setTasks(updatedTasks);
  }

  return (
    <ListItem
      sx={{
        backgroundColor: task.isCompleted ? "#deffde" : "#ffe9e9",
        borderRadius: 1,
        my: 1,
        px: "20px",
        py: "5px",
      }}
      secondaryAction={
        <Stack direction="row" spacing={2}>
          <Tooltip title="Edit" arrow>
            <IconButton
              edge="end"
              color="warning"
              onClick={() => setEdit(!edit)}
            >
              <ModeEditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" arrow>
            <IconButton
              edge="end"
              color="error"
              onClick={() => handleDelete(task.id)}
            >
              <HighlightOffIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      }
      disablePadding
    >
      <ListItemIcon>
        <Checkbox edge="start" color="success" checked={task.isCompleted} onChange={()=> handleComplete(task.id)}/>
       
      </ListItemIcon>

      {!edit && (
          <ListItemText
            primary={task.title}
            secondary={task.created.toLocaleString("us")}
          />
        )}

        {edit && (
          <TextField
            sx={{ width: "70%" }}
            value={task.title}
            onChange={(e) => handleEdit(e, task.id)}
          />
        )}
    </ListItem>
  );
};

export default TaskItem;
