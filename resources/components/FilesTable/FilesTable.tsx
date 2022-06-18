import FileIcon from '@components/FileIcon/FileIcon';
import React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableHeadCell,
  TableDataCell,
} from 'react95';

const FilesTable = () => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell disabled>Level</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableDataCell style={{ textAlign: 'center' }}>
              <FileIcon imageURL='https://cdn.icon-icons.com/icons2/1812/PNG/512/4213444-extension-file-format-png-type_115361.png' />
            </TableDataCell>
            <TableDataCell>Bulbasaur</TableDataCell>
            <TableDataCell>64</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell style={{ textAlign: 'center' }}>
              <span role='img' aria-label='fire'>
                🔥
              </span>
            </TableDataCell>
            <TableDataCell>Charizard</TableDataCell>
            <TableDataCell>209</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell style={{ textAlign: 'center' }}>
              <span role='img' aria-label='lightning'>
                ⚡
              </span>
            </TableDataCell>
            <TableDataCell>Pikachu</TableDataCell>
            <TableDataCell>82</TableDataCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default FilesTable;
