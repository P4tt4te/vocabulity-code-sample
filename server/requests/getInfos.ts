import { PaymentInfos } from "../../constants/State";
import { supabase } from "../initSupabase";

export type Infos = {
  username: string;
  premium_account: boolean;
  payment_infos: PaymentInfos;
};

export const getInfos = async () => {
  try {
    let userId = null;
    await supabase.auth.getSession().then(({ data: session }) => {
      if (session) {
        userId = session.session?.user.id;
      }
    });

    const infos = await supabase
      .from("profiles")
      .select("username,premium_account,payment_infos")
      .eq("id", userId)
      .single()
      .then(({ data, error }) => {
        if (!error && data && data.premium_account !== undefined) {
          return data as Infos;
        }
      });
    return infos;
  } catch (error) {
    console.error(error);
  }
};
