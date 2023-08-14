import React from 'react';
import Table from 'react-bootstrap/Table';
import "./table.css"

function ResponsiveExample() {
  const headerNames = ['#', 'Name', 'Location', 'ID Type', 'ID Number', 'Commodity', 'Quantity'];

  const tableData = [
    [1, '', '', '', '', '', ''],
    [2, '', '', '', '', '', ''],
    [3, '', '', '', '', '', ''],
    [3, '', '', '', '', '', ''],
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