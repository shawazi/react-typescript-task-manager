import {Paper, Grid, Button, TextField} from '@mui/material';
type Props = {
    task: string; 
    setTask: React.Dispatch<React.SetStateAction<string>>;
    addTask: (e: React.FormEvent<HTMLFormElement>)=> void; 
}

const InputField:React.FC<Props> = ({task, setTask, addTask}: Props) => {
  return (
    <Paper sx={{p:4}}>
        <form onSubmit={addTask}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={11}>
                    <TextField size='small' fullWidth label="Task" value={task} 
                    onChange={(e)=> setTask(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={1}>
                    <Button variant='contained' type="submit" > ADD</Button>
                </Grid>
            </Grid>
        </form>
    </Paper>
  )
}

export default InputField