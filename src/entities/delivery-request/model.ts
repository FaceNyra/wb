export interface DeliveryRequestDto {
    step: number,
    loadPlaceId: number | null
    warehouseId: number | null
    deliveryDate: string | null
    vehicleId: number | null
    boxIds: number[]
    senderName: string | null 
    contactId: string | null
    contact_number: string | null
    contact_name: string | null
  }
  