import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addTodo } from "@/redux/features/todoSlice"
import { useAppDispatch } from "@/redux/hooks"
import { FormEvent, useState } from "react"

export function AddTodo() {
    const [title,setTite]=useState("")
    const [description,setDiscripation]=useState("")
    const dispacth=useAppDispatch()
  
    const handleFrom=(e:FormEvent<HTMLFormElement>)=>{
       e.preventDefault()
       const data={
          id:crypto.randomUUID(),
         title:title,
         description:description
       }
       dispacth(addTodo(data))
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button variant={"destructive"}>Add Todo</Button> 
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Tasks</DialogTitle>
          <DialogDescription>
            Add your tasks that one your finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleFrom}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              onChange={(e)=>setTite(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Discripation
            </Label>
            <Input

              id="discripation"
              onChange={(e)=>setDiscripation(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
