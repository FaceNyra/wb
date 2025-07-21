import { makeAutoObservable } from "mobx"
import { mobxSaiFetch, mobxSaiHandler, type MobxSaiInstance } from "mobx-toolbox"
import { api } from "@/shared/api/api"
import { deliveryRequestStore } from "../delivery-request/deliveryRequest.store"

export interface Ware {
  id: number
  load_place: number
  city: string
  marketplace: string
  address: string
  note: string
}

class WareHouseStores {
  getWareHouse: MobxSaiInstance<Ware[]> = {}

  constructor() {
    makeAutoObservable(this)
  }

  getWare = async () => {
    const placeId = deliveryRequestStore.state.loadPlaceId
    if (!placeId) return

    this.getWareHouse = mobxSaiFetch(() =>
      api.get(`/warehouse/${placeId}`).then(res => res.data)
    )

    mobxSaiHandler(
      this.getWareHouse,
      (data) => {
        console.log("✅ Склады получены:", data)
      },
      (error) => {
        console.error("❌ Ошибка при получении складов:", error)
      }
    )
  }
}

export const WareStore = new WareHouseStores()
