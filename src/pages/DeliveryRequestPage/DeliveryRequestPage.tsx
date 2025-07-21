import { observer } from "mobx-react-lite"

import { LoadPlaceWidgets } from "@/widgets/load-place/load-place"
import { WarehouseCard } from "@/widgets/warehouse/warehouse" 
import { deliveryRequestStore } from "@/entities/delivery-request/deliveryRequest.store"
import { DataSlotWidget } from "@/widgets/data_slot/data_slot"

export const DeliverRequests = observer(() => {
  const { step, loadPlaceId } = deliveryRequestStore.state

  return (
    <>
      {step === 0 && <LoadPlaceWidgets />}
      {step === 1 &&<WarehouseCard />} 
      {step === 2 && <DataSlotWidget />}
    </>
  )
})
