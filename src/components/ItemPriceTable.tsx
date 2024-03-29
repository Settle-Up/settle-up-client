import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import theme from "@theme";
import { useRecoilValue } from "recoil";
import { newExpenseState } from "@store/expenseStore";
import mockExpense from "@mock/expenseMock";

const ItemPriceTable = () => {
  // const { itemOrderDetailsList } = useRecoilValue(newExpenseState);
  const { itemOrderDetailsList } = mockExpense;

  return (
    <TableContainer className="custom-scrollbar">
      <Table sx={{ minWidth: 650 }} aria-label="Receipt Items Summary Table">
        <TableHead>
          <TableRow>
            {["Item", "Unit Price", "Quantity", "Total Price"].map(
              (text, index) => (
                <TableCell
                  key={text}
                  sx={{
                    fontWeight: "bold",
                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                    backgroundColor:
                      index % 2 === 0
                        ? theme.palette.background.paper
                        : "#EDEDED",
                    color:
                      index % 2 === 0
                        ? theme.palette.text.secondary
                        : "inherit",
                  }}
                >
                  {text}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {itemOrderDetailsList.map(
            ({ itemId, itemName, unitPrice, itemQuantity, itemTotalPrice }) => (
              <TableRow key={itemId}>
                {[
                  itemName,
                  unitPrice.toLocaleString() + "₩",
                  itemQuantity,
                  itemTotalPrice.toLocaleString() + "₩",
                ].map((cellData, index) => {
                  const isOdd = index % 2 === 0;
                  return (
                    <TableCell
                      key={index}
                      component={index === 0 ? "th" : undefined}
                      scope={index === 0 ? "row" : undefined}
                      sx={{
                        backgroundColor: isOdd
                          ? theme.palette.background.paper
                          : "#EDEDED",
                        color: isOdd ? theme.palette.text.secondary : "inherit",
                      }}
                    >
                      {cellData}
                    </TableCell>
                  );
                })}
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemPriceTable;
