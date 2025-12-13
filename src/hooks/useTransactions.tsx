import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

export interface Transaction {
  id: string;
  user_id: string | null;
  from_currency: string;
  to_currency: string;
  amount: number;
  converted_amount: number;
  exchange_rate: number;
  fees: number;
  points_earned: number;
  status: string;
  created_at: string;
}

export const useTransactions = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["transactions", user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from("transactions")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Transaction[];
    },
    enabled: !!user,
  });
};

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (transaction: Omit<Transaction, "id" | "user_id" | "created_at">) => {
      if (!user) throw new Error("Not authenticated");

      const pointsToAdd = Math.floor(transaction.amount / 100);

      const { data, error } = await supabase
        .from("transactions")
        .insert({
          ...transaction,
          user_id: user.id,
          points_earned: pointsToAdd,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
