import { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import noDataImg from "../../assets/no-data.svg";
import { TSupplier } from "../../types/SupplierType";
import { ListSuppliers } from "./ListSuppliers";
import { toast } from "sonner";

const kwhSchema = z.object({
  kwh: z
    .number({ invalid_type_error: "kWh é obrigatório e precisa ser numérico" })
    .min(1, { message: "O valor de kWh deve ser maior que 0." })
    .nonnegative("kWh é obrigatório e precisa ser numérico."),
});

export const FindSuppliers = () => {
  const [data, setData] = useState<TSupplier[]>([]);
  const [loading, setLoading] = useState(false);
  const [requestMade, setRequestMade] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<{ kwh: number }>({
    resolver: zodResolver(kwhSchema),
  });

  const onSubmit = async (values: { kwh: number }) => {
    setLoading(true);
    setRequestMade(false);

    const loadingToast = toast.loading(
      "Buscando fornecedores, por favor, aguarde... O servidor pode estar iniciando.",
      {
        style: { color: "#00BF6A" },
      }
    );

    try {
      const response = await axios.get(
        `https://api-clarke.onrender.com/suppliers`,
        {
          params: { kwh: values.kwh },
        }
      );

      setData(response.data);
      setRequestMade(true);
    } catch (error) {
      console.error("Error fetching suppliers:", error);

      setData([]);
    } finally {
      setLoading(false);
      toast.dismiss(loadingToast);
    }
  };

  return (
    <Flex w="100%" pt={20} pb={20} px={{ base: 5, lg: 0 }}>
      <Flex
        align="center"
        justify={"center"}
        w="100%"
        flexDir={"column"}
        gap="20"
      >
        <Text
          fontSize={"3xl"}
          textAlign={"center"}
          fontWeight={500}
          maxW={"600px"}
        >
          Informe seu consumo mensal e encontre seu fornecedor
        </Text>

        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          flexDir={"column"}
          align={"center"}
          gap="10"
          noValidate
        >
          <FormControl isRequired isInvalid={!!errors.kwh}>
            <FormLabel htmlFor="kwh">
              Qual o consumo mensal da sua empresa em kWh?
            </FormLabel>

            <Input
              {...register("kwh", { valueAsNumber: true })}
              background={"#F5F8FA"}
              border={"1px solid #CBD6E2"}
              type="number"
              onWheel={(e) => (e.target as HTMLInputElement).blur()}
            />

            {errors.kwh && (
              <Text color="red.500">{String(errors.kwh.message)}</Text>
            )}
          </FormControl>

          <Button
            color="#222222"
            background={"#00BF6A"}
            borderRadius={"50px"}
            w="150px"
            type="submit"
            isLoading={loading}
            _hover={{ background: "#00A75C" }}
          >
            Encontrar
          </Button>
        </Flex>
        {data.length > 0 && <ListSuppliers suppliers={data} />}

        {requestMade && data.length === 0 && !loading && (
          <Flex flexDir={"column"}>
            <Image h="200px" src={noDataImg} />
            <Text>Nenhum fornecedor que possa te atender foi encontrado</Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
