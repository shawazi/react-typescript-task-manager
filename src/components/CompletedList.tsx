
import Task from "../model"
import {List, Typography, Divider, ListItem, ListItemText} from '@mui/material';
import TaskItem from "./TaskItem";

interface Props{
  tasks: Task[], 
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const CompletedList: React.FunctionComponent<Props> = ({tasks, setTasks}: Props) => {
  const show = tasks.some(t=> t.isCompleted)
  return (
    <List sx={{bgcolor: 'background.paper', mt:2, p:1}}>
      <Typography variant="h5" align="center" gutterBottom> Completed List</Typography>
      <Divider sx={{mb:2}}/>

      {show&&tasks.map((task, index)=> {
        if(task.isCompleted){
          return <TaskItem task={task} key={task.id} setTasks={setTasks} tasks={tasks}/>
        }
      }) }

      {!show&& 
      <ListItem> 
        <ListItemText primary="No Completed Tasks" sx={{textAlign: 'center'}}/>
      </ListItem>
      }
    </List>
  )
}

export default CompletedList