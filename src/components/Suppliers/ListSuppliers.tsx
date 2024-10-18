import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { TSupplier } from "../../types/SupplierType";

interface ListSuppliersProps {
  suppliers: TSupplier[];
}

export function ListSuppliers({ suppliers }: ListSuppliersProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <Icon key={`full-${i}`} as={FaStar} color="yellow.500" />
          ))}
        {halfStar && <Icon as={FaStarHalf} color="yellow.500" />}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <Icon key={`empty-${i}`} as={FaStar} color="gray.300" />
          ))}
      </>
    );
  };

  return (
    <TableContainer
      border={"1px solid #CBD6E2"}
      borderRadius={"10px"}
      overflowX={"auto"}
    >
      <Table variant="simple">
        <Thead>
          <Tr color="red">
            <Th></Th>
            <Th textTransform={"none"}>Fornecedor</Th>
            <Th textTransform={"none"}>Custo por kWh</Th>
            <Th textTransform={"none"}>Clientes</Th>
            <Th textTransform={"none"}>UF</Th>
            <Th textTransform={"none"}>Avaliação</Th>
          </Tr>
        </Thead>
        <Tbody>
          {suppliers && suppliers.length > 0 ? (
            suppliers.map((row, index) => (
              <Tr key={index}>
                <Td>
                  <Image h="50px" minW={"50px"} src={row.logoUrl} />
                </Td>
                <Td>{row.name}</Td>
                <Td>{row.costPerKwh}</Td>
                <Td>{row.totalClients}</Td>
                <Td>{row.originState}</Td>
                <Td>{renderStars(row.averageRating)}</Td>
              </Tr>
            ))
          ) : (
            <Text>Nenhum fornecedor encontrado</Text>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
