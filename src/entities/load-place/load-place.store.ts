// entities/load-place/load-place.store.ts
import { mobxSaiFetch, mobxSaiHandler, type MobxSaiInstance } from "mobx-toolbox"
import { makeAutoObservable } from "mobx"
import { api } from "@/shared/api/api"

export interface Place {
  id: number
  city: string
  address: string
}

class PlaceStoreClass {

  constructor() { makeAutoObservable(this) }

  places: MobxSaiInstance<Place[]> = {}

  getPlaceAll = () => {
    this.places = mobxSaiFetch(() => getPlaces(), {
      id: "getPlaces" 
    })

    mobxSaiHandler(
      this.places,
      (data) => {
        console.log("✅ Города получены:", data)
      },
      (error) => {
        console.error("❌ Ошибка при получении складов:", error)
      }
    )
  }
}

export const placeStore = new PlaceStoreClass()

const getPlaces = async () => (await api.get("/delivery")).data