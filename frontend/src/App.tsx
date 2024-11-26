import './App.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import InvoiceAmountsByStatusChart from "./pages/invoiceAmountsByStatusChart.tsx";

function App() {

    const queryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <InvoiceAmountsByStatusChart/>
            </QueryClientProvider>
        </>
    )
}

export default App
