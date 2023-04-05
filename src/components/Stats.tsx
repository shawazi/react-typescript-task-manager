import Task from "../model";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Card, CardContent, CardHeader, Grid, Stack, Typography } from "@mui/material";

interface Props {
  tasks: Task[];
}

const Stats: React.FunctionComponent<Props> = ({ tasks }: Props) => {
  const stats = [
    {
      title: "Completed",
      icon: <TaskAltIcon sx={{ fontSize: 75, color: "green" }} />,
      total: tasks.filter((t) => t.isCompleted).length,
    },
    {
      title: "Not completed",
      icon: <UnpublishedIcon sx={{ fontSize: 75, color: "red" }} />,
      total: tasks.filter((t) => !t.isCompleted).length,
    },
    {
      title: "Total",
      icon: <AssignmentIcon sx={{ fontSize: 75, color: "#333" }} />,
      total: tasks.length,
    },
  ];

  return (

    <Grid container spacing={2} sx={{mb:2}}>
        {stats.map(({total, title, icon})=> (
            <Grid item xs={12} md={4}>
                <Card variant="elevation">
                    <CardHeader title={title} sx={{textAlign:'center'}}/>
                    <CardContent>
                        <Stack direction="row" justifyContent="space-between" sx={{px:4}}>
                            <Typography variant="h2"> {total}</Typography>
                            {icon}
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
  );
};

export default Stats;
