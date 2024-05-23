import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styles from './_code-content-table.module.scss'

const mockData = [
    {
        code: 'ABC12356',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d tempor incididunt.',
    },
    { code: 'ABC12357', content: 'Lorem ipsum dolor sit ame.' },
    {
        code: 'ABC12358',
        content:
            'aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui rat.',
    },
    {
        code: 'ABC12359',
        content: 'minim veniam, quis nostrud exercitation ullamco laboris nisi',
    },
    {
        code: 'ABC12359',
        content: 'minim veniam, quis nostrud exercitation ullamco laboris nisi',
    },
]

const CodeContentTable: React.FC = () => {
    return (
        <Table size="small" className={styles.codeContentTable}>
            <TableHead>
                <TableCell>Code</TableCell>
                <TableCell>Content</TableCell>
            </TableHead>
            <TableBody>
                {mockData.map((data, index) => (
                    <TableRow key={index}>
                        <TableCell>{data.code}</TableCell>
                        <TableCell>{data.content}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default CodeContentTable
