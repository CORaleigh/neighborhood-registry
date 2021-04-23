import React, { useEffect, useRef } from 'react';
import ArcGISMap from '@arcgis/core/Map';
import ArcGISMapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
export const MapView = (props: any) => {
    const ref = useRef<HTMLDivElement>(null);
    const getBasemap = (): any => {
        return {
            baseLayers: [
                new VectorTileLayer({
                    portalItem: {
                        id: props.basemap,
                    },
                }),
            ],
        }
    }

    const getLayers = (): __esri.Layer[] => {
        const rnrLayer =  new FeatureLayer({id:'neighborhoods',portalItem: {id: props.neighborhoods}});
        const propLayer =  new FeatureLayer({id:'parcels', portalItem: {id: props.parcels}, popupEnabled: true});
        const graphics = new GraphicsLayer();
        return [rnrLayer, propLayer, graphics];
    }
    useEffect(() => {
        const map = new ArcGISMap({basemap: getBasemap(), layers: getLayers()});

        const view = new ArcGISMapView({container: ref.current as HTMLDivElement, map: map});
        view.when(() => {
            (view.map.findLayerById('neighborhoods') as FeatureLayer).queryExtent({where: '1=1'}).then((result) => {
                view.goTo(result.extent);
            });
            props.mapInitialized(view);
        });
    }, [])
    return (
        <div ref={ref}></div>
    );
}