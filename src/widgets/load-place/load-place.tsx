import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { MapPin } from "lucide-react"

import { placeStore } from "@/entities/load-place/load-place.store"
import { AsyncDataRender } from "@/shared/ui/AsyncDataRender/AsyncDataRender"
import { deliveryRequestStore } from "@/entities/delivery-request/deliveryRequest.store"

import styles from "./load-place.module.scss"

export const LoadPlaceWidgets = observer(() => {
  const { places: { data, status, error }} = placeStore

  useEffect(() => {
    placeStore.getPlaceAll()
  }, [])

  const handleSelectPlace = (id: number) => {
    deliveryRequestStore.set("loadPlaceId", id)
    deliveryRequestStore.set("step", 1)
  }

  return (
    <AsyncDataRender
      data={data}
      status={status}
      error={error}
      isEmpty={!data || data.length === 0}
    >
      <main>
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>Выберите место для загрузки</h1>
          {data && data?.map((place) => (
            <div
              key={place.id}
              className={styles.item}
              onClick={() => handleSelectPlace(place.id)}
            >
              <div className={styles.icon}>
                <MapPin size={20} />
              </div>
              <div className={styles.info}>
                <div className={styles.title}>{place.city}</div>
                <div className={styles.sub}>{place.address}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </AsyncDataRender>
  )
})
