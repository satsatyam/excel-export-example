import React, { useEffect } from 'react'
import { CSVLink } from 'react-csv'
import Button from 'react-bootstrap/Button';
// import { ExportCSV } from './ExportCSV';

export const ExportReactCSV = ({csvData, fileName}) => {
    useEffect(()=>{
        console.log("CSV DATA outer",csvData);
        console.log("FileName outer",fileName);
    })
    return (
        <Button variant="warning">
            <CSVLink data={csvData} filename={fileName}>Export</CSVLink>
            {/* <ExportCSV data={csvData} fileName={fileName}>Export A</ExportCSV> */}
        </Button>
    )
}