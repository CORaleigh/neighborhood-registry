import React, { useEffect, useRef, useState } from 'react';
import { Edit } from './Edit';
import { MapView } from './MapView';

export const Shell = () => {
    const panel = useRef<HTMLCalciteShellPanelElement>(null);
    
    const [view, setView] = useState<__esri.MapView>();
    const mapInitialized = (view: __esri.MapView) => {
        setView(view);
    }
    useEffect(() => {

    }, []);
    return (<calcite-shell theme="dark">
        <calcite-shell-panel slot="primary-panel"  ref={panel}>
            {view && <Edit view={view}/>}
        </calcite-shell-panel>
        <div slot="shell-header">
            <header>
                <calcite-button alignment="start" color="neutral" appearance="transparent" onClick={() => {
                    debugger
                    if (panel.current) {
                        panel.current.collapsed = !panel.current.collapsed ;
                    }
                }}><calcite-icon icon="hamburger" scale="l"></calcite-icon></calcite-button>

                <h2>Neighborhood Registry Editor</h2>
            </header>
        </div>       
        <MapView basemap="b69e76a446ac479998ff31de839ba323" 
            neighborhoods="eefd95533f0e4352bdf6b8d454644097" 
            parcels="08050bf067bb4b20adea4b0b4f0a39e3"
            mapInitialized={mapInitialized}
            /> 
    </calcite-shell>)
}