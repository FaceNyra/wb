import { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { MapPin } from "lucide-react"
import styles from "./warehouse.module.scss"
import wbIcon from "@/assets/icon/wb_icon.png"
import ozonIcon from "@/assets/icon/ozon.png"

import { WareStore } from "@/entities/warehouse/warehouse.store"
import { deliveryRequestStore } from "@/entities/delivery-request/deliveryRequest.store"

export const WarehouseCard = observer(() => {
  const { data } = WareStore.getWareHouse

  useEffect(() => {
    WareStore.getWare()
  }, [])

  const [imgErrorMap, setImgErrorMap] = useState<Record<number, boolean>>({})

  const handleSelect = (id: number) => {
    deliveryRequestStore.set("warehouseId", id)
    deliveryRequestStore.set("step", 2)
    console.log("✅ Склад выбран:", id)
  }

  const getMarketplaceIcon = (marketplace: string) => {
    switch (marketplace?.toLowerCase()) {
      case "wb":
        return wbIcon
      case "ozon":
        return ozonIcon
      default:
        return null
    }
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Склад поставки</h1>
      <div className={styles.wrapper}>
        {data?.map((ware) => {
          const icon = getMarketplaceIcon(ware.marketplace)
          const imgError = imgErrorMap[ware.id]
          const onlyCity = !ware.address && !ware.note

          return (
            <div
              key={ware.id}
              className={`${styles.item} ${onlyCity ? styles.centered : ""}`}
              onClick={() => handleSelect(ware.id)}
            >
              <div className={styles.info}>
                <div className={styles.title}>{ware.city}</div>

                {ware.address && (
                  <div className={styles.sub}>
                    <MapPin size={14} style={{ marginRight: 4, verticalAlign: "middle" }} />
                    {ware.address}
                  </div>
                )}

                {ware.note && <div className={styles.note}>{ware.note}</div>}
              </div>

              {icon && !imgError ? (
                <img
                  src={icon}
                  alt={ware.marketplace}
                  className={styles.marketIcon}
                  onError={() =>
                    setImgErrorMap((prev) => ({ ...prev, [ware.id]: true }))
                  }
                />
              ) : (
                <div className={styles.marketIconText}>{ware.marketplace}</div>
              )}
            </div>
          )
        })}
      </div>
    </main>
  )
})
