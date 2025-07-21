import { makeAutoObservable } from "mobx"
import { mobxSaiFetch, mobxSaiHandler, type MobxSaiInstance } from "mobx-toolbox"
import { api } from "@/shared/api/api"
import { deliveryRequestStore } from "../delivery-request/deliveryRequest.store"

export interface DataSlot {
  id: number
  warehouse: number
  delivery_date: string
  car_brand: string
  car_number: string
  expected_arrival: string  
}

class DataSlotStore {
    getDataDelivery: MobxSaiInstance<DataSlot[]> = {}

  constructor() {
    makeAutoObservable(this)}

    getDataSlot = async () => {
        const id = deliveryRequestStore.state.warehouseId
        
        this.getDataDelivery = mobxSaiFetch(() => 
        api.get(`/data_slot/${id}`).then(res => res.data))

        mobxSaiHandler(
            this.getDataDelivery,
            (data) => {
              console.log("✅ Доступные города получены:", data)
            },
            (error) => {
              console.error("❌ Ошибка при получении складов:", error)
            }
          )
    }
}

export const DataSlotsStore = new DataSlotStore()
