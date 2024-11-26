import {axiosClient} from "./index.ts";

export async function fetchInvoiceAmountsByStatus(): Promise<Record<string, number>> {
    try {
        const response = await axiosClient.get("/invoice/amountsByStatus");
        return response.data;
    } catch (error) {
        console.error("Error fetching invoice amounts by status:", error);
        throw error;
    }
}