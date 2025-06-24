import { supabase } from "./supabase";

export async function getMenu() {
  try {
    const { data, error } = await supabase.from("milktea_menu").select("*");

    if (error) {
      console.error("Error fetching data:", error);
      throw Error("Couldn't fetch menu");
    }
    return data;
  } catch (error) {
    console.error("Error fetching menu:", error);
    throw error;
  }
}

export async function getOrder(id) {
  try {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching order:", error);
      throw Error(`Couldn't find order #${id}`);
    }

    return data;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
}

export async function createOrder(newOrder) {
  try {
    const { data, error } = await supabase
      .from("orders")
      .insert([newOrder])
      .select()
      .single();

    if (error) {
      console.error("Error creating order:", error);
      throw Error("Failed creating your order");
    }

    return data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const { error } = await supabase
      .from("orders")
      .update(updateObj)
      .eq("id", id);

    if (error) {
      console.error("Error updating order:", error);
      throw Error("Failed updating your order");
    }
  } catch (error) {
    console.error("Error updating order:", error);
    throw error;
  }
}

export async function createEmail(newEmail) {
  try {
    const { data, error } = await supabase
      .from("email-address")
      .insert([
        {
          email: newEmail,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error creating email:", error);
      throw Error("Failed storing the email.");
    }
    return data;
  } catch (error) {
    console.error("Error creating email:", error);
    throw error;
  }
}
