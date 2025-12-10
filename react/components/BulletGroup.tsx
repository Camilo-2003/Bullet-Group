import React, { PropsWithChildren } from "react";
import { BulletGroupProp } from "../interfaces/Bulletsinterfaces";
import { BulletMap } from "./BulletMap";
import { useCssHandles } from "vtex.css-handles";
import { useListContext, ListContextProvider } from "vtex.list-context";
import { useDevice } from "vtex.device-detector";

const BulletGroup = ({ bullets, children }: PropsWithChildren<BulletGroupProp>) => {
  const { list } = useListContext() || [];
  const { isMobile } = useDevice();

  const CSS = [
    "bullet__container",
    "bullet__container--title"
  ];
    
  const handle = useCssHandles(CSS);

  const bulletsGroup = BulletMap(bullets);

  const newBulletsGroup = list.concat(bulletsGroup);

  return (
    <ListContextProvider list={newBulletsGroup}>
      {
        isMobile ? 
        <div>
          <h3 className={handle["bullet__container--title"]}>Futuras Categorias</h3>
          <section className={handle.bullet__container}>
            {bulletsGroup}
          </section>
        </div>
      :
        children
      }
    </ListContextProvider>
  )

}

export default BulletGroup;
