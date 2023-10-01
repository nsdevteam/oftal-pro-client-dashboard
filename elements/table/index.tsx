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
  data: Array<Record<string, any>>;
  columns: Array<string>;
};

const Table: FC<TableProps> = ({ data, columns }) => {
  return (
    <div className="tableContent">
      <StyledTable className="tableRequest" width="75vw">
        <thead>
          <tr>
            {columns.map((column: string, index: number) => (
              <StyledTableCell
                padding="1rem"
                borderBottom="1px solid #E4E4E7"
                color="#A1A1AA"
                key={index}
              >
                {column}
              </StyledTableCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: Record<string, any>, rowIndex: number) => (
            <StyledTableRow key={rowIndex}>
              {columns.map((column: string, cellIndex: number) => (
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
