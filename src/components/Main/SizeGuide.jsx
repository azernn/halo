import React from 'react'
import {
    Drawer,
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const sizeData = [
    { size: "XS", height: 167, chest: 84, waist: 68, hip: 92, innerLeg: 78 },
    { size: "S", height: 170, chest: 88, waist: 72, hip: 96, innerLeg: 80 },
    { size: "M", height: 173, chest: 92, waist: 76, hip: 100, innerLeg: 82 },
    { size: "L", height: 176, chest: 96, waist: 80, hip: 104, innerLeg: 84 },
    { size: "XL", height: 179, chest: 101, waist: 85, hip: 109, innerLeg: 86 },
];

function SizeGuide({handleClose, open}) {
    return (
        <div>
            <Drawer
                anchor="right"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: { width: { xs: '100%', sm: 500 }, p: 2, height:'70vh' }
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6">SIZE GUIDE - UNISEX CLOTHING</Typography>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <TableContainer sx={{ overflowX: 'hidden' }} >
                    <Table>
                        <TableHead>
                            <TableRow >
                                <TableCell sx={{ fontSize: '13px' }} >SIZE</TableCell>
                                <TableCell sx={{ fontSize: '11px' }} >Height</TableCell>
                                <TableCell sx={{ fontSize: '11px' }} >Chest</TableCell>
                                <TableCell sx={{ fontSize: '11px' }} >Waist</TableCell>
                                <TableCell sx={{ fontSize: '11px' }} >Hip</TableCell>
                                <TableCell sx={{ fontSize: '11px' }} >Inner leg</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sizeData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ fontSize: '13px',  padding: { xs: '4px', sm: '12px' } }} >{row.size}</TableCell>
                                    <TableCell sx={{ fontSize: '13px',  padding: { xs: '4px', sm: '12px' } }} >{row.height}</TableCell>
                                    <TableCell sx={{ fontSize: '13px',  padding: { xs: '4px', sm: '12px' } }} >{row.chest}</TableCell>
                                    <TableCell sx={{ fontSize: '13px',  padding: { xs: '4px', sm: '12px' } }} >{row.waist}</TableCell>
                                    <TableCell sx={{ fontSize: '13px',  padding: { xs: '4px', sm: '12px' } }} >{row.hip}</TableCell>
                                    <TableCell sx={{ fontSize: '13px',  padding: { xs: '4px', sm: '12px' } }} >{row.innerLeg}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Typography variant="body2" sx={{ mt: 2 }}>
                    All measurements are in centimeters. The measurements serve as guidelines only and may vary between styles.
                    Please note that our styles marked with UNISEX follow the men's sizing chart. For women, we recommend choosing
                    a size smaller than you normally would.
                </Typography>
            </Drawer>
        </div>
    )
}

export default SizeGuide
