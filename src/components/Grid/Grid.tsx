import React from "react";
import * as CSS from "csstype";
import styled, { DefaultTheme } from "styled-components";
import StyledSystem, { ResponsiveValue, TLengthStyledSystem, grid } from "styled-system";
import { Box } from "../Box";
import { isNull, isNumber } from "../../utils/assertions";
import { mapResponsive } from "../../utils/responsive";

type MinWidth = ResponsiveValue<CSS.WidthProperty<TLengthStyledSystem>, DefaultTheme>;
type ColumnsCount = ResponsiveValue<number, DefaultTheme>;

export interface GridProps {
  minChildWidth?: MinWidth;
  columns?: ColumnsCount;
  spacing?: StyledSystem.GridProps["gridGap"];
  spacingX?: StyledSystem.GridProps["gridColumnGap"];
  spacingY?: StyledSystem.GridProps["gridRowGap"];
} 

const StyledGrid = styled(Box)<StyledSystem.GridProps>(
  {
    display: "grid",
  },
  grid
);

export const Grid: React.FC<GridProps> = ({
  columns,
  spacing,
  spacingX,
  spacingY,
  minChildWidth,
  ...rest
}: GridProps) => {
  const templateColumns = minChildWidth
    ? widthToColumns(minChildWidth)
    : countToColumns(columns);

  return (
    <StyledGrid
      gridGap={spacing}
      gridColumnGap={spacingX}
      gridRowGap={spacingY}
      gridTemplateColumns={templateColumns}
      {...rest}
    />
  );
};
Grid.displayName="Grid";

function toPx(n: string | number) {
  return isNumber(n) ? n + "px" : n;
}

function widthToColumns(width: MinWidth) {
  return mapResponsive(width, (value) =>
    isNull(value) ? null : `repeat(auto-fit, minmax(${toPx(value)}, 1fr))`,
  );
}

function countToColumns(count: ColumnsCount) {
  return mapResponsive(count, (value) =>
    isNull(value) ? null : `repeat(${value}, 1fr)`,
  );
}