import {
    PlasmicRootProvider,
    PlasmicComponent,
    usePlasmicQueryData
  } from '@plasmicapp/loader-nextjs';
  import { PLASMIC } from '../../plasmic-init';
  import React, { useState } from 'react';
  
  export default function Layout( props: { children: React.ReactNode[] }  )
  {
    const [displayMenu, setDisplayMenu] = useState(false);
  
  const plasmicData = usePlasmicQueryData("layout", async () => PLASMIC.fetchComponentData("Header", "Footer", "Menu"))
    return (
      plasmicData.data && <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData.data}>
        <div className={displayMenu ? 'layoutMenu toggled' : 'layoutMenu'}>
          <PlasmicComponent component="Menu" 
          componentProps={{
            toggled:displayMenu,
            container: {
              props: {
                onClick: () => setDisplayMenu(false)
              }
            },
            menutoggle: {
              props: {
                onClick: () => setDisplayMenu(false)
              }
            }
            }} />
          </div>
        <div className={displayMenu ? 'noScroll' : ''} style={{display:'flex', alignItems:'stretch', flexDirection:'column'}}>
          <PlasmicComponent component="Header" 
          componentProps={{
            menutoggle: {
              props: {
                onClick: () => setDisplayMenu(true)
              }
            }
            }} />
          <div>{props.children}</div>
          <PlasmicComponent component="Footer" />
        </div>
        </PlasmicRootProvider>
    )
  }