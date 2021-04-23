import React, { useEffect, useRef } from "react"
import Editor from '@arcgis/core/widgets/Editor';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
export const Edit = (props: any) => {
    const ref = useRef<HTMLDivElement>(null);
    const editor = useRef<Editor>();
    useEffect(() => {
        const neighborhoods = props.view.map.findLayerById('neighborhoods');
        const parcels = props.view.map.findLayerById('parcels') as __esri.FeatureLayer;
        editor.current = new Editor({
            container: ref.current as HTMLDivElement, 
            view: props.view,
            layerInfos: [
                {layer: props.view.map.findLayerById('neighborhoods')}
            ],
            snappingOptions: { // autocasts to SnappingOptions()
                enabled: true,
                featureEnabled: true,
                featureSources: [
                    { layer: neighborhoods } as __esri.FeatureSnappingLayerSource, 
                    { layer: parcels } as __esri.FeatureSnappingLayerSource 
                ]             
            }
        });

    }, []);
    return(<div><div ref={ref}></div><calcite-button onClick={() => {
        if (editor.current) {
            const newFeature = editor.current.viewModel.featureFormViewModel.feature;
            (props.view.map.findLayerById('parcels') as __esri.FeatureLayer)?.queryFeatures({spatialRelationship: 'intersects', returnGeometry: true,
            returnCentroid: true, geometry: newFeature.geometry, outSpatialReference: {wkid: 102100}}).then(featureSet => {
                const within = featureSet.features.filter(feature => {
                    return geometryEngine.within((feature.geometry as __esri.Polygon).centroid, newFeature.geometry);
                });
               newFeature.setAttribute('HOMES', within.length);
               if (editor.current) {
                editor.current.viewModel.featureFormViewModel.feature = newFeature.clone();

               }
            });

        }        
    }}>Calculate Homes</calcite-button></div>)}