import styled from '@emotion/styled';
import React, { FC } from 'react';
import {
  border,
  color,
  compose,
  layout,
  space,
  typography,
  variant,
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
  data: any;
  columns: any;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Table: FC<TableProps> = ({ data, columns }) => {
  return (
    <div className="tableContent">
      <StyledTable className="tableRequest" width="75vw">
        <thead>
          <tr>
            {columns.map((column: unknown, index: unknown) => (
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
          {data.map((row: unknown[], rowIndex: unknown) => (
            <StyledTableRow key={rowIndex}>
              {row.map((cell: unknown, cellIndex: unknown) => (
                <StyledTableCell
                  padding="1rem"
                  borderBottom="1px solid #E4E4E7"
                  key={cellIndex}
                >
                  {cell}
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
