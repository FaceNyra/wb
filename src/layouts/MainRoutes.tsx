import { observer } from "mobx-react-lite"
import { Routes, Route } from "react-router-dom"
import { MainLayout } from "./MainLayout/MainLayout"

import { DeliverRequests } from "@/pages/DeliveryRequestPage/DeliveryRequestPage"


export const MainRoutes = observer(() => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<DeliverRequests />} />
    
            </Route>
        </Routes>
    )   
})
    