import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ReactNode } from "react"
  
type TodoTableProps={
    children:ReactNode
}

  export function TodoTable({children}: TodoTableProps) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Checkbox</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Completed</TableHead>
            <TableHead>TodoTitle</TableHead>
            <TableHead>Discripation</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {children}
        </TableBody>
      </Table>
    )
  }
  