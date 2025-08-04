'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'

type Activity = {
    date: string
    user: string
    action: string
    details: string
}

const data: Activity[] = [
    {
        date: '2025-08-01',
        user: 'John Doe',
        action: 'Login',
        details: 'Logged in from Chrome on Windows'
    },
    {
        date: '2025-08-02',
        user: 'Jane Smith',
        action: 'Update',
        details: 'Updated profile information'
    },
    {
        date: '2025-08-03',
        user: 'Alice Johnson',
        action: 'Delete',
        details: 'Deleted a document'
    }
]

const AdminOverview: React.FC = () => {
    return (
        <Card className="shadow-md w-full">
            <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-4">User Activity</h2>
                <div className="overflow-x-auto">
                    <Table className="w-full">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="">Date</TableHead>
                                <TableHead className="">User</TableHead>
                                <TableHead className="">Action</TableHead>
                                <TableHead>Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className=' w-full ' >
                            {data.map((activity, index) => (
                                <TableRow key={index}>
                                    <TableCell>{activity.date}</TableCell>
                                    <TableCell>{activity.user}</TableCell>
                                    <TableCell>{activity.action}</TableCell>
                                    <TableCell>{activity.details}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    )
}

export default AdminOverview
