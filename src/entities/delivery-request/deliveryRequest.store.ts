import { makeAutoObservable } from "mobx"
import type { DeliveryRequestDto } from "./model"

class DeliveryRequestStoreClass {
  state: DeliveryRequestDto = {
    step: 0,
    loadPlaceId: null,
    warehouseId: null,
    deliveryDate: null,
    vehicleId: null,
    boxIds: [],
    senderName: null,
    contactId: null,
    contact_number: null,
    contact_name: null
  }

  constructor() {
    makeAutoObservable(this)
  }

  set<K extends keyof DeliveryRequestDto>(key: K, value: DeliveryRequestDto[K]) {
    this.state[key] = value
  }

  reset() {
    this.state = {
      step: 0,
      loadPlaceId: null,
      warehouseId: null,
      deliveryDate: null,
      vehicleId: null,
      boxIds: [],
      senderName: null,
      contactId: null,
      contact_number: null,
      contact_name: null
    }
  }
}

export const deliveryRequestStore = new DeliveryRequestStoreClass()
