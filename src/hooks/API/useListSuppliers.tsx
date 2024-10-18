// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { z } from "zod";
// import { TSupplier } from "../../types/SupplierType";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// const kwhSchema = z.object({
//   kwh: z.number().min(1, "O valor de kwh deve ser maior que 0."),
// });

// type SuppliersListSchema = z.infer<typeof kwhSchema>;

// export const useListSuppliers = () => {
//   const supplierListContext = useForm<SuppliersListSchema>({
//     resolver: zodResolver(kwhSchema),
//   });

//   const { watch } = supplierListContext;
//   const kwh = watch("kwh");

//   const { data, error, isLoading, refetch } = useQuery<TSupplier[], Error>({
//     queryKey: ["suppliers", kwh],
//     queryFn: () => fetchSuppliers(kwh),
//     enabled: false,
//   });

//   async function fetchSuppliers(kwh: number): Promise<TSupplier[]> {
//     const result = await axios.get(
//       `https://api-clarke.onrender.com/suppliers`,
//       {
//         params: { kwh },
//       }
//     );
//     return result.data;
//   }

//   return { data, error, isLoading, supplierListContext, refetch };
// };

// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { z } from "zod";
// import { TSupplier } from "../../types/SupplierType";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// const kwhSchema = z.object({
//   kwh: z
//     .number({ invalid_type_error: "Kwh precisa ser númerico" })
//     .min(1, "O valor de kwh deve ser maior que 0."),
// });

// type SuppliersListSchema = z.infer<typeof kwhSchema>;

// export const useListSuppliers = () => {
//   const supplierListContext = useForm<SuppliersListSchema>({
//     resolver: zodResolver(kwhSchema),
//   });

//   const { watch } = supplierListContext;
//   const kwh = watch("kwh");

//   const { data, error, isLoading, refetch } = useQuery<TSupplier[], Error>({
//     queryKey: ["suppliers", kwh],
//     queryFn: () => fetchSuppliers(kwh),
//     enabled: !!kwh, // Executa a consulta apenas se kwh estiver definido
//   });

//   async function fetchSuppliers(kwh: number): Promise<TSupplier[]> {
//     const result = await axios.get(
//       `https://api-clarke.onrender.com/suppliers`,
//       {
//         params: { kwh },
//       }
//     );
//     return result.data;
//   }

//   return { data, error, isLoading, supplierListContext, refetch };
// };

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod";
import { TSupplier } from "../../types/SupplierType";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const kwhSchema = z.object({
  kwh: z
    .number({ invalid_type_error: "Kwh precisa ser númerico" })
    .min(1, "O valor de kwh deve ser maior que 0."),
});

export type SuppliersListSchema = z.infer<typeof kwhSchema>;

export const useListSuppliers = () => {
  const supplierListContext = useForm<SuppliersListSchema>({
    resolver: zodResolver(kwhSchema),
  });

  const { mutate, error, data, isPending } = useMutation<
    TSupplier[],
    Error,
    number
  >({
    mutationFn: fetchSuppliers,
    onError: (err) => {
      console.error(err);
    },
    onpe,
  });

  async function fetchSuppliers(kwh: number): Promise<TSupplier[]> {
    const result = await axios.get(
      `https://api-clarke.onrender.com/suppliers`,
      {
        params: { kwh },
      }
    );
    return result.data;
  }

  return { data, error, supplierListContext, mutate, isPending };
};
