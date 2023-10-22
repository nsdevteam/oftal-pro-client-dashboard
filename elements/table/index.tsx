import styled from '@emotion/styled';
import React, { FC } from 'react';
import {
  border,
  color,
  compose,
  layout,
  space,
  typography,
} from 'styled-system';

import { TRowData, TTableHeadings } from '../../interface';

const StyledTable = styled.table(
  compose(color, space, border, layout, typography)
);

const StyledTableRow = styled.tr(
  compose(color, space, border, layout, typography)
);

const StyledTableCell = styled.td(
  compose(color, space, border, layout, typography)
);

type TableProps = {
  data: Array<TRowData & { file: string }>;
  columns: Array<keyof TTableHeadings>;
};

const HEADINGS: Record<keyof TTableHeadings, string> = {
  patientName: 'Nome de pacitente',
  geometry: 'Geomatria',
  indiceOfRefraction: 'Índice de refração',
  color: 'cor',
  treatment: 'Tratamento',
  diameter: 'Diametro',
};

const Table: FC<TableProps> = ({ data, columns }) => {
  return (
    <div className="tableContent">
      <StyledTable className="tableRequest" width="75vw">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <StyledTableCell
                padding="1rem"
                borderBottom="1px solid #E4E4E7"
                color="#A1A1AA"
                key={index}
              >
                {HEADINGS[column]}
              </StyledTableCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <StyledTableRow key={rowIndex}>
              {columns.map((column, cellIndex) => (
                <StyledTableCell
                  padding="1rem"
                  borderBottom="1px solid #E4E4E7"
                  key={cellIndex}
                >
                  {row[column]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default Table;
