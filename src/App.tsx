import { Button } from "@/components/ui/button";
import Container from "@/components/shared/container/Container";
import { TodoTable } from "@/components/todo/table";
import {TableCell,TableRow} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { AddTodo } from "@/components/todo/addtodo";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { completedTodo, removeTodo, singleTodo } from "./redux/features/todoSlice";
import { EditTodo } from "@/components/todo/editTodo";



export default function App() {
  const todos=useAppSelector(state=>state.todo.todos)
  const dispatch=useAppDispatch()

  return (
    <Container>
          <h1 className="text-3xl font-bold text-center">My Todo</h1>
          <div className="flex justify-between mt-6">
               <AddTodo/>
              <Button variant={"destructive"}>Filter</Button>
          </div>
          <div className="mt-5">
             <TodoTable>
                 {todos?.map(({id,description,title,isCompleted})=>(
                   <TableRow key={id}>
                    <TableCell>
                      <Checkbox
                      checked={isCompleted}
                      onClick={()=>dispatch(completedTodo(id))}
                      />
                    </TableCell>
                    <TableCell>{id}</TableCell>
                    <TableCell>{isCompleted ? 'Done':'Pending'}</TableCell>
                   <TableCell>{title}</TableCell>
                   <TableCell>{description}</TableCell>
                   <TableCell className="flex gap-5">
                      <Button onClick={()=>dispatch(removeTodo(id))} variant={"destructive"}>Delete</Button>
                       <EditTodo onClick={()=>dispatch(singleTodo(id))}/>
                   </TableCell>
                   </TableRow>
                 ))}
             </TodoTable>
          </div>
    </Container>
  )
}

