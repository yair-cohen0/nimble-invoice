import {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";
import {fetchInvoiceAmountsByStatus} from "../queries/fetchInvoiceAmountsByStatus.query.ts";
import Chart from "../components/chart.tsx";

function InvoiceAmountsByStatusChart() {

    const {data, isLoading} = useQuery({
        queryFn: fetchInvoiceAmountsByStatus,
        queryKey: ['invoiceAmountsByStatus']
    })

    const invoiceAmountsByStatusData = useMemo(() => {
        if (!data) return null;
        return {
            labels: Object.keys(data),
            datasets: [
                {
                    label: 'Total Amounts by Status',
                    data: Object.values(data), // Example data
                },
            ],
        };
    }, [data])

    return (
        <>
            {!isLoading ? <Chart type={'bar'} data={invoiceAmountsByStatusData}></Chart> : <span>loading...</span>}
        </>
    )
}

export default InvoiceAmountsByStatusChart
