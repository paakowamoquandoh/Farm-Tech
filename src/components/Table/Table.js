import React from 'react';
import Table from 'react-bootstrap/Table';
import "./table.css"

function ResponsiveExample() {
  const headerNames = ['#', 'Name', 'Location', 'ID Type', 'ID Number', 'Commodity', 'Quantity'];

  const tableData = [
    [1, 'Data 1-1', 'Data 1-2', 'Data 1-3', 'Data 1-4', 'Data 1-5', 'Data 1-6'],
    [2, 'Data 2-1', 'Data 2-2', 'Data 2-3', 'Data 2-4', 'Data 2-5', 'Data 2-6'],
    [3, 'Data 3-1', 'Data 3-2', 'Data 3-3', 'Data 3-4', 'Data 3-5', 'Data 3-6'],
    [3, 'Data 3-1', 'Data 3-2', 'Data 3-3', 'Data 3-4', 'Data 3-5', 'Data 3-6'],
  ];

  return (
   <>
   <h3>Farmers Onboard</h3>
    <Table responsive className='custom-table'>
      <thead>
        <tr>
          {headerNames.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {rowData.map((cellData, cellIndex) => (
              <td key={cellIndex}>{cellData}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
   </>
  );
}

export default ResponsiveExample;